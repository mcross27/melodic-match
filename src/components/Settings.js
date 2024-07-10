import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Bell, Volume2 } from 'lucide-react';

const Settings = ({ isDarkMode, toggleDarkMode }) => {
  const [notifications, setNotifications] = useState(true);
  const [volume, setVolume] = useState(80);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      <h1 className="text-4xl font-bold mb-8">Settings</h1>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
            <span>Dark Mode</span>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${
              isDarkMode ? 'bg-accent' : 'bg-gray-400'
            }`}
          >
            <motion.div
              className="w-4 h-4 bg-white rounded-full"
              animate={{ x: isDarkMode ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell size={24} />
            <span>Notifications</span>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${
              notifications ? 'bg-accent' : 'bg-gray-400'
            }`}
          >
            <motion.div
              className="w-4 h-4 bg-white rounded-full"
              animate={{ x: notifications ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Volume2 size={24} />
          <span>Volume</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-grow"
          />
          <span>{volume}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;