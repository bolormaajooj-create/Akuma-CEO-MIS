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
      setErr('Нэвтрэх нэр эсвэл нууц үг буруу');
    }
  };

  if (!auth) return (
    <div style={{minHeight:'100vh',background:'#F7F8FA',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{background:'#fff',padding:32,borderRadius:16,border:'1px solid #E5E7EB',width:360}}>
        <h1 style={{fontSize:20,fontWeight:800,marginBottom:24,color:'#111827'}}>Akuma MIS</h1>
        <input placeholder="CEO" value={u} onChange={e=>setU(e.target.value)}