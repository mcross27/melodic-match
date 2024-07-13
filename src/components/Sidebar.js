import React from 'react';
import { motion } from 'framer-motion';
import { Home, Disc, User, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Disc, label: 'Discover', path: '/dashboard' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-gray-900 text-white w-64 min-h-screen p-4"
    >
      <h1 className="text-2xl font-bold mb-8">MelodicMatch</h1>
      <ul>
        {navItems.map(({ icon: Icon, label, path }) => (
          <li key={path} className="mb-4">
            <Link
              to={path}
              className={`flex items-center space-x-2 w-full p-2 rounded ${
                location.pathname === path ? 'bg-accent text-background' : 'hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Sidebar;