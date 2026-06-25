'use client';
import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';

const WEBHOOK = 'https://akuma.bitrix24.com/rest/61022/y7fjd5sjeb7e5bhx';

const MIS_CARDS = [
  { label: 'Хүргэлт MIS',  icon: '🚚', path: '/delivery', color: '#60A5FA', desc: 'Хүргэлтийн пайплайн' },
  { label: 'Авлага MIS',   icon: '💳', path: '/avlaga',   color: '#34D399', desc: 'Удахгүй нэмэгдэнэ', soon: true },
  { label: 'Таск MIS',     icon: '✅', path: '/task',     color: '#FBBF24', desc: 'Удахгүй нэмэгдэнэ', soon: true },
];

export default function HomePage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${WEBHOOK}/crm.deal.list.json`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filter: { CATEGORY_ID: 10 }, select: ['ID', 'STAGE_ID'], start: 0 }),
        });
        const data = await res.json();
        const deals = data.result || [];
        const total = data.total || deals.length;
        const won = deals.filter(d => d.STAGE_ID?.includes('WON')).length;
        const lost = deals.filter(d => d.STAGE_ID?.includes('LOSE')).length;
        setStats({ total, won, lost });
      } catch { setStats({ total: '—', won: '—', lost: '—' }); }
      finally { setLoading(false); }
    };
    load();
  }, []);

  return (
    <Sidebar>
      <div style={{ padding: '28px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: '#111827', margin: 0 }}>Акума MIS</h1>
          <p style={{ fontSize: 13, color: '#9CA3AF', margin: '4px 0 0' }}>Бүх MIS нэгтгэл · {new Date().toLocaleDateString('mn-MN')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12, marginBottom: 28 }}>
          {loading ? [1,2,3].map(i => <div key={i} style={{ height: 80, borderRadius: 12, background: '#F3F4F6' }} />) : <>
            <div style={{ background: '#fff', borderRadius: 12, padding: '16px 20px', border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, color: '#6B7280' }}>Нийт хүргэлт</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>📦 {stats.total}</div>
            </div>
            <div style={{ background: '#ECFDF5', borderRadius: 12, padding: '16px 20px', border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 12, color: