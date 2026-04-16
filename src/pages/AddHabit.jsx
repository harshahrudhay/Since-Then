import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Crosshair } from 'lucide-react';
import { useStorage } from '../hooks/useStorage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AddHabit() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const { addIssue } = useStorage();
  const navigate = useNavigate();

  const handleSave = () => {
    if (!title.trim() || !startDate) return;
    
    addIssue({
      title: title.trim(),
      startDate: new Date(startDate).toISOString(),
    });
    
    navigate('/dashboard');
  };

  return (
    <>
      <div className="header">
        <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowLeft size={24} color="var(--text-primary)" />
        </button>
        <h1>New Habit</h1>
        <div style={{ width: 24 }} /> {/* spacer */}
      </div>

      <div className="glass-panel" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        <div style={{ position: 'relative' }}>
          <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '500' }}>
            What are you staying away from?
          </label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Crosshair style={{ position: 'absolute', left: '16px', color: 'var(--accent-secondary)', zIndex: 10 }} size={20} />
            <input 
              type="text" 
              placeholder="e.g., Smoking, Alcohol, Screens" 
              value={title}
              onChange={v => setTitle(v.target.value)}
              style={{ 
                width: '100%', 
                padding: '18px 18px 18px 48px', 
                borderRadius: '16px', 
                background: 'rgba(255,255,255,0.05)', 
                border: '2px solid transparent',
                color: 'white',
                fontSize: '1.1rem',
                outline: 'none',
                fontFamily: 'var(--font-family)',
                transition: 'border-color 0.3s'
              }} 
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-secondary)'}
              onBlur={(e) => e.target.style.borderColor = 'transparent'}
            />
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '500' }}>
            Date & Time of Last Activity
          </label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Calendar style={{ position: 'absolute', left: '16px', color: 'var(--accent-primary)', zIndex: 10 }} size={20} />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="custom-datepicker"
              wrapperClassName="datepicker-wrapper"
              calendarClassName="custom-calendar-popup"
            />
          </div>
        </div>

        <button 
          className="btn-primary" 
          onClick={handleSave}
          style={{ padding: '18px', fontSize: '1.2rem', marginTop: '16px', letterSpacing: '1px' }}
        >
          Begin Tracking
        </button>
      </div>
    </>
  );
}
