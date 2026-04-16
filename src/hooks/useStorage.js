import { useState, useEffect } from 'react';

const DB_KEY = 'streak_tracker_db';

let globalData = JSON.parse(localStorage.getItem(DB_KEY)) || {
  user: { gender: 'neutral' },
  issues: [],
  events: [],
  achievements: []
};

const listeners = new Set();
const persist = () => localStorage.setItem(DB_KEY, JSON.stringify(globalData));
const notify = () => listeners.forEach(l => l(globalData));

export const useStorage = () => {
  const [data, setData] = useState(globalData);

  useEffect(() => {
    listeners.add(setData);
    return () => listeners.delete(setData);
  }, []);

  const addIssue = (issue) => {
    globalData = { 
      ...globalData, 
      issues: [...globalData.issues, { id: crypto.randomUUID(), createdAt: new Date().toISOString(), isActive: true, currentDayCounter: 0, totalFailures: 0, ...issue }] 
    };
    persist(); notify();
  };

  const addEvent = (event) => {
    globalData = { 
      ...globalData, 
      events: [...globalData.events, { id: crypto.randomUUID(), timestamp: new Date().toISOString(), ...event }] 
    };
    persist(); notify();
  };
  
  const updateIssue = (id, updates) => {
    globalData = { 
      ...globalData, 
      issues: globalData.issues.map(iss => iss.id === id ? { ...iss, ...updates } : iss) 
    };
    persist(); notify();
  };

  const getIssue = (id) => globalData.issues.find(i => i.id === id);

  return {
    data,
    addIssue,
    addEvent,
    updateIssue,
    getIssue
  };
};
