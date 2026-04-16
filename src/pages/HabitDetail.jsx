import { Flame, History, Ban, Wallet, Activity, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import ShareModal from '../components/ShareModal';
import ResetModal from '../components/ResetModal';
import RecordUrgeModal from '../components/RecordUrgeModal';

export default function HabitDetail() {
  const [showUrgeModal, setShowUrgeModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div style={{ maxWidth: '1000px', paddingBottom: '60px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Ban size={32} color="var(--primary)" />
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: 1 }}>Smoking</h1>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Freedom since January 12, 2024</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            fontWeight: '600'
          }}>
            <History size={18} />
            Journal
          </button>
          <button 
            onClick={() => setShowResetModal(true)}
            style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '12px',
            background: 'var(--primary)',
            color: '#000',
            fontWeight: '700'
          }}>
            Reset Habit
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Main Timer & Progress Card */}
          <div className="card-panel" style={{ padding: '32px' }}>
            {/* Timer Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1, textShadow: '0 0 20px rgba(52,229,120,0.3)' }}>00</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginTop: '8px' }}>YEARS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1 }}>01</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginTop: '8px' }}>MONTHS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1 }}>12</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginTop: '8px' }}>DAYS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1 }}>14</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginTop: '8px' }}>HOURS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1 }}>28</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginTop: '8px' }}>MINUTES</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#4facfe', lineHeight: 1 }}>45</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginTop: '8px' }}>SECONDS</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Current Goal: 1 Month Recovery</span>
              <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary)' }}>84%</span>
            </div>
            
            <div style={{ position: 'relative', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', marginBottom: '8px', overflow: 'hidden' }}>
              <div style={{ width: '84%', height: '100%', background: 'var(--primary)', borderRadius: '24px 0 0 24px', position: 'relative' }}></div>
              <div style={{ position: 'absolute', left: 'calc(84% - 24px)', top: '12px', width: '24px', height: '24px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={14} color="#fff" />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
              <span>STARTED RECOVERY</span>
              <span>FULLY CLEANSED</span>
            </div>
          </div>

          {/* Bottom Left Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Savings Widget */}
            <div className="card-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(47, 110, 226, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
                  <Wallet size={20} />
                </div>
                <span style={{ background: 'rgba(47, 110, 226, 0.2)', color: 'var(--accent-blue)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' }}>+12% vs last month</span>
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: 1.2 }}>$1,450.00</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>Total Savings Achievement</p>
            </div>

            {/* Health Recovery Widget */}
            <div className="card-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(242, 139, 76, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)' }}>
                  <Activity size={20} />
                </div>
                <span style={{ background: 'rgba(242, 139, 76, 0.2)', color: 'var(--accent-orange)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' }}>Lung Capacity +24%</span>
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: 1.2 }}>Vibrant</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>Health Recovery Status</p>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Daily Completion & Last Achievement Widget */}
          <div className="card-panel" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Top Ring Chart area */}
            <div style={{ padding: '32px', borderBottom: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', position: 'relative' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '24px' }}>DAILY COMPLETION</p>
              
              <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
                {/* Ring SVGs */}
                <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
                   <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                   <circle cx="80" cy="80" r="70" fill="none" stroke="var(--primary)" strokeWidth="12" strokeDasharray="439.8" strokeDashoffset="109.9" strokeLinecap="round" />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: 1 }}>75%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>18:00 HRS</div>
                </div>
              </div>
            </div>

            {/* Last Achievement row */}
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Last Achievement</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Day 12 Clean Streak</p>
              </div>
              <div style={{ position: 'relative' }}>
                 <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#2a1a15', border: '2px solid rgba(242, 139, 76, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)' }}>
                   <span style={{ fontSize: '1.2rem', fontWeight: '800', lineHeight: 1 }}>12</span>
                   <span style={{ fontSize: '0.5rem', letterSpacing: '0.1em' }}>DAYS</span>
                 </div>
                 {/* Tiny target badge corner */}
                 <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--accent-orange)', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                   <Flame size={12} />
                 </div>
              </div>
            </div>
          </div>

          {/* Urge Tracker Widget */}
          <div className="card-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Urge Tracker</h4>
              <span style={{ background: 'rgba(226, 74, 74, 0.1)', color: 'var(--accent-danger)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' }}>Today: 3</span>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
              Feeling a craving? Tap the counter to log it and initiate breathing exercise.
            </p>

            <button 
              onClick={() => setShowUrgeModal(true)}
              style={{
              width: '100%',
              padding: '24px',
              background: '#191f27',
              borderRadius: '16px',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              marginBottom: '24px',
              transition: 'background 0.2s'
            }}>
              <AlertTriangle size={32} color="var(--text-tertiary)" style={{ marginBottom: '12px' }} />
              <span style={{ fontSize: '1rem', fontWeight: '700', letterSpacing: '0.05em' }}>RECORD URGE</span>
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <span>Cravings -40% from yesterday</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {/* Fake user avatars stacked */}
                <div style={{ display: 'flex', background: '#333', borderRadius: '50%', width: '20px', height: '20px' }}></div>
                <div style={{ display: 'flex', background: '#444', borderRadius: '50%', width: '20px', height: '20px', marginLeft: '-10px' }}></div>
                <span>+12</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {showShareModal && <ShareModal onClose={() => setShowShareModal(false)} />}
      {showResetModal && <ResetModal onClose={() => setShowResetModal(false)} />}
      {showUrgeModal && <RecordUrgeModal onClose={() => setShowUrgeModal(false)} />}
    </div>
  );
}
