import React from 'react';
import { motion } from 'framer-motion';
import { Disc, Music, User, Play } from 'lucide-react';

const ArtistProfile = ({ artist = "Sample Artist" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="text-white"
    >
      <div className="flex items-center mb-8">
        <div className="w-32 h-32 rounded-full bg-accent mr-6 flex items-center justify-center">
          <User size={64} />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{artist}</h1>
          <p className="text-xl text-gray-300">Genre • Followers</p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Disc size={24} className="mr-2" /> Top Tracks
        </h2>
        <ul>
          {['Track 1', 'Track 2', 'Track 3'].map((track, index) => (
            <li key={track} className="mb-2 flex items-center justify-between">
              <span>{track}</span>
              <button className="text-accent hover:text-white transition-colors">
                <Play size={20} />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Music size={24} className="mr-2" /> Albums
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Album 1', 'Album 2', 'Album 3'].map((album) => (
            <div key={album} className="bg-gray-800 p-4 rounded-lg">
              <div className="w-full h-32 bg-gray-700 rounded-md mb-2"></div>
              <p>{album}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default ArtistProfile;