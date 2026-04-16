import { useState, useEffect } from 'react';

export function useTimer(startDateISO) {
  const [timePassed, setTimePassed] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 });
  const [dayProgress, setDayProgress] = useState(0); 
  const [totalProgress, setTotalProgress] = useState(0); 

  useEffect(() => {
    if (!startDateISO) return;
    const start = new Date(startDateISO);

    const calc = () => {
      const now = new Date();
      // Ensure we don't go negative if in future
      const diffMs = Math.max(0, now.getTime() - start.getTime());
      
      const s = Math.floor(diffMs / 1000) % 60;
      const m = Math.floor(diffMs / (1000 * 60)) % 60;
      const h = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
      const totalD = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      
      setTimePassed({ 
        years: Math.floor(totalD / 365), 
        days: totalD % 365, 
        hours: h, 
        minutes: m, 
        seconds: s,
        totalDays: totalD 
      });

      // Daily progress % (since midnight local)
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const msSinceMidnight = now.getTime() - midnight.getTime();
      const msInDay = 24 * 60 * 60 * 1000;
      setDayProgress((msSinceMidnight / msInDay) * 100);
      
      // A fun dynamic visual progress that grows over time
      // 0 to 90 days scales from 0% to 100%, then stays 100%
      setTotalProgress(Math.min(100, Math.max(0, (totalD / 90) * 100))); 
    };

    calc();
    const inv = setInterval(calc, 1000);
    return () => clearInterval(inv);
  }, [startDateISO]);

  return { timePassed, dayProgress, totalProgress };
}
