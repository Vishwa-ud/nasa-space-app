import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Hero } from './components'; // Import Navbar and Hero components
import { useEffect, useState } from 'react';
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

  const user = localStorage.getItem("token");

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      const today = (new Date()).toString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('Fetched from cache today')
        return;
      }
      //localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API today')
        console.log('DATA\n', apiData)
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="pt-20 md:pt-20 lg:pt-20">{/*Add padding to main componets */}
        <Routes>
          {user && <Route path="/"  element={<Hero />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Navigate repalce to ="/login" />} />
          <Route path="/apod" element={user ? <APOD data={data} showModal={showModal} handleToggleModal={handleToggleModal} /> : <Navigate to="/login" />} />
          <Route path="/space" element={user ? <Earth /> : <Navigate to="/login" />} /> 
          <Route path ="/mars" element={ user ? <Mars /> : <Navigate to="/login" />} /> 
          <Route path ="/about" element={<About />}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;