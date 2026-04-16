import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '85vh', textAlign: 'center', gap: '3rem', padding: '20px' }}>
      
      <div style={{ animation: 'pulse 4s infinite' }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: '800',
          background: 'linear-gradient(to right, var(--accent-primary), var(--accent-success))', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
          lineHeight: '1.1'
        }}>
          CleanTime
        </h1>
        <p style={{ 
          fontSize: '1.4rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '450px',
          margin: '0 auto',
          fontWeight: '300'
        }}>
          Track your streaks. Build better habits. Watch your clean time grow every single second.
        </p>
      </div>

      <Link to="/dashboard" className="btn-primary" style={{ 
        fontSize: '1.2rem', 
        padding: '18px 40px', 
        borderRadius: '50px', 
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        boxShadow: '0 10px 30px rgba(0, 242, 254, 0.4)',
        display: 'inline-block'
      }}>
        Start Trading Bad Habits
      </Link>
    </div>
  );
}
