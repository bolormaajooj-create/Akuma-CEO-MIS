'use client';
import { useRouter, usePathname } from 'next/navigation';
export default function Sidebar({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const logout = () => { document.cookie='akuma_auth=; path=/; max-age=0'; router.push('/login'); };
  return (
    <div style={{display:'flex',minHeight:'100vh'}}>
      <div style={{width:220,background:'#111827',display:'flex',flexDirection:'column',position:'fixed',top:0,left:0,bottom:0}}>
        <div style={{padding:'20px 16px',borderBottom:'1px solid #1F2937'}}>
          <div style={{fontSize:14,fontWeight:700,color:'#F9FAFB'}}>Akuma MIS</div>
          <div style={{fontSize:11,color:'#6B7280'}}>CEO Dashboard</div>
        </div>
        <nav style={{flex:1,padding:'12px 8px'}}>
          {[{p:'/',l:'Нүүр'},{p:'/delivery',l:'Хүргэлт'}].map(item=>(
            <div key={item.p} onClick={()=>router.push(item.p)}
              style={{padding:'10px 12px',borderRadius:8,marginBottom:4,cursor:'pointer',color:pathname===item.p?'#F9FAFB':'#9CA3AF',background:pathname===item.p?'#1F2937':'transparent'}}>
              {item.l}
            </div>
          ))}
        </nav>
        <div style={{padding:'12px 8px',borderTop:'1px solid #1F2937'}}>
          <div onClick={logout} style={{padding:'10px 12px',borderRadius:8,cursor:'pointer',color:'#6B7280'}}>Гарах</div>
        </div>
      </div>
      <div style={{flex:1,marginLeft:220}}>{children}</div>
    </div>
  );
}
