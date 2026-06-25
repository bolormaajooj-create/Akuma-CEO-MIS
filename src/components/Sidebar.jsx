'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { path: '/',         label: 'Акума MIS',   icon: '🔴', sub: 'Нэгтгэл' },
  { path: '/delivery', label: 'Хүргэлт MIS', icon: '🚚', sub: 'Битрикс24' },
  { path: '/avlaga',   label: 'Авлага MIS',  icon: '💳', sub: 'Удахгүй' },
  { path: '/task',     label: 'Таск MIS',    icon: '✅', sub: 'Удахгүй' },
];

export default function Sidebar({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    document.cookie = 'akuma_auth=; path=/; max-age=0';
    router.push('/login');
  };

  return (
    <div style={{ display:'flex', minHeight:'100vh' }}>
      <div style={{ width: collapsed ? 64 : 220, background:'#111827', display:'flex', flexDirection:'column', transition:'width 0.25s ease', flexShrink:0, position:'fixed', top:0, left:0, bottom:0, zIndex:100, overflow:'hidden' }}>
        <div style={{ padding: collapsed ? '20px 0' : '20px 16px', display:'flex', alignItems:'center', gap:10, borderBottom:'1px solid #1F2937' }}>
          <div style={{ width:32, height:32, background:'#EF4444', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, flexShrink:0 }}>🔴</div>
          {!collapsed && <div>
            <div style={{ fontSize:13, fontWeight:700, color:'#F9FAFB' }}>Akuma MIS</div>
            <div style={{ fontSize:10, color:'#6B7280' }}>CEO Dashboard</div>
          </div>}
          <button onClick={() => setCollapsed(c => !c)} style={{ marginLeft:'auto', background:'none', border:'none', color:'#6B7280', cursor:'pointer', fontSize:16, padding:4, flexShrink:0 }}>
            {collapsed ? '→' : '←'}
          </button>
        </div>
        <nav style={{ flex:1, padding:'12px 0' }}>
          {NAV_ITEMS.map(item => {
            const active = pathname === item.path;
            const soon = item.sub === 'Удахгүй';
            return (
              <div key={item.path} onClick={() => !soon && router.push(item.path)}
                style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 16px', margin:'2px 8px', borderRadius:8, background: active ? '#1F2937' : 'transparent', cursor: soon ? 'not-allowed' : 'pointer', opacity: soon ? 0.5 : 1, borderLeft: active ? '2px solid #EF4444' : '2px solid transparent' }}>
                <span style={{ fontSize:16, flexShrink:0 }}>{item.icon}</span>
                {!collapsed && <div>
                  <div style={{ fontSize:13, fontWeight: active ? 600 : 400, color: active ? '#F9FAFB' : '#9CA3AF' }}>{item.label}</div>
                  <div style={{ fontSize:10, color:'#4B5563' }}>{item.sub}</div>
                </div>}
              </div>
            );
          })}
        </nav>
        <div style={{ padding:'12px 8px', borderTop:'1px solid #1F2937' }}>
          <div onClick={handleLogout} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 8px', borderRadius:8, cursor:'pointer', color:'#6B7280' }}>
            <span style={{ fontSize:16 }}>🚪</span>
            {!collapsed && <span style={{ fontSize:13 }}>Гарах</span>}
          </div>
        </div>
      </div>
      <div style={{ flex:1, marginLeft: collapsed ? 64 : 220, transition:'margin-left 0.25s ease', minHeight:'100vh' }}>
        {children}
      </div>
    </div>
  );
}