import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';

const Layout = ({ children, isDarkMode, toggleDarkMode, setCurrentView, currentView }) => {
  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-background' : 'bg-gray-100'}`}>
      <Sidebar setCurrentView={setCurrentView} currentView={currentView} />
      <div className="flex-grow flex flex-col">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} setCurrentView={setCurrentView} />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Layout;