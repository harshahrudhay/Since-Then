import { X, Wind } from 'lucide-react';
import { useState } from 'react';

export default function RecordUrgeModal({ onClose }) {
  const [intensity, setIntensity] = useState(3);
  const [trigger, setTrigger] = useState('Stress');

  const triggers = ['Stress', 'Social', 'Boredom', 'Fatigue', 'Location'];

  return (
    <div className="modal-overlay">
      <div className="glass-modal" style={{ padding: '32px', width: '100%', maxWidth: '440px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--text-secondary)' }}>
          <X size={20} />
        </button>

        <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '4px' }}>Record Urge</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '32px' }}>Acknowledge the feeling. It will pass.</p>

        {/* Intensity Level */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '16px' }}>INTENSITY LEVEL</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[1, 2, 3, 4, 5].map(level => (
              <button
                key={level}
                onClick={() => setIntensity(level)}
                style={{
                  flex: 1,
                  aspectRatio: '1/1',
                  borderRadius: '12px',
                  background: intensity === level ? 'rgba(52, 229, 120, 0.05)' : 'rgba(255,255,255,0.03)',
                  border: `2px solid ${intensity === level ? 'var(--primary)' : 'transparent'}`,
                  color: intensity === level ? 'var(--primary)' : 'var(--text-primary)',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* What triggered this? */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '16px' }}>WHAT TRIGGERED THIS?</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {triggers.map(t => (
              <button
                key={t}
                onClick={() => setTrigger(t)}
                style={{
                  background: trigger === t ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  color: trigger === t ? '#fff' : 'var(--text-secondary)',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Breathing Active Box */}
        <div style={{ background: '#1c2230', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', border: '1px solid rgba(47, 110, 226, 0.2)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(47, 110, 226, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--accent-blue)' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent-blue)' }}></div>
          </div>
          <div>
            <div style={{ fontWeight: '700', color: '#a3c2ff', marginBottom: '4px' }}>Box Breathing Active</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Inhale for 4. Hold for 4. Exhale for 4.</div>
          </div>
        </div>

        {/* Record Button */}
        <button style={{
          width: '100%',
          background: 'var(--primary)',
          color: '#0b0f14',
          fontWeight: '700',
          padding: '16px',
          borderRadius: '16px',
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          border: 'none',
          marginBottom: '24px',
          boxShadow: '0 8px 30px rgba(52, 229, 120, 0.5)'
        }}>
          Record and Breathe <Wind size={20} />
        </button>

        {/* Action text */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onClose} style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontWeight: '600',
            letterSpacing: '0.1em',
            fontSize: '0.75rem',
            padding: '8px'
          }}>
            DISCARD ENTRY
          </button>
        </div>

      </div>
    </div>
  );
}
