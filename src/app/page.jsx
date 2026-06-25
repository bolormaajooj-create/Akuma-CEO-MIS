'use client';
import Sidebar from '../components/Sidebar';
export default function DashboardPage() {
  return (
    <Sidebar>
      <div style={{ padding: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>Akuma MIS</h1>
        <p style={{ color: '#6B7280', marginTop: 8 }}>Тавтай морил, CEO.</p>
      </div>
    </Sidebar>
  );
}
