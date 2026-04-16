import { X, Share2, Download, Link2, Sparkles, Flame } from 'lucide-react';

export default function ShareModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="glass-modal" style={{ padding: '40px 32px', width: '100%', maxWidth: '440px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--text-secondary)' }}>
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--accent-orange)', marginBottom: '8px' }}>NEW ACHIEVEMENT UNLOCKED</div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px' }}>Share Your Ritual</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Let your circle feel the momentum.</p>
        </div>

        {/* Dynamic Card Artwork */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0f1620, #080c12)', 
          borderRadius: '20px', 
          border: '1px solid rgba(255,255,255,0.05)', 
          padding: '24px', 
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '1/1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Faux Background pattern */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(52, 229, 120, 0.1) 0%, transparent 60%)' }}></div>
          
          <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 10 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.1em', color: 'var(--primary)' }}>KINETIC SANCTUARY</div>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>ESTABLISHED 2024</div>
          </div>
          
          <Sparkles size={24} color="var(--primary)" style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 10 }} />

          {/* Central Glowing Circle Container */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* The Badge */}
            <div style={{ 
              width: '160px', 
              height: '160px', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle at top left, #34e578, #1e924b)',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(52, 229, 120, 0.4)',
              color: '#000',
              zIndex: 2,
              marginBottom: '32px'
            }}>
              <span style={{ fontSize: '4rem', fontWeight: '800', lineHeight: 1 }}>12</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.05em' }}>DAY STREAK</span>
            </div>
            {/* Flame mini badge overlay */}
            <div style={{ position: 'absolute', top: '10px', right: '-10px', zIndex: 3, width: '40px', height: '40px', borderRadius: '50%', background: '#222', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Flame size={20} color="var(--accent-orange)" />
            </div>
          </div>
          
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', zIndex: 10 }}>Ritual Mastery</h3>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: '80%', zIndex: 10, marginTop: '8px' }}>Deep focus achieved through 12 consecutive cycles of intentional movement.</p>
        </div>

        {/* Buttons */}
        <button style={{
          width: '100%',
          background: 'var(--primary)',
          color: '#000',
          fontWeight: '700',
          padding: '16px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '16px',
          fontSize: '1.1rem'
        }}>
          <Share2 size={20} />
          Share to Twitter
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <button style={{
            background: 'var(--surface-color)',
            padding: '16px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            border: '1px solid var(--border-color)'
          }}>
            <Download size={18} color="var(--primary)" />
            Save Image
          </button>
          <button style={{
            background: 'var(--surface-color)',
            padding: '16px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            border: '1px solid var(--border-color)'
          }}>
            <Link2 size={18} color="var(--accent-blue)" />
            Copy Link
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '24px', opacity: 0.5 }}>
          <div style={{ height: '1px', background: 'var(--text-secondary)', flex: 1 }}></div>
          <span style={{ fontSize: '0.65rem', padding: '0 12px', letterSpacing: '0.1em' }}>MOMENTUM VERIFIED</span>
          <div style={{ height: '1px', background: 'var(--text-secondary)', flex: 1 }}></div>
        </div>
      </div>
    </div>
  );
}
