import { Activity, Clock, Shield, Plus, Settings, HelpCircle } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { icon: <Activity size={20} />, label: 'Pulse', path: '/dashboard' },
    { icon: <Clock size={20} />, label: 'Focus', path: '/focus' },
    { icon: <Shield size={20} />, label: 'Vault', path: '/achievements' },
  ];

  return (
    <aside style={{
      width: '280px',
      backgroundColor: 'var(--surface-color)',
      borderRight: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 20px',
      height: '100vh',
      flexShrink: 0
    }}>
      {/* Profile Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '12px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.02)',
        marginBottom: '40px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          background: 'var(--accent-orange)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          fontWeight: 'bold',
          fontFamily: 'var(--font-heading)'
        }}>RL</div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '1rem' }}>Ritual Leader</div>
          <div style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '500' }}>12 Day Streak</div>
        </div>
      </div>

      {/* Main Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/dashboard');
          return (
            <Link
              key={item.label}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 16px',
                borderRadius: '12px',
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                background: isActive ? 'rgba(52, 229, 120, 0.1)' : 'transparent',
                fontWeight: isActive ? '600' : '500',
                transition: 'all 0.2s',
                textDecoration: 'none'
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}

        <button style={{
          marginTop: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          borderRadius: '12px',
          background: 'rgba(52, 229, 120, 0.1)',
          border: '1px solid var(--primary)',
          color: 'var(--primary)',
          fontWeight: '600',
          transition: 'all 0.2s',
          cursor: 'pointer'
        }}>
          <div style={{ 
            background: 'var(--primary)', 
            color: '#000', 
            borderRadius: '50%', 
            width: '24px', 
            height: '24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Plus size={16} />
          </div>
          Ritual
        </button>
      </nav>

      {/* Bottom Nav */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '12px 16px',
          color: 'var(--text-secondary)',
          fontWeight: '500',
          cursor: 'pointer',
          border: 'none',
          background: 'transparent',
          width: '100%',
          textAlign: 'left'
        }}>
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '12px 16px',
          color: 'var(--text-secondary)',
          fontWeight: '500',
          cursor: 'pointer',
          border: 'none',
          background: 'transparent',
          width: '100%',
          textAlign: 'left'
        }}>
          <HelpCircle size={20} />
          <span>Support</span>
        </button>
      </div>
    </aside>
  );
}
