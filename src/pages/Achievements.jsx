import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Hexagon } from 'lucide-react';
import { useStorage } from '../hooks/useStorage';
import { differenceInDays, differenceInHours } from 'date-fns';

const CHIPS = [
  { id: '24h', name: '24 Hours', daysRequired: 1, color: '#e2e8f0', shadow: 'rgba(255,255,255,0.4)' }, // White
  { id: '1m', name: '1 Month', daysRequired: 30, color: '#00f2fe', shadow: 'rgba(0, 242, 254, 0.4)' }, // Neon Cyan
  { id: '2m', name: '2 Months', daysRequired: 60, color: '#ffd700', shadow: 'rgba(255, 215, 0, 0.4)' }, // Gold
  { id: '3m', name: '3 Months', daysRequired: 90, color: '#ffb347', shadow: 'rgba(255, 179, 71, 0.4)' }, // Bronze
  { id: '6m', name: '6 Months', daysRequired: 180, color: '#00ffaa', shadow: 'rgba(0, 255, 170, 0.4)' }, // Neon Green
  { id: '1y', name: '1 Year', daysRequired: 365, color: '#ff007f', shadow: 'rgba(255, 0, 127, 0.5)' }, // Ruby Red
];

export default function Achievements() {
  const navigate = useNavigate();
  const { data } = useStorage();

  // compute earned chips per issue
  const earnedChips = [];
  data.issues.forEach(issue => {
    const days = differenceInDays(new Date(), new Date(issue.startDate));
    const hours = differenceInHours(new Date(), new Date(issue.startDate));
    
    CHIPS.forEach(chip => {
      if ((chip.id === '24h' && hours >= 24) || (days >= chip.daysRequired)) {
        earnedChips.push({ ...chip, issueTitle: issue.title, issueId: issue.id });
      }
    });
  });

  // Sort descending by value technically
  earnedChips.reverse();

  return (
    <>
      <div className="header">
        <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowLeft size={24} color="var(--text-primary)" />
        </button>
        <h1>Chips & Honors</h1>
        <div style={{ width: 24 }} />
      </div>

      <div className="responsive-grid">
        {earnedChips.length === 0 ? (
           <div className="glass-panel interactive-card" style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.8 }}>
             <Award size={64} color="var(--text-secondary)" style={{ marginBottom: '16px', opacity: 0.5 }} />
             <h2 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Your Gallery is Empty</h2>
             <p style={{ color: 'var(--text-secondary)' }}>Stay strong to earn your first 24-hour chip!</p>
           </div>
        ) : (
          earnedChips.map((chip, idx) => (
            <div key={idx} className="glass-panel interactive-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '32px', 
                background: `radial-gradient(circle at top left, ${chip.color}, transparent 80%)`,
                backgroundColor: 'rgba(0,0,0,0.5)',
                boxShadow: `0 0 25px ${chip.shadow}, inset 0 0 10px rgba(255,255,255,0.2)`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: `2px solid ${chip.color}`,
                position: 'relative'
              }}>
                <Hexagon size={48} color={chip.color} style={{ position: 'absolute', opacity: 0.2 }} />
                <Award size={28} color="#fff" style={{ position: 'relative', zIndex: 2 }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: chip.color, textShadow: `0 0 10px ${chip.shadow}` }}>{chip.name}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '4px' }}>For: <span style={{ color: 'var(--text-primary)' }}>{chip.issueTitle}</span></p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
