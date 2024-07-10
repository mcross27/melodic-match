import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes in seconds

  const togglePlay = () => setIsPlaying(!isPlaying);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/placeholder-album-art.jpg" alt="Album Art" className="w-12 h-12 mr-4" />
          <div>
            <h3 className="font-bold">Song Title</h3>
            <p className="text-sm text-gray-400">Artist Name</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => {}} className="text-gray-400 hover:text-white">
            <SkipBack size={24} />
          </button>
          <button onClick={togglePlay} className="bg-white text-black rounded-full p-2">
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button onClick={() => {}} className="text-gray-400 hover:text-white">
            <SkipForward size={24} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <input 
            type="range" 
            min="0" 
            max={duration} 
            value={currentTime}
            onChange={(e) => setCurrentTime(Number(e.target.value))}
            className="w-64"
          />
          <span className="text-sm">{formatTime(duration)}</span>
          <Volume2 size={20} className="ml-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;