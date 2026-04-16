import { Clock } from 'lucide-react';

export default function ResetModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="glass-modal" style={{ padding: '40px 32px', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(226, 74, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 0 20px rgba(226, 74, 74, 0.2)' }}>
          <Clock size={28} color="var(--accent-danger)" />
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px' }}>Reset Ritual?</h2>
        
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.5, marginBottom: '32px', fontSize: '0.95rem' }}>
          This action <strong style={{ color: '#fff' }}>cannot be undone</strong>. You will lose your current streak of <strong style={{ color: 'var(--accent-orange)' }}>12 days</strong> and all momentum gained in this cycle.
        </p>

        <button style={{
          width: '100%',
          background: 'linear-gradient(to right, #cf364c, #e24a4a)',
          color: '#fff',
          fontWeight: '700',
          padding: '16px',
          borderRadius: '16px',
          fontSize: '1.1rem',
          border: 'none',
          marginBottom: '16px',
          boxShadow: '0 8px 24px rgba(226, 74, 74, 0.3)'
        }}>
          Reset Habit
        </button>

        <button onClick={onClose} style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          fontWeight: '600',
          letterSpacing: '0.1em',
          fontSize: '0.85rem',
          padding: '8px'
        }}>
          CANCEL
        </button>
      </div>
    </div>
  );
}
