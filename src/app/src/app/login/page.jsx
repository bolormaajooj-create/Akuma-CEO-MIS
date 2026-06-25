'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true); setError('');
    await new Promise(r => setTimeout(r, 400));
    if (username === 'CEO' && password === 'Titem09') {
      document.cookie = 'akuma_auth=1; path=/; max-age=86400';
      router.push('/');
    } else {
      setError('Нэвтрэх нэр эсвэл нууц үг буруу байна');
    }
    setLoading(false);
  };

  const handleKey = (e) => { if (e.key === 'Enter') handleLogin(); };

  return (
    <div style={{ minHeight:'100vh', background:'#F7F8FA', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div style={{ width:'100%', maxWidth:400 }}>
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <div style={{ width:56, height:56, background:'#111827', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', fontSize:24 }}>🔴</div>
          <h1 style={{ fontSize:22, fontWeight:800, color:'#111827', letterSpacing:-0.5 }}>Akuma MIS</h1>
          <p style={{ fontSize:13, color:'#9CA3AF', marginTop:4 }}>Захирлын удирдлагын систем</p>
        </div>
        <div style={{ background:'#fff', borderRadius:16, border:'1px solid #E5E7EB', padding:32 }}>
          <div style={{ marginBottom:16 }}>
            <label style={{ fontSize:12, fontWeight:600, color:'#6B7280', display:'block', marginBottom:6 }}>НЭВТРЭХ НЭР</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} onKeyDown={handleKey} placeholder="CEO"
              style={{ width:'100%', border:'1px solid #E5E7EB', borderRadius:10, padding:'10px 14px', fontSize:14, color:'#111827', outline:'none', background:'#F9FAFB' }}/>
          </div>
          <div style={{ marginBottom:24 }}>
            <label style={{ fontSize:12, fontWeight:600, color:'#6B7280', display:'block', marginBottom:6 }}>НУУЦ ҮГ</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={handleKey} placeholder="••••••••"
              style={{ width:'100%', border:'1px solid #E5E7EB', borderRadius:10, padding:'10px 14px', fontSize:14, color:'#111827', outline:'none', background:'#F9FAFB' }}/>
          </div>
          {error && (
            <div style={{ background:'#FEF2F2', border:'1px solid #FECACA', borderRadius:8, padding:'10px 14px', color:'#B91C1C', fontSize:13, marginBottom:16 }}>
              {error}
            </div>
          )}
          <button onClick={handleLogin} disabled={loading}
            style={{ width:'100%', background:'#111827', color:'#fff', border:'none', borderRadius:10, padding:'12px', fontSize:14, fontWeight:600, cursor:loading?'wait':'pointer', opacity:loading?0.7:1 }}>
            {loading ? 'Нэвтэрч байна...' : 'Нэвтрэх'}
          </button>
        </div>
        <p style={{ textAlign:'center', fontSize:11, color:'#D1D5DB', marginTop:20 }}>Akuma CEO Dashboard · Хувийн хандалт</p>
      </div>
    </div>
  );
}
