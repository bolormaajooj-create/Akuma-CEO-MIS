'use client';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

export default function DashboardPage() {
  const [auth, setAuth] = useState(false);
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    setAuth(document.cookie.includes('akuma_auth=1'));
  }, []);

  const login = () => {
    if (u === 'CEO' && p === 'Titem09') {
      document.cookie = 'akuma_auth=1; path=/; max-age=86400';
      setAuth(true);
    } else {
      setErr('Login incorrect');
    }
  };

  if (!auth) return (
    <div style={{minHeight:'100vh',background:'#F7F8FA',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',padding:32,borderRadius:16,border:'1px solid #E5E7EB',width:360}}>
        <h1 style={{fontSize:20,fontWeight:800,marginBottom:24,color:'#111827'}}>Akuma MIS</h1>
        <input placeholder="CEO" value={u} onChange={e=>setU(e.target.value)}
          style={{width:'100%',padding:'10px',border:'1px solid #E5E7EB',borderRadius:8,marginBottom:12,fontSize:14,boxSizing:'border-box'}}/>
        <input type="password" placeholder="Password" value={p} onChange={e=>setP(e.target.value)}
          onKeyDown={e=>e.key==='Enter'&&login()}
          style={{width:'100%',padding:'10px',border:'1px solid #E5E7EB',borderRadius:8,marginBottom:12,fontSize:14,boxSizing:'border-box'}}/>
        {err && <p style={{color:'red',fontSize:13,marginBottom:12}}>{err}</p>}
        <button onClick={login} style={{width:'100%',background:'#111827',color:'#fff',border:'none',borderRadius:8,padding:'12px',fontSize:14,cursor:'pointer'}}>Login</button>
      </div>
    </div>
  );

  return (
    <Sidebar>
      <div style={{padding:32}}>
        <h1 style={{fontSize:24,fontWeight:700,color:'#111827'}}>Akuma MIS</h1>
        <p style={{color:'#6B7280',marginTop:8}}>Welcome, CEO.</p>
      </div>
    </Sidebar>
  );
}