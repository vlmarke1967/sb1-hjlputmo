import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MediaPage from './pages/MediaPage';
import ShowsPage from './pages/ShowsPage';
import StorePage from './pages/StorePage';

function App() {
  return (
    <Router>
      <div className="bg-indigo-950 min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/store" element={<StorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;