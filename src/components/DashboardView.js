import React from 'react';
import { motion } from 'framer-motion';
import { Disc, Shuffle, Music, Headphones, Play, Pause } from 'lucide-react';

const DashboardView = ({ setCurrentView }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardCard title="Your Top Artists" icon={Disc}>
        <motion.ul>
          {['Artist 1', 'Artist 2', 'Artist 3'].map((artist, index) => (
            <motion.li 
              key={artist}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-2 text-white flex justify-between items-center"
            >
              <span>{artist}</span>
              <button onClick={togglePlay} className="text-accent hover:text-white transition-colors">
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </DashboardCard>
      <DashboardCard title="Discover New Artists" icon={Shuffle}>
        <motion.button
          className="text-white font-bold py-3 px-6 rounded-full shadow-lg gradient-bg"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentView('compare')}
        >
          Start Music Journey
        </motion.button>
      </DashboardCard>
      <DashboardCard title="Your Music DNA" icon={Headphones}>
        <div className="h-40 rounded-lg overflow-hidden gradient-bg relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Coming Soon!</span>
          </div>
        </div>
      </DashboardCard>
      <DashboardCard title="Trending Genres" icon={Music}>
        {['Electronic', 'Hip Hop', 'Indie Rock'].map((genre, index) => (
          <motion.div 
            key={genre}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-2 text-white flex justify-between items-center"
          >
            <span>{genre}</span>
            <motion.button
              className="px-2 py-1 bg-accent text-background rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Explore
            </motion.button>
          </motion.div>
        ))}
      </DashboardCard>
    </motion.div>
  );
};

const DashboardCard = ({ title, icon: Icon, children }) => (
  <motion.div 
    className="p-6 rounded-lg shadow-lg glassmorphism"
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      <Icon size={28} className="text-accent mr-3" />
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    {children}
  </motion.div>
);

export default DashboardView;