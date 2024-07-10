import React from 'react';
import { motion } from 'framer-motion';
import { Home, Disc, User, Settings } from 'lucide-react';

const Sidebar = ({ setCurrentView, currentView }) => {
  const navItems = [
    { icon: Home, label: 'Home', view: 'dashboard' },
    { icon: Disc, label: 'Discover', view: 'discover' },
    { icon: User, label: 'Profile', view: 'profile' },
    { icon: Settings, label: 'Settings', view: 'settings' },
  ];

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-gray-900 text-white w-64 min-h-screen p-4"
    >
      <h1 className="text-2xl font-bold mb-8">MelodicMatch</h1>
      <ul>
        {navItems.map(({ icon: Icon, label, view }) => (
          <li key={view} className="mb-4">
            <button
              onClick={() => setCurrentView(view)}
              className={`flex items-center space-x-2 w-full p-2 rounded ${
                currentView === view ? 'bg-accent text-background' : 'hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Sidebar;