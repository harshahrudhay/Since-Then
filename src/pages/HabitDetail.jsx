import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStorage } from '../hooks/useStorage';
import { useTimer } from '../hooks/useTimer';

const WalkingRobot = () => (
  <svg width="48" height="48" viewBox="20 0 60 100" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 135, 0.8))' }}>
    <g stroke="white" strokeWidth="6" strokeLinecap="round" fill="none">
      <circle cx="50" cy="18" r="8" fill="white" />
      <line x1="50" y1="26" x2="50" y2="60" />
      <line className="robot-arm-1" x1="50" y1="35" x2="35" y2="55" />
      <line className="robot-arm-2" x1="50" y1="35" x2="65" y2="55" />
      <line className="robot-leg-1" x1="50" y1="60" x2="35" y2="85" />
      <line className="robot-leg-2" x1="50" y1="60" x2="65" y2="85" />
    </g>
  </svg>
);

export default function HabitDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getIssue, addEvent, updateIssue } = useStorage();
  
  const issue = getIssue(id);
  const { timePassed, dayProgress, totalProgress } = useTimer(issue?.startDate);

  if (!issue) return <div style={{ padding: 20 }}>Not found</div>;

  const logFailure = () => {
    addEvent({ issueId: id, type: 'increment', count: 1 });
    updateIssue(id, { totalFailures: (issue.totalFailures || 0) + 1 });
    // In a real app with hard reset, we'd reset the startDate. For now, it's just a temptation counter as specified.
  };

  const handleReset = () => {
    if(window.confirm("Are you sure you want to completely reset your streak?")) {
      addEvent({ issueId: id, type: 'reset', count: 1 });
      updateIssue(id, { startDate: new Date().toISOString(), totalFailures: 0 });
    }
  }

  // Circular progress style
  const circleRadius = 40;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (dayProgress / 100) * circleCircumference;

  return (
    <>
      <div className="header">
        <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowLeft size={24} color="var(--text-primary)" />
        </button>
        <h1>{issue.title}</h1>
        <button onClick={handleReset}>
          <AlertCircle size={24} color="var(--accent-danger)" />
        </button>
      </div>

      <div className="detail-layout">
        
        {/* Main Progress & Animated Wave / Human */}
        <div className="glass-panel detail-main-span interactive-card" style={{ padding: '40px 30px', position: 'relative', overflow: 'hidden', minHeight: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          {/* Wave Background using CSS linear-gradient animation approx */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: `${totalProgress}%`,
            height: '40%',
            background: 'linear-gradient(to top, var(--accent-primary), transparent)',
            transition: 'width 1s ease-in-out',
            opacity: 0.6,
            borderRadius: '0 20px 0 0'
          }}></div>
          
          {/* Human SVG Walker position mapped to totalProgress */}
          <div 
            style={{
            position: 'absolute',
            bottom: '15px',
            left: `calc(5% + ${dayProgress * 0.9}%)`,
            transition: 'left 1s ease-in-out',
            zIndex: 10,
            perspective: '1000px'
          }}>
            <div className="walking-human">
              <WalkingRobot />
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', margin: 0, lineHeight: 1 }}>{timePassed.totalDays}</h2>
            <span style={{ color: 'var(--accent-primary)', fontWeight: '600', letterSpacing: '2px' }}>DAYS CLEAN</span>
          </div>
        </div>

        {/* Live Timer Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{timePassed.years}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>YEARS</div>
          </div>
          <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{timePassed.days}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>DAYS</div>
          </div>
          <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{timePassed.hours}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>HOURS</div>
          </div>
          <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{timePassed.minutes}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>MINS</div>
          </div>
        </div>

        {/* Futuristic Daily Progress Tile */}
        <div className="glass-panel interactive-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '30px' }}>
          
          <div style={{ position: 'relative', width: '90px', height: '90px', borderRadius: '16px', border: '2px solid var(--border-color)', overflow: 'hidden', background: 'var(--surface-color)', boxShadow: '0 0 20px rgba(0, 255, 135, 0.1)' }}>
            
            {/* Liquid Fill */}
            <motion.div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, var(--accent-success), rgba(0, 255, 135, 0.4))',
                height: `${dayProgress}%`,
                boxShadow: '0 -5px 15px rgba(0, 255, 135, 0.5)'
              }}
              initial={{ height: '0%' }}
              animate={{ height: `${dayProgress}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            
            {/* Pulsing Percentage */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ fontSize: '1.4rem', fontWeight: '800', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
              >
                {Math.round(dayProgress)}%
              </motion.div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '6px', fontWeight: '700' }}>Daily Charge</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Battery fills until midnight reset. Keep your cycle clean!</p>
          </div>
        </div>

        {/* Temptation Counter */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Temptation Count</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Total logged: {issue.totalFailures || 0}</p>
          </div>
          <button 
            onClick={logFailure}
            style={{ 
              background: 'var(--surface-color-glass)', 
              border: '1px solid var(--accent-secondary)', 
              color: 'var(--text-primary)',
              padding: '12px 20px',
              borderRadius: '24px',
              fontWeight: '600'
            }}>
            Log Urge
          </button>
        </div>

      </div>
    </>
  );
}
