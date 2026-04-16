import { Check, Columns, Lock, Sun, Droplet, Target, Activity, BookOpen, Users, HelpCircle } from 'lucide-react';

export default function Achievements() {
  return (
    <div style={{ maxWidth: '1000px', paddingBottom: '60px' }}>
      <div style={{ marginBottom: '32px' }}>
        <p style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '8px' }}>PERSONAL ARCHIVES</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Achievements</h1>
      </div>

      {/* Top Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', marginBottom: '40px' }}>
        {/* Total Days Card */}
        <div className="card-panel" style={{ 
          background: 'linear-gradient(135deg, #0d1e18, #113123)',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: 'none'
        }}>
          <div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1 }}>248</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', letterSpacing: '0.05em', marginTop: '8px' }}>TOTAL SUCCESSFUL DAYS</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '40px' }}>
            <span style={{ background: 'rgba(52, 229, 120, 0.1)', color: 'var(--primary)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', border: '1px solid rgba(52, 229, 120, 0.2)' }}>Top 2% Globally</span>
            <span style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500' }}>Elite Tier</span>
          </div>
        </div>

        {/* Current Streak Card */}
        <div className="card-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#1c1b18', border: '1px solid rgba(242, 139, 76, 0.2)' }}>
          <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            {/* Fake SVG Ring */}
            <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
              <circle cx="50" cy="50" r="46" fill="none" stroke="var(--accent-orange)" strokeWidth="4" strokeDasharray="289" strokeDashoffset="40" strokeLinecap="round" />
            </svg>
            <div style={{ position: 'absolute', top: '-10px', background: 'var(--accent-orange)', color: '#000', fontSize: '0.65rem', fontWeight: '800', padding: '2px 8px', borderRadius: '10px', zIndex: 2 }}>CURRENT</div>
            <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-orange)' }}>12</span>
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Day Streak</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ritual consistency is peak</p>
        </div>
      </div>

      {/* Streak Milestones */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.4rem' }}>Streak Milestones</h2>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>PROGRESS TO 1 MONTH</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '48px' }}>
        <div className="card-panel" style={{ padding: '24px', textAlign: 'center', background: '#151b22' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', boxShadow: '0 0 20px rgba(52, 229, 120, 0.4)' }}><Check size={24} /></div>
          <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>Genesis</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>1 DAY</div>
        </div>
        <div className="card-panel" style={{ padding: '24px', textAlign: 'center', background: '#151b22' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', boxShadow: '0 0 20px rgba(52, 229, 120, 0.4)' }}><Columns size={20} /></div>
          <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>Flow State</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>7 DAYS</div>
        </div>
        <div className="card-panel" style={{ padding: '24px', textAlign: 'center', opacity: 0.5 }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)' }}><Lock size={20} /></div>
          <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>The Ritual</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>30 Days</div>
        </div>
        <div className="card-panel" style={{ padding: '24px', textAlign: 'center', opacity: 0.5 }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)' }}><Lock size={20} /></div>
          <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>Permanence</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>90 Days</div>
        </div>
      </div>

      {/* Kinetic Badges */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.4rem' }}>Kinetic Badges</h2>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ background: 'rgba(52,229,120,0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', border: '1px solid rgba(52,229,120,0.2)' }}>Unlocked: 14</span>
          <span style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem' }}>Total: 42</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <div className="card-panel" style={{ padding: '24px 16px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '12px', right: '12px', color: 'var(--accent-orange)' }}><Target size={14} /></div>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--accent-blue)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 20px rgba(47, 110, 226, 0.3)' }}><Sun size={28} /></div>
          <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Dawn Seeker</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>5 rituals completed before 7 AM</div>
        </div>
        <div className="card-panel" style={{ padding: '24px 16px', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#1c4fd6', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 20px rgba(28, 79, 214, 0.2)' }}><Droplet size={28} /></div>
          <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Deep Blue</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Maintain hydration for 14 days</div>
        </div>
        <div className="card-panel" style={{ padding: '24px 16px', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--accent-orange)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 20px rgba(242, 139, 76, 0.3)' }}><Activity size={28} /></div>
          <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Hyper Focus</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>No notifications for 4 hours straight</div>
        </div>
        <div className="card-panel" style={{ padding: '24px 16px', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#258a4e', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 20px rgba(37, 138, 78, 0.3)' }}><Users size={28} /></div>
          <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Kinetic Soul</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>50km total movement tracked</div>
        </div>
        <div className="card-panel" style={{ padding: '24px 16px', textAlign: 'center', opacity: 0.5 }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}><BookOpen size={28} /></div>
          <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Silent Scribe</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Journal for 10 consecutive days</div>
        </div>
        <div className="card-panel" style={{ padding: '24px 16px', textAlign: 'center', opacity: 0.5 }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}><Users size={28} /></div>
          <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '4px' }}>Alloy Mentor</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Help 3 peers with their rituals</div>
        </div>
        <div className="card-panel" style={{ padding: '24px 16px', textAlign: 'center', border: '1px dashed rgba(255,255,255,0.1)', background: 'transparent' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}><HelpCircle size={20} /></div>
          <div style={{ fontWeight: '700', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-tertiary)', marginTop: '24px' }}>UNKNOWN OBJECTIVE</div>
        </div>
        <div className="card-panel" style={{ padding: '24px 16px', textAlign: 'center', border: '1px dashed rgba(255,255,255,0.1)', background: 'transparent' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}><HelpCircle size={20} /></div>
          <div style={{ fontWeight: '700', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-tertiary)', marginTop: '24px' }}>UNKNOWN OBJECTIVE</div>
        </div>
      </div>
    </div>
  );
}
