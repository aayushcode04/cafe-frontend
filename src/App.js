import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ReservationForm from './components/ReservationForm';
import CafeInfo from './components/CafeInfo';
import Menu from './components/MenuPage';
import Review from './components/review';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={< Review/>} />

        <Route path="/reservationform" element={<ReservationForm />} />
        <Route path="/about" element={<CafeInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
