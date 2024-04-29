import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Hero } from './components'; // Assuming these are correctly imported
import APOD from './components/APOD';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Earth from './components/Earth';
import Mars from './components/Mars';
import About from './components/About';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Today's date in YYYY-MM-DD format

  const user = localStorage.getItem("token");

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    const fetchAPIData = async () => {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY; // Make sure this is configured in your environment
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`;
      const localKey = `NASA-${date}`;

      setLoading(true);
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        setLoading(false);
        console.log('Fetched from cache:', date);
        return;
      }
      //localStorage.clear();
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API:', date);
        console.log('DATA\n', apiData);
      } catch (err) {
        console.error('Failed to fetch APOD data:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAPIData();
  }, [date]);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="pt-20 md:pt-20 lg:pt-20">{/*Add padding to main componets */}
          <Routes>
            {user ? <Route path="/" element={<Hero />} /> : <Route path="/" element={<Navigate replace to="/login" />} />}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apod" element={user ? <APOD data={data} setData={setData} date={date} setDate={setDate} showModal={showModal} handleToggleModal={handleToggleModal} /> : <Navigate to="/login" />} />
            <Route path="/space" element={user ? <Earth /> : <Navigate to="/login" />} />
            <Route path="/mars" element={user ? <Mars /> : <Navigate to="/login" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
