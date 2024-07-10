import React from 'react';
import { motion } from 'framer-motion';

const CompareView = ({ setCurrentView }) => {
  const comparingArtists = ['Artist A', 'Artist B'];

  const selectArtist = (artist) => {
    console.log(`Selected ${artist}`);
    setCurrentView('dashboard');
  };

  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gradient">Which artist resonates with you?</h2>
      <div className="flex justify-center space-x-12">
        {comparingArtists.map((artist, index) => (
          <motion.button
            key={index}
            className="text-white font-bold py-6 px-10 rounded-lg text-2xl shadow-lg gradient-bg"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => selectArtist(artist)}
          >
            {artist}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default CompareView;