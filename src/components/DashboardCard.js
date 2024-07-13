import React from 'react';
import { motion } from 'framer-motion';

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

export default DashboardCard;