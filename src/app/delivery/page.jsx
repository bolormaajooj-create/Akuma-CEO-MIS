'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter
} from 'recharts';

const WEBHOOK = 'https://akuma.bitrix24.com/rest/61022/y7fjd5sjeb7e5bhx';
const CATEGORY_ID = 10;

const STAGES = [
  { id: 'NEW',         label: 'Шинэ хүргэлт',       color: '#60A5FA', bg: '#EFF6FF' },
  { id: 'PREPARATION', label: 'Хойшилсон',            color: '#FBBF24', bg: '#FFFBEB' },
  { id: 'EXECUTING',   label: 'Хүргэлтэнд гарсан',   color: '#818CF8', bg: '#EEF2FF' },
  { id: 'LOSE',        label: 'Амжилтгүй',            color: '#F87171', bg: '#FEF2F2' },
  { id: 'WON',         label: 'Хүргэлт амжилттай',   color: '#34D399', bg: '#ECFDF5' },
];

const PERIODS = [
  { key: 'today', label: 'Өнөөдөр' },
  { key: 'week',  label: '7 хоног' },
  { key: 'month', label: 'Сар' },
];

const CHART_TYPES = [
  { key: 'area', label: 'Area' },
  { key: 'bar',  label: 'Bar' },
  { key: 'line', label: 'Line' },
];

// Дүүрэг map: API ID → нэр
const DUUREN_MAP = {
  '8414': 'Хан-уул', '8416': 'Сүхбаатар', '8418': 'Баянзүрх',
  '8420': 'Баянгол', '8422': 'Сонгинохайрхан', '8424': 'Чингэлтэй',
  '8426': 'Налайх', '8428': 'Багануур', '8430': 'Багахангай',
  '8866': 'Хөдөө орон нутаг',
};

const DUUREN_FIELD = 'UF_CRM_1749466520';

function fmt(n) { return Number(n || 0).toLocaleString('mn-MN'); }
function fmtMoney(n) { return `${fmt(Math.round(n / 1000))}K ₮`; }
function fmtHours(h) {
  if (h < 24) return `${Math.round(h)} цаг`;
  return `${Math.round(h / 24)} өдөр`;
}

// ── Долоо хоног: Даваа → Ням ──────────────────────────────────────────────
function getWeekRange() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun,1=Mon,...
  const diffToMon = (day === 0) ? -6 : 1 - day;
  const mon = new Date(now);
  mon.setDate(now.getDate() + diffToMon);
  mon.setHours(0, 0, 0, 0);
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);
  sun.setHours(23, 59, 59, 999);
  return { from: mon, to: sun };
}

function getMonthRange() {
  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
  const to = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
  return { from, to };
}

function getPeriodFilter(period) {
  const now = new Date();
  if (period === 'today') {
    const s = new Date(now); s.setHours(0, 0, 0, 0);
    return { '>=DATE_CREATE': s.toISOString(), '<=DATE_CREATE': now.toISOString() };
  }
  if (period === 'week') {
    const { from, to } = getWeekRange();
    return { '>=DATE_CREATE': from.toISOString(), '<=DATE_CREATE': to.toISOString() };
  }
  if (period === 'month') {
    const { from, to } = getMonthRange();
    return { '>=DATE_CREATE': from.toISOString(), '<=DATE_CREATE': to.toISOString() };
  }
  return {};
}

function getPeriodLabel(period) {
  if (period === 'today') return 'Өнөөдөр';
  if (period === 'week') {
    const { from, to } = getWeekRange();
    return `${from.toLocaleDateString('mn-MN')} — ${to.toLocaleDateString('mn-MN')}`;
  }
  if (period === 'month') {
    const now = new Date();
    return `${now.getFullYear()}/${now.getMonth() + 1}-р сар`;
  }
  return '';
}

// ── API ──────────────────────────────────────────────────────────────────────
async function fetchAll(method, params = {}) {
  let all = [], start = 0;
  while (true) {
    const res = await fetch(`${WEBHOOK}/${method}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...params, start }),
    });
    const data = await res.json();
    if (!data.result) break;
    const items = Array.isArray(data.result) ? data.result : Object.values(data.result);
    all = all.concat(items);
    if (!data.next) break;
    start = data.next;
  }
  return all;
}

async function fetchDeals(filter = {}) {
  return fetchAll('crm.deal.list', {
    filter: { CATEGORY_ID, ...filter },
    select: ['ID', 'TITLE', 'STAGE_ID', 'OPPORTUNITY', 'ASSIGNED_BY_ID',
             'DATE_CREATE', 'CLOSEDATE', 'MOVED_TIME', DUUREN_FIELD],
  });
}

async function fetchUsers(ids) {
  if (!ids.length) return {};
  const res = await fetchAll('user.get', { filter: { ID: ids } });
  return Object.fromEntries(res.map(u => [u.ID, `${u.NAME} ${u.LAST_NAME || ''}`.trim()]));
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function groupByDay(deals) {
  const map = {};
  deals.forEach(d => {
    const day = (d.DATE_CREATE || '').slice(0, 10);
    if (!day) return;
    if (!map[day]) map[day] = { date: day, амжилттай: 0, амжилтгүй: 0, нийт: 0 };
    map[day].нийт++;
    if (d.STAGE_ID?.includes('WON')) map[day].амжилттай++;
    if (d.STAGE_ID?.includes('LOSE')) map[day].амжилтгүй++;
  });
  return Object.values(map).sort((a, b) => a.date.localeCompare(b.date));
}

function getDuurenStats(deals) {
  const map = {};
  deals.forEach(d => {
    const did = d[DUUREN_FIELD];
    const name = DUUREN_MAP[did] || 'Тодорхойгүй';
    if (!map[name]) map[name] = { name, нийт: 0, амжилттай: 0, амжилтгүй: 0, дүн: 0 };
    map[name].нийт++;
    map[name].дүн += Number(d.OPPORTUNITY || 0);
    if (d.STAGE_ID?.includes('WON')) map[name].амжилттай++;
    if (d.STAGE_ID?.includes('LOSE')) map[name].амжилтгүй++;
  });
  return Object.values(map).sort((a, b) => b.нийт - a.нийт);
}

function getAgentDuurenMatrix(deals, users) {
  const matrix = {};
  deals.forEach(d => {
    const uid = d.ASSIGNED_BY_ID;
    const name = users[uid] || `#${uid}`;
    const did = d[DUUREN_FIELD];
    const dname = DUUREN_MAP[did] || 'Тодорхойгүй';
    if (!matrix[name]) matrix[name] = { name, total: 0 };
    matrix[name][dname] = (matrix[name][dname] || 0) + 1;
    matrix[name].total++;
  });
  return Object.values(matrix).sort((a, b) => b.total - a.total);
}

