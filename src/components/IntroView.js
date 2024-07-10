import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Heart, ThumbsUp, ThumbsDown } from 'lucide-react';

const IntroView = ({ setCurrentView }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const addArtist = (category) => {
    console.log(`Added artist to ${category}`);
  };

  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-5xl font-bold mb-8 text-gradient"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        Discover Your Perfect Rhythm
      </motion.h2>
      <p className="text-2xl mb-12 text-white">Let's start by categorizing some artists you know!</p>
      <div className="flex justify-center space-x-12">
        <CategoryButton icon={Heart} label="Love" color="text-secondary" onClick={() => addArtist('love')} />
        <CategoryButton icon={ThumbsUp} label="Like" color="text-primary" onClick={() => addArtist('like')} />
        <CategoryButton icon={ThumbsDown} label="Not for me" color="text-accent" onClick={() => addArtist('dislike')} />
      </div>
      <motion.button
        className="mt-16 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg gradient-bg"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentView('dashboard')}
      >
        Explore Your Music Universe
      </motion.button>
    </motion.div>
  );
};

const CategoryButton = ({ icon: Icon, label, color, onClick }) => (
  <motion.button
    className={`flex flex-col items-center ${color}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
  >
    <Icon size={64} className="mb-2" />
    <span className="text-xl font-semibold text-white">{label}</span>
  </motion.button>
);

export default IntroView;