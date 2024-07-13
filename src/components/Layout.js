import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';

const Layout = ({ children, isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-background' : 'bg-gray-100'}`}>
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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