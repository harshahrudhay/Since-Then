import { Link } from 'react-router-dom';
import { Plus, Award } from 'lucide-react';
import { useStorage } from '../hooks/useStorage';
import { differenceInDays } from 'date-fns';

export default function Dashboard() {
  const { data } = useStorage();

  return (
    <>
      <div className="header">
        <h1>Dashboard</h1>
        <Link to="/achievements">
          <Award color="var(--accent-primary)" size={28} />
        </Link>
      </div>

      <div className="responsive-grid">
        {data.issues.length === 0 ? (
          <div className="glass-panel" style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.8 }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-primary)' }}>No tracked habits yet</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Tap the + button to start your first streak.</p>
          </div>
        ) : (
          data.issues.map(issue => {
            const days = differenceInDays(new Date(), new Date(issue.startDate));
            return (
              <Link to={`/habit/${issue.id}`} key={issue.id}>
                <div className="glass-panel interactive-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '700' }}>{issue.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '6px' }}>Started {new Date(issue.startDate).toLocaleDateString()}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--accent-success)', lineHeight: 1 }}>{Math.max(0, days)}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>DAYS</div>
                  </div>
                </div>
              </Link>
            )
          })
        )}
      </div>

      <Link to="/add" className="fab">
        <Plus size={32} />
      </Link>
    </>
  );
}
