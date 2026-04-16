import Sidebar from './Sidebar';
import { Bell, Settings, User } from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <div className="main-content">
        {/* Top Header */}
        <header className="top-nav">
          <div className="brand-title">The Kinetic Sanctuary</div>
          <div className="nav-links">
            <a href="#" className="nav-link">Dashboard</a>
            <a href="/achievements" className="nav-link active">Achievements</a>
          </div>
          <div className="top-nav-actions">
            <button><Bell size={20} /></button>
            <button><Settings size={20} /></button>
            <div className="user-avatar">
              <User size={18} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div style={{ padding: '0 40px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
