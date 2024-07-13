import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disc, Shuffle, Music, Headphones, Play, Pause } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import { searchArtists, getTopTracks } from '../services/musicService';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = ({ setCurrentView }) => {
  const [topArtists, setTopArtists] = useState([]);
  const [trendingTracks, setTrendingTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();

  useEffect(() => {

    const fetchData = async () => {
      const artists = await searchArtists(searchResults);  // Example search
      setTopArtists(artists.slice(0, 3));
      
      if (artists.length === 0) return;
      const tracks = await getTopTracks(artists[0].name);
      setTrendingTracks(tracks.slice(0, 3));
    };

    fetchData();
  }, []);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchResults) {
      const results = await searchArtists(searchResults);
      setSearchResults(results.slice(0, 6));
    }
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardCard title="Search Artists" icon={Disc}>
        <form onSubmit={handleSearch} className="mb-4">
          <input
            type="text"
            placeholder="Search for artists"
            className="p-2 bg-transparent text-white border-b border-white focus:outline-none focus:border-accent w-full"
            value={searchResults}
            onChange={(e) => setSearchResults(e.target.value)}
          />
          <button type="submit" className="mt-2 w-full p-2 bg-accent text-white rounded">Search</button>
        </form>
        <ul>
          {searchResults.map((artist, index) => (
            <motion.li
              key={artist.mbid || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-2 text-white flex justify-between items-center"
              >
              <span>{artist.name}</span>
              <span className = "text-sm">{artist.listeners} listeners</span>
              </motion.li>
          ))}
        </ul>
      </DashboardCard>
      <DashboardCard title="Your Top Artists" icon={Disc}>
        <motion.ul>
          {topArtists.map((artist, index) => (
            <motion.li 
              key={artist.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-2 text-white flex justify-between items-center"
            >
              <span>{artist.name}</span>
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
      <DashboardCard title="Trending Tracks" icon={Music}>
        {trendingTracks.map((track, index) => (
          <motion.div 
            key={track.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-2 text-white flex justify-between items-center"
          >
            <span>{track.name} - {track.artist.name}</span>
            <motion.button
              className="px-2 py-1 bg-accent text-background rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </motion.button>
          </motion.div>
        ))}
      </DashboardCard>
    </motion.div>
  );
};

export default Dashboard;