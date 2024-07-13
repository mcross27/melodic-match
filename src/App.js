import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ArtistProfile from './pages/ArtistProfile';
import CompareView from './pages/CompareView';
import './styles/MelodicMatch.css';

const queryClient = new QueryClient();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
        <Router>
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route path="/artist/:id" element={<ArtistProfile />} />
              <Route path="/compare" element={<CompareView />} />
            </Routes> */}
          </Layout>
        </Router>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}


export default App;

