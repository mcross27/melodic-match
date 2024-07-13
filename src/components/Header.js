import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Search, Moon, Sun } from 'lucide-react';
// import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  // const { user, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <motion.nav 
      className="flex justify-between items-center mb-8 p-4 bg-gray-800"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl font-bold text-gradient"
        whileHover={{ scale: 1.05 }}
      >
        MelodicMatch
      </motion.h1>
      <motion.div className="flex items-center space-x-4">
        <motion.form onSubmit={handleSearch} className="relative">
          <input 
            type="text" 
            placeholder="Search artists..." 
            className="glassmorphism text-white rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-opacity-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <motion.button 
            type="submit" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search size={20} className="text-white" />
          </motion.button>
        </motion.form>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-background" />}
        </motion.button>
        {/* {user ? ( */}
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            // onClick={logout}
          >
            <User size={24} className="text-white" />
          </motion.button>
        {/* ) : (
          <Link to="/login">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <User size={24} className="text-white" />
            </motion.button>
          </Link>
        )} */}
      </motion.div>
    </motion.nav>
  );
};

export default Header;