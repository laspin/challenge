import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar-comp';
import { SkeleLoader } from './components/loader-comp';
import AddTeam from './pages/add-team-pg';
import Charts from './pages/charts-pg';
import NotFound from './pages/not-found-pg';
import { TeamsProvider } from './components/provider-comp';

// lazy
const Home = React.lazy(() => import('./pages/home-pg'));
const Teams = React.lazy(() => import('./pages/teams-pg'));

// lazy
const RadarChart = React.lazy(() => import('./pages/charts-pg/RadarChart'));
const BarChart = React.lazy(() => import('./pages/charts-pg/BarChart'));

const App = () => (
  <React.Suspense fallback={<SkeleLoader />}>
    <Navbar />
    <TeamsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/new" element={<AddTeam />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/charts/bar" element={<BarChart />} />
        <Route path="/charts/radar" element={<RadarChart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </TeamsProvider>
  </React.Suspense>
);

export default App;
