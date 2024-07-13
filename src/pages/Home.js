import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Home = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1 
        className="text-6xl font-bold mb-6 text-gradient"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        Welcome to MelodicMatch
      </motion.h1>
      <motion.p 
        className="text-xl mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Discover your perfect rhythm and explore new music horizons
      </motion.p>
      <motion.div
        className="flex space-x-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to="/login">
          <motion.button 
            className="bg-accent text-background font-bold py-3 px-6 rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
        <Link to="/dashboard">
          <motion.button 
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Music
          </motion.button>
        </Link>
      </motion.div>
      <motion.div 
        className="mt-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Music size={64} className="text-accent" />
      </motion.div>
    </motion.div>
  );
};

export default Home;