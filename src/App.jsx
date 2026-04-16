import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import AddHabit from './pages/AddHabit';
import HabitDetail from './pages/HabitDetail';
import Achievements from './pages/Achievements';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddHabit />} />
        <Route path="/habit/:id" element={<HabitDetail />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Layout>
  );
}

export default App;