function getDurationStats(deals) {
  const rows = [];
  deals.forEach(d => {
    if (!d.DATE_CREATE || !d.MOVED_TIME) return;
    const sid = d.STAGE_ID?.replace(/^C10:/, '') || '';
    if (!sid.includes('WON')) return;
    const start = new Date(d.DATE_CREATE);
    const end = new Date(d.MOVED_TIME);
    const hours = (end - start) / 3600000;
    if (hours < 0 || hours > 720) return;
    const day = d.DATE_CREATE.slice(0, 10);
    rows.push({ date: day, hours: Math.round(hours * 10) / 10 });
  });
  // Group by day avg
  const map = {};
  rows.forEach(r => {
    if (!map[r.date]) map[r.date] = { date: r.date, нийт: 0, тоо: 0 };
    map[r.date].нийт += r.hours;
    map[r.date].тоо++;
  });
  return Object.values(map)
    .map(r => ({ date: r.date, дундаж: Math.round(r.нийт / r.тоо * 10) / 10 }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

// ── Sub-components ───────────────────────────────────────────────────────────
function Skeleton({ h = 80 }) {
  return (
    <div style={{
      height: h, borderRadius: 10,
      background: 'linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%)',
      backgroundSize: '200%', animation: 'shimmer 1.4s infinite'
    }} />
  );
}

function KpiCard({ label, value, sub, color, bg, icon }) {
  return (
    <div style={{ background: bg || '#F7F8FA', borderRadius: 14, padding: '18px 20px', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: '#6B7280', fontWeight: 500 }}>{label}</span>
        {icon && <span style={{ fontSize: 18 }}>{icon}</span>}
      </div>
      <div style={{ fontSize: 26, fontWeight: 700, color: color || '#111827', lineHeight: 1.1 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: '#9CA3AF' }}>{sub}</div>}
    </div>
  );
}

function SectionHeader({ num, title, subtitle }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#111827' }}>
        <span style={{ color: '#9CA3AF', fontWeight: 400, marginRight: 6 }}>{num} ·</span>{title}
      </h2>
      {subtitle && <p style={{ margin: '3px 0 0', fontSize: 13, color: '#9CA3AF' }}>{subtitle}</p>}
    </div>
  );
}

function Block({ children, mb = 24 }) {
  return (
    <div className="mis-card" style={{ background: '#fff', borderRadius: 14, border: '1px solid #E5E7EB', padding: '20px 24px', marginBottom: mb }}>
      {children}
    </div>
  );
}

// ── UB Map (SVG) ─────────────────────────────────────────────────────────────
const DUUREN_COORDS = {
  'Хан-уул':           { x: 300, y: 320 },
  'Сүхбаатар':         { x: 460, y: 200 },
  'Баянзүрх':          { x: 520, y: 270 },
  'Баянгол':           { x: 340, y: 240 },
  'Сонгинохайрхан':    { x: 200, y: 220 },
  'Чингэлтэй':         { x: 410, y: 230 },
  'Налайх':            { x: 600, y: 300 },
  'Багануур':          { x: 660, y: 220 },
  'Багахангай':        { x: 580, y: 380 },
  'Хөдөө орон нутаг':  { x: 120, y: 350 },
};

function UBMap({ duurenStats, loading }) {
  const maxVal = Math.max(...duurenStats.map(d => d.нийт), 1);
  return (
    <div style={{ position: 'relative' }}>
      <svg viewBox="0 0 780 450" style={{ width: '100%', background: '#F8FAFC', borderRadius: 10, border: '1px solid #E5E7EB' }}>
        <text x="390" y="30" textAnchor="middle" fontSize="13" fill="#9CA3AF">Улаанбаатар хот — дүүргийн хүргэлтийн тархалт</text>
        {loading ? (
          <rect x="50" y="50" width="680" height="360" rx="8" fill="#F3F4F6" />
        ) : duurenStats.map(d => {
          const coord = DUUREN_COORDS[d.name];
          if (!coord) return null;
          const r = 18 + Math.round((d.нийт / maxVal) * 40);
          const rate = d.нийт ? Math.round(d.амжилттай / d.нийт * 100) : 0;
          const color = rate >= 70 ? '#34D399' : rate >= 40 ? '#FBBF24' : '#F87171';
          return (
            <g key={d.name}>
              <circle cx={coord.x} cy={coord.y} r={r} fill={color} fillOpacity={0.25} stroke={color} strokeWidth={2} />
              <text x={coord.x} y={coord.y - 2} textAnchor="middle" fontSize="13" fontWeight="700" fill="#111827">{d.нийт}</text>
              <text x={coord.x} y={coord.y + 13} textAnchor="middle" fontSize="10" fill="#6B7280">{d.name.length > 8 ? d.name.slice(0, 8) + '..' : d.name}</text>
            </g>
          );
        })}
        <g>
          <circle cx={700} cy={380} r={8} fill="#34D399" fillOpacity={0.3} stroke="#34D399" strokeWidth={1.5} />
          <text x={714} y={384} fontSize="10" fill="#6B7280">70%+ амжилт</text>
          <circle cx={700} cy={400} r={8} fill="#FBBF24" fillOpacity={0.3} stroke="#FBBF24" strokeWidth={1.5} />
          <text x={714} y={404} fontSize="10" fill="#6B7280">40-70%</text>
          <circle cx={700} cy={420} r={8} fill="#F87171" fillOpacity={0.3} stroke="#F87171" strokeWidth={1.5} />
          <text x={714} y={424} fontSize="10" fill="#6B7280">40%-с доош</text>
        </g>
      </svg>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function DeliveryMIS() {
  const [period, setPeriod]           = useState('week');
  const [chartType, setChartType]     = useState('area');
  const [chartMetric, setChartMetric] = useState('нийт');
  const [allDeals, setAllDeals]       = useState([]);
  const [users, setUsers]             = useState({});
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const [dealSearch, setDealSearch]   = useState('');
  const [dealStageFilter, setDealStageFilter] = useState('ALL');
  const [dealDuurenFilter, setDealDuurenFilter] = useState('ALL');
  const [dealSort, setDealSort]       = useState({ key: 'DATE_CREATE', dir: -1 });
  const [dealPage, setDealPage]       = useState(0);
  const autoRef = useRef(null);

  // Нэг удаа бүх өгөгдөл татна (сүүлийн 3 сар)
  const load = useCallback(async () => {
    setLoading(true); setError(null);
    try {
      const from = new Date(); from.setMonth(from.getMonth() - 3); from.setHours(0, 0, 0, 0);
      const raw = await fetchDeals({ '>=DATE_CREATE': from.toISOString() });
      const uids = [...new Set(raw.map(d => d.ASSIGNED_BY_ID).filter(Boolean))];
      const umap = await fetchUsers(uids);
      setAllDeals(raw);
      setUsers(umap);
    } catch (e) {
      setError('API холболт амжилтгүй: ' + e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  // 13:00 цагт автоматаар шинэчлэгдэх
  useEffect(() => {
    const scheduleAt13 = () => {
      const now = new Date();
      const next13 = new Date(now);
      next13.setHours(13, 0, 0, 0);
      if (now >= next13) next13.setDate(next13.getDate() + 1);
      const ms = next13 - now;
      autoRef.current = setTimeout(() => { load(); scheduleAt13(); }, ms);
    };
    scheduleAt13();
    return () => clearTimeout(autoRef.current);
  }, [load]);

  // Клиент талд хугацаагаар шүүнэ
  const deals = allDeals.filter(d => {
    const created = new Date(d.DATE_CREATE);
    const filter = getPeriodFilter(period);
    if (filter['>=DATE_CREATE'] && created < new Date(filter['>=DATE_CREATE'])) return false;
    if (filter['<=DATE_CREATE'] && created > new Date(filter['<=DATE_CREATE'])) return false;
    return true;
  });

  // Stage stats
  const stageMap = {};
  STAGES.forEach(s => { stageMap[s.id] = { count: 0, amount: 0 }; });
  deals.forEach(d => {
    const sid = d.STAGE_ID?.replace(/^C10:/, '') || 'NEW';
    const key = STAGES.find(s => sid.includes(s.id))?.id;
    if (key) { stageMap[key].count++; stageMap[key].amount += Number(d.OPPORTUNITY || 0); }
  });

  const total       = deals.length;
  const won         = stageMap['WON'].count;
  const lost        = stageMap['LOSE'].count;
  const active      = stageMap['NEW'].count + stageMap['PREPARATION'].count + stageMap['EXECUTING'].count;
  const totalAmount = deals.reduce((s, d) => s + Number(d.OPPORTUNITY || 0), 0);
  const wonAmount   = stageMap['WON'].amount;
  const successRate = total ? Math.round(won / total * 100) : 0;

  const trendData   = groupByDay(deals);
  const duurenStats = getDuurenStats(deals);
  const durationData = getDurationStats(deals);
  const agentMatrix = getAgentDuurenMatrix(deals, users);
  const duurenNames = [...new Set(duurenStats.map(d => d.name))];

  // Agent stats
  const agentMap = {};
  deals.forEach(d => {
    const uid = d.ASSIGNED_BY_ID;
    if (!uid) return;
    if (!agentMap[uid]) agentMap[uid] = { name: users[uid] || `#${uid}`, нийт: 0, амжилттай: 0, амжилтгүй: 0, дүн: 0 };
    agentMap[uid].нийт++;
    agentMap[uid].дүн += Number(d.OPPORTUNITY || 0);
    const sid = d.STAGE_ID?.replace(/^C10:/, '') || '';
    if (sid.includes('WON')) agentMap[uid].амжилттай++;
    if (sid.includes('LOSE')) agentMap[uid].амжилтгүй++;
  });
  const agentList = Object.values(agentMap).sort((a, b) => b.нийт - a.нийт);

  const pieData = [
    { name: 'Амжилттай', value: won,   color: '#34D399' },
    { name: 'Амжилтгүй', value: lost,  color: '#F87171' },
    { name: 'Идэвхтэй',  value: active, color: '#60A5FA' },
  ];

  // Deal list
  const PAGE_SIZE = 100;
  const filteredDeals = deals
    .filter(d => {
      const sid = d.STAGE_ID?.replace(/^C10:/, '') || '';
      const stageOk = dealStageFilter === 'ALL' || sid.includes(dealStageFilter);
      const did = d[DUUREN_FIELD];
      const dname = DUUREN_MAP[did] || 'Тодорхойгүй';
      const duurenOk = dealDuurenFilter === 'ALL' || dname === dealDuurenFilter;
      const s = dealSearch.toLowerCase();
      const searchOk = !s || (d.TITLE || '').toLowerCase().includes(s) || (d.ID || '').includes(s);
      return stageOk && duurenOk && searchOk;
    })
    .sort((a, b) => {
      const av = a[dealSort.key] || ''; const bv = b[dealSort.key] || '';
      return av < bv ? -dealSort.dir : av > bv ? dealSort.dir : 0;
    });

  const pagedDeals = filteredDeals.slice(0, (dealPage + 1) * PAGE_SIZE);

  const ChartComp = chartType === 'bar' ? BarChart : chartType === 'line' ? LineChart : AreaChart;

  return (
    <div style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif', background: '#F7F8FA', minHeight: '100vh', padding: '28px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <style>{`
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .mis-card  { animation: fadeUp 0.35s ease both; }
        .mis-btn   { border:1px solid #E5E7EB; background:#fff; border-radius:8px; padding:6px 14px; font-size:13px; cursor:pointer; color:#374151; transition:all 0.15s; }
        .mis-btn:hover { background:#F3F4F6; }
        .mis-btn.active { background:#111827; color:#fff; border-color:#111827; }
        .mis-table th { background:#F9FAFB; font-size:12px; color:#6B7280; font-weight:600; padding:10px 14px; text-align:left; border-bottom:1px solid #E5E7EB; cursor:pointer; white-space:nowrap; }
        .mis-table td { font-size:13px; color:#374151; padding:10px 14px; border-bottom:1px solid #F3F4F6; }
        .mis-table tr:hover td { background:#F9FAFB; }
        .mis-input { border:1px solid #E5E7EB; border-radius:8px; padding:7px 12px; font-size:13px; color:#111827; background:#fff; outline:none; }
        .mis-input:focus { border-color:#9CA3AF; }
        .stage-pill { font-size:11px; padding:3px 9px; border-radius:20px; font-weight:500; display:inline-block; white-space:nowrap; }
        .funnel-bar { transition:width 0.6s cubic-bezier(0.34,1.56,0.64,1); }
      `}</style>

      {/* Header */}
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:28, flexWrap:'wrap', gap:12 }}>
        <div>
          <h1 style={{ margin:0, fontSize:22, fontWeight:800, color:'#111827', letterSpacing:-0.5 }}>Хүргэлт MIS</h1>
          <p style={{ margin:'4px 0 0', fontSize:13, color:'#9CA3AF' }}>
            Bitrix24 · {getPeriodLabel(period)}
            <span style={{ marginLeft:10, fontSize:11, color:'#D1D5DB' }}>· 13:00 цагт автомат шинэчлэл</span>
          </p>
        </div>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap', alignItems:'center' }}>
          {PERIODS.map(p => (
            <button key={p.key} className={`mis-btn${period === p.key ? ' active' : ''}`} onClick={() => { setPeriod(p.key); setDealPage(0); }}>{p.label}</button>
          ))}
          <button className="mis-btn" onClick={load}>↻ Шинэчлэх</button>
        </div>
      </div>

      {error && <div style={{ background:'#FEF2F2', border:'1px solid #FECACA', borderRadius:10, padding:'12px 16px', color:'#B91C1C', fontSize:13, marginBottom:20 }}>⚠ {error}</div>}

      {/* 01 · KPI */}
      <div className="mis-card" style={{ marginBottom:24 }}>
        <SectionHeader num="01" title="Нийт тойм" subtitle={getPeriodLabel(period)} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(155px,1fr))', gap:12 }}>
          {loading ? Array(6).fill(0).map((_,i) => <Skeleton key={i} h={90} />) : <>
            <KpiCard label="Нийт хүргэлт"              value={fmt(total)}          icon="📦" color="#111827" bg="#fff" />
            <KpiCard label="Амжилттай"                  value={fmt(won)}            sub={`${successRate}% амжилтын хувь`} color="#059669" bg="#ECFDF5" icon="✅" />
            <KpiCard label="Амжилтгүй"                  value={fmt(lost)}           sub={`${total ? Math.round(lost/total*100) : 0}%`} color="#DC2626" bg="#FEF2F2" icon="❌" />
            <KpiCard label="Идэвхтэй"                   value={fmt(active)}         sub="Явагдаж байна" color="#2563EB" bg="#EFF6FF" icon="🚚" />
            <KpiCard label="Борлуулалтын дүн"           value={fmtMoney(totalAmount)} color="#7C3AED" bg="#F5F3FF" icon="💰" />
            <KpiCard label="Амжилттай борлуулалтын дүн" value={fmtMoney(wonAmount)}  color="#0D9488" bg="#F0FDFA" icon="🏆" />
          </>}
        </div>
      </div>

      {/* 02 · Pipeline */}
      <Block>
        <SectionHeader num="02" title="Пайплайн дамжлага" />
        {loading ? <Skeleton h={160} /> : (
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {STAGES.map(s => {
              const cnt = stageMap[s.id].count;
              const pct = total ? Math.round(cnt / total * 100) : 0;
              return (
                <div key={s.id} style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:170, fontSize:12, color:'#6B7280', fontWeight:500, flexShrink:0 }}>{s.label}</div>
                  <div style={{ flex:1, height:30, background:'#F3F4F6', borderRadius:8, overflow:'hidden' }}>
                    <div className="funnel-bar" style={{ height:'100%', width:`${Math.max(pct,2)}%`, background:s.color, borderRadius:8, display:'flex', alignItems:'center', paddingLeft:10, boxSizing:'border-box' }}>
                      {cnt > 0 && <span style={{ fontSize:12, fontWeight:700, color:'#fff' }}>{cnt}</span>}
                    </div>
                  </div>
                  <div style={{ width:90, fontSize:12, color:'#6B7280', textAlign:'right', flexShrink:0 }}>{fmtMoney(stageMap[s.id].amount)}</div>
                  <div style={{ width:36, fontSize:12, color:'#9CA3AF', textAlign:'right', flexShrink:0 }}>{pct}%</div>
                </div>
              );
            })}
          </div>
        )}
      </Block>

      {/* 03 · Хүргэлтийн тренд */}
      <Block>
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:16, flexWrap:'wrap', gap:10 }}>
          <SectionHeader num="03" title="Хүргэлтийн тренд" />
          <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
            {['нийт','амжилттай','амжилтгүй'].map(m => (
              <button key={m} className={`mis-btn${chartMetric===m?' active':''}`} onClick={() => setChartMetric(m)} style={{ fontSize:12, padding:'5px 10px' }}>{m}</button>
            ))}
            {CHART_TYPES.map(ct => (
              <button key={ct.key} className={`mis-btn${chartType===ct.key?' active':''}`} onClick={() => setChartType(ct.key)} style={{ fontSize:12, padding:'5px 10px' }}>{ct.label}</button>
            ))}
          </div>
        </div>
        {loading ? <Skeleton h={240} /> : trendData.length === 0 ? (
          <div style={{ height:240, display:'flex', alignItems:'center', justifyContent:'center', color:'#9CA3AF' }}>Өгөгдөл байхгүй</div>
        ) : (
          <ResponsiveContainer width="100%" height={240}>
            <ChartComp data={trendData} margin={{ top:4, right:16, bottom:0, left:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="date" tick={{ fontSize:11, fill:'#9CA3AF' }} tickLine={false} />
              <YAxis tick={{ fontSize:11, fill:'#9CA3AF' }} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius:10, border:'1px solid #E5E7EB', fontSize:12 }} />
              {chartType === 'area' && <Area type="monotone" dataKey={chartMetric} stroke="#6366F1" fill="#EEF2FF" strokeWidth={2} dot={false} />}
              {chartType === 'bar'  && <Bar  dataKey={chartMetric} fill="#6366F1" radius={[4,4,0,0]} />}
              {chartType === 'line' && <Line type="monotone" dataKey={chartMetric} stroke="#6366F1" strokeWidth={2} dot={{ r:3, fill:'#6366F1' }} />}
            </ChartComp>
          </ResponsiveContainer>
        )}
      </Block>

      {/* 04 · Хүргэлтийн нийт тайлан */}
      <Block>
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:16, flexWrap:'wrap', gap:8 }}>
          <SectionHeader num="04" title="Хүргэлтийн нийт тайлан" subtitle={`${agentList.length} хүргэгч`} />
          {agentList.length > 0 && (
            <div style={{ display:'flex', gap:12, alignItems:'center' }}>
              <ResponsiveContainer width={140} height={110}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={30} outerRadius={50} paddingAngle={2} dataKey="value">
                    {pieData.map((e,i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize:11, borderRadius:8 }} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                {pieData.map(p => (
                  <div key={p.name} style={{ display:'flex', alignItems:'center', gap:6, fontSize:12, color:'#374151' }}>
                    <div style={{ width:9, height:9, borderRadius:2, background:p.color, flexShrink:0 }} />
                    <span>{p.name}</span>
                    <span style={{ fontWeight:600, marginLeft:'auto', paddingLeft:8 }}>{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {loading ? <Skeleton h={160} /> : (
          <div style={{ overflowX:'auto' }}>
            <table className="mis-table" style={{ width:'100%', borderCollapse:'collapse' }}>
              <thead><tr>
                <th>#</th><th>Хүргэгч</th><th>Нийт</th><th>Амжилттай</th><th>Амжилтгүй</th><th>Амжилтын %</th><th>Нийт дүн</th>
              </tr></thead>
              <tbody>
                {agentList.map((a,i) => {
                  const rate = a.нийт ? Math.round(a.амжилттай/a.нийт*100) : 0;
                  return (
                    <tr key={i}>
                      <td style={{ color:'#9CA3AF' }}>{i+1}</td>
                      <td style={{ fontWeight:500, color:'#111827' }}>{a.name}</td>
                      <td>{fmt(a.нийт)}</td>
                      <td style={{ color:'#059669' }}>{fmt(a.амжилттай)}</td>
                      <td style={{ color:'#DC2626' }}>{fmt(a.амжилтгүй)}</td>
                      <td>
                        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                          <div style={{ flex:1, height:5, background:'#F3F4F6', borderRadius:4, overflow:'hidden', minWidth:50 }}>
                            <div style={{ height:'100%', width:`${rate}%`, background:rate>=70?'#34D399':rate>=40?'#FBBF24':'#F87171', borderRadius:4 }} />
                          </div>
                          <span style={{ fontSize:12, color:'#6B7280', minWidth:30 }}>{rate}%</span>
                        </div>
                      </td>
                      <td>{fmtMoney(a.дүн)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Block>

      {/* 05 · Deal жагсаалт */}
      <Block>
        <SectionHeader num="05" title="Deal жагсаалт" subtitle={`Нийт ${fmt(filteredDeals.length)} хүргэлт`} />
        <div style={{ display:'flex', gap:8, marginBottom:14, flexWrap:'wrap' }}>
          <input className="mis-input" placeholder="Хайх (ID, утас...)" value={dealSearch} onChange={e => { setDealSearch(e.target.value); setDealPage(0); }} style={{ flex:1, minWidth:140 }} />
          <select className="mis-input" value={dealStageFilter} onChange={e => { setDealStageFilter(e.target.value); setDealPage(0); }}>
            <option value="ALL">Бүх stage</option>
            {STAGES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <select className="mis-input" value={dealDuurenFilter} onChange={e => { setDealDuurenFilter(e.target.value); setDealPage(0); }}>
            <option value="ALL">Бүх дүүрэг</option>
            {Object.values(DUUREN_MAP).map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        {loading ? <Skeleton h={200} /> : filteredDeals.length === 0 ? (
          <div style={{ textAlign:'center', color:'#9CA3AF', padding:'32px 0' }}>Үр дүн олдсонгүй</div>
        ) : (
          <>
            <div style={{ overflowX:'auto', maxHeight:420, overflowY:'auto' }}>
              <table className="mis-table" style={{ width:'100%', borderCollapse:'collapse' }}>
                <thead style={{ position:'sticky', top:0, zIndex:1 }}>
                  <tr>
                    {[
                      { key:'ID', label:'ID' },
                      { key:'TITLE', label:'Утасны дугаар' },
                      { key:'STAGE_ID', label:'Stage' },
                      { key:DUUREN_FIELD, label:'Дүүрэг' },
                      { key:'OPPORTUNITY', label:'Дүн' },
                      { key:'ASSIGNED_BY_ID', label:'Хүргэгч' },
                      { key:'DATE_CREATE', label:'Огноо' },
                    ].map(col => (
                      <th key={col.key} onClick={() => setDealSort(s => ({ key:col.key, dir:s.key===col.key?-s.dir:-1 }))}>
                        {col.label} {dealSort.key===col.key?(dealSort.dir===-1?'↓':'↑'):''}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pagedDeals.map(d => {
                    const sid = d.STAGE_ID?.replace(/^C10:/, '') || '';
                    const stage = STAGES.find(s => sid.includes(s.id)) || STAGES[0];
                    const dname = DUUREN_MAP[d[DUUREN_FIELD]] || '—';
                    return (
                      <tr key={d.ID}>
                        <td style={{ color:'#9CA3AF', fontFamily:'monospace', fontSize:12 }}>{d.ID}</td>
                        <td style={{ fontWeight:500, color:'#111827' }}>{d.TITLE || '—'}</td>
                        <td><span className="stage-pill" style={{ background:stage.bg, color:stage.color }}>{stage.label}</span></td>
                        <td style={{ color:'#374151' }}>{dname}</td>
                        <td style={{ fontWeight:500 }}>{fmtMoney(Number(d.OPPORTUNITY||0))}</td>
                        <td>{users[d.ASSIGNED_BY_ID] || '—'}</td>
                        <td style={{ color:'#6B7280' }}>{(d.DATE_CREATE||'').slice(0,10)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {filteredDeals.length > pagedDeals.length && (
              <div style={{ textAlign:'center', padding:'12px 0' }}>
                <button className="mis-btn" onClick={() => setDealPage(p => p+1)}>
                  Дараагийн {Math.min(PAGE_SIZE, filteredDeals.length - pagedDeals.length)}-г харах
                </button>
                <span style={{ marginLeft:10, fontSize:12, color:'#9CA3AF' }}>{fmt(pagedDeals.length)} / {fmt(filteredDeals.length)}</span>
              </div>
            )}
          </>
        )}
      </Block>

      {/* 06 · Дүүргийн газрын зураг */}
      <Block>
        <SectionHeader num="06" title="Дүүргийн газрын зураг" subtitle="Тойргийн хэмжээ = хүргэлтийн тоо · өнгө = амжилтын хувь" />
        {loading ? <Skeleton h={300} /> : <UBMap duurenStats={duurenStats} loading={loading} />}
      </Block>

      {/* 07 · Хүргэгч × Дүүрэг матриц */}
      <Block>
        <SectionHeader num="07" title="Хүргэгч × Дүүрэг матриц" subtitle="Хэн аль дүүрэгт хэдэн хүргэлт хийсэн" />
        {loading ? <Skeleton h={160} /> : (
          <div style={{ overflowX:'auto' }}>
            <table className="mis-table" style={{ width:'100%', borderCollapse:'collapse' }}>
              <thead><tr>
                <th>Хүргэгч</th>
                {duurenNames.slice(0,8).map(n => <th key={n} style={{ fontSize:11 }}>{n.length>6?n.slice(0,6)+'..':n}</th>)}
                <th>Нийт</th>
              </tr></thead>
              <tbody>
                {agentMatrix.slice(0,15).map((row,i) => (
                  <tr key={i}>
                    <td style={{ fontWeight:500, color:'#111827', whiteSpace:'nowrap' }}>{row.name}</td>
                    {duurenNames.slice(0,8).map(n => {
                      const v = row[n] || 0;
                      return (
                        <td key={n} style={{ textAlign:'center' }}>
                          {v > 0 ? (
                            <span style={{ display:'inline-block', minWidth:24, padding:'2px 6px', borderRadius:6, background:`rgba(99,102,241,${Math.min(v/10,0.8)})`, color:v>3?'#fff':'#374151', fontSize:12, fontWeight:600 }}>{v}</span>
                          ) : <span style={{ color:'#E5E7EB' }}>—</span>}
                        </td>
                      );
                    })}
                    <td style={{ fontWeight:600, color:'#111827' }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Block>

      {/* 08 · Хүргэлтийн хугацааны шинжилгээ */}
      <Block>
        <SectionHeader num="08" title="Хүргэлтийн хугацааны шинжилгээ" subtitle="Үүсгэснээс амжилттай болох хүртэлх дундаж цаг" />
        {loading ? <Skeleton h={220} /> : durationData.length === 0 ? (
          <div style={{ height:220, display:'flex', alignItems:'center', justifyContent:'center', color:'#9CA3AF' }}>Өгөгдөл байхгүй</div>
        ) : (
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={durationData} margin={{ top:4, right:16, bottom:0, left:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="date" tick={{ fontSize:11, fill:'#9CA3AF' }} tickLine={false} />
              <YAxis tick={{ fontSize:11, fill:'#9CA3AF' }} tickLine={false} axisLine={false} unit=" ц" />
              <Tooltip contentStyle={{ borderRadius:10, border:'1px solid #E5E7EB', fontSize:12 }} formatter={v => [`${v} цаг`, 'Дундаж хугацаа']} />
              <Bar dataKey="дундаж" fill="#818CF8" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Block>

      {/* 09 · Дүүргийн харьцуулалт */}
      <Block mb={8}>
        <SectionHeader num="09" title="Дүүргийн харьцуулалт" subtitle="Дүүрэг тус бүрийн хүргэлтийн тоо ба амжилтын хувь" />
        {loading ? <Skeleton h={240} /> : duurenStats.length === 0 ? (
          <div style={{ height:240, display:'flex', alignItems:'center', justifyContent:'center', color:'#9CA3AF' }}>Дүүргийн өгөгдөл байхгүй</div>
        ) : (
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={duurenStats} margin={{ top:4, right:16, bottom:40, left:0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="name" tick={{ fontSize:10, fill:'#9CA3AF' }} tickLine={false} angle={-25} textAnchor="end" interval={0} />
              <YAxis tick={{ fontSize:11, fill:'#9CA3AF' }} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius:10, border:'1px solid #E5E7EB', fontSize:12 }} />
              <Legend />
              <Bar dataKey="нийт" fill="#60A5FA" radius={[4,4,0,0]} name="Нийт" />
              <Bar dataKey="амжилттай" fill="#34D399" radius={[4,4,0,0]} name="Амжилттай" />
              <Bar dataKey="амжилтгүй" fill="#F87171" radius={[4,4,0,0]} name="Амжилтгүй" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Block>

      <div style={{ textAlign:'center', padding:'16px 0', fontSize:11, color:'#D1D5DB' }}>
        Akuma CEO Dashboard · Хүргэлт MIS · Bitrix24 · 13:00 автомат шинэчлэл
      </div>
    </div>
  );
}
