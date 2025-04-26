import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Services from './pages/Services';
import Catalogue from './pages/Catalogue';
import TrackOrder from './pages/TrackOrder';
import Feedback from './pages/Feedback';
import SubmitWork from './pages/SubmitWork';



const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/submit-work" element={<SubmitWork />} />

        </Routes>
        </div>

        {/* Footer always visible */}
        <Footer />
      </div>
  );
};

export default App;
