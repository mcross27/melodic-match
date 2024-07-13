import React from 'react';
import { motion } from 'framer-motion';

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

export default CategoryButton;