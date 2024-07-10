import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import IntroView from './components/IntroView';
import DashboardView from './components/DashboardView';
import CompareView from './components/CompareView';
import ArtistProfile from './components/ArtistProfile';
import Settings from './components/Settings';
import './styles/MelodicMatch.css';

const App = () => {
  const [currentView, setCurrentView] = useState('intro');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Layout 
      isDarkMode={isDarkMode} 
      toggleDarkMode={toggleDarkMode} 
      setCurrentView={setCurrentView}
      currentView={currentView}
    >
      <AnimatePresence mode="wait">
        {currentView === 'intro' && <IntroView key="intro" setCurrentView={setCurrentView} />}
        {currentView === 'dashboard' && <DashboardView key="dashboard" setCurrentView={setCurrentView} />}
        {currentView === 'compare' && <CompareView key="compare" setCurrentView={setCurrentView} />}
        {currentView === 'artist' && <ArtistProfile key="artist" />}
        {currentView === 'settings' && <Settings key="settings" isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
      </AnimatePresence>
    </Layout>
  );
};

export default App;