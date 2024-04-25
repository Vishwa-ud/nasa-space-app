import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Earth.css'; // Import CSS file for styling

import backgroundImage from '../assets/Earth.jpg';

function Earth() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedType, setSelectedType] = useState('natural'); // Default type
    const [imageData, setImageData] = useState(null);
    const [error, setError] = useState(null);

    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!selectedDate) {
                setError('Please select a date.');
                return;
            }
            const formattedDate = selectedDate.toISOString().split('T')[0];
            const response = await axios.get(`https://api.nasa.gov/EPIC/api/${selectedType}/date/${formattedDate}?api_key=${NASA_KEY}`);
            console.log('Fetched Data:', response.data); // Log fetched data
            if (response.data && response.data.length > 0) {
                const imageData = response.data[0];
                // Append .png extension to the image name
                imageData.image = `${imageData.image}.png`;
                setImageData(imageData);
            } else {
                setError('No data found for the provided date.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data. Please try again later.');
        }
    }

    return (
        <div>
            <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',  // 100% of the viewport width
        height: '100vh', // 100% of the viewport height
        position: 'fixed', // Optional: makes it cover the entire screen at all times
        top: 60,
        left: 0,
        zIndex: -1 // Optional: ensures it stays behind other content
      }}></div>
        
        <div className="bg-purple/30 backdrop-blur-md transition-shadow hover:shadow-xl rounded-lg p-6 border border-white/60">
            <form onSubmit={handleSubmit} className="form-container">
                <label>
                    Select date:
                    <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="yyyy/MM/dd" />
                </label>
                <br />
                <br/>
                <label>Select imagery type: 
                    <select value={selectedType} onChange={e => setSelectedType(e.target.value)} className="border border-gray-300 rounded-md py-2 px-4">
                        <option value="natural">Natural Color</option>
                        <option value="enhanced">Enhanced Color</option>
                        <option value="aerosol">Aerosol</option>
                    </select>
                </label>
                <br/>
                <button type="submit" className="submit-btn"> Submit</button>
            </form>
            
            {error && <p>{error}</p>}

            {imageData && (
                <div className="bg-purple/30 backdrop-blur-md transition-shadow hover:shadow-xl rounded-lg p-6 border border-white/60">
                    <div className="bg-purple/30 backdrop-blur-md transition-shadow hover:shadow-xl rounded-lg p-6 border border-white/60" style={{ textAlign: 'center' }}>
                     <h2 className="text-3xl font-bold text-blue-600"> Earth Polychromatic Imaging Camera</h2>
                    <br/>
                    <img src={`https://api.nasa.gov/EPIC/archive/${selectedType}/${imageData.date.slice(0, 4)}/${imageData.date.slice(5, 7)}/${imageData.date.slice(8, 10)}/png/${imageData.image}?api_key=${NASA_KEY}`} alt="NASA Image" className="center-image" style={{ display: 'inline-block' }} />
                    </div>
                    <br/>
                    <div className="bg-purple/30 backdrop-blur-md transition-shadow hover:shadow-xl rounded-lg p-6 border border-white/60">
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600" >Date:</h1>
                        <p className="text-white-700 mt-2">{imageData.date}</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600">Caption:</h1>
                        <p className="text-white-700 mt-2">{imageData.caption}</p>
                    </div>
                    {imageData.centroid_coordinates && 
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600">Viewing Location:</h1>
                        <p className="text-white-700 mt-2">
                            Latitude: {imageData.centroid_coordinates.lat.toFixed(2)}°, 
                            Longitude: {imageData.centroid_coordinates.lon.toFixed(2)}°
                        </p>
                    </div>}
                    {imageData.dscovr_j2000_position && 
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600">Satellite Position:</h1>
                        <p className="text-white-700 mt-2">
                            X: {imageData.dscovr_j2000_position.x.toFixed(2)} km, 
                            Y: {imageData.dscovr_j2000_position.y.toFixed(2)} km, 
                            Z: {imageData.dscovr_j2000_position.z.toFixed(2)} km
                        </p>
                    </div>}
                    {imageData.lunar_j2000_position && 
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600">Moon Position:</h1>
                        <p className="text-white-700 mt-2">
                            X: {imageData.lunar_j2000_position.x.toFixed(2)} km, 
                            Y: {imageData.lunar_j2000_position.y.toFixed(2)} km, 
                            Z: {imageData.lunar_j2000_position.z.toFixed(2)} km
                        </p>
                    </div>}
                    {imageData.sun_j2000_position && 
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600">Sun Position:</h1>
                        <p className="text-white-700 mt-2">
                            X: {imageData.sun_j2000_position.x.toFixed(2)} km, 
                            Y: {imageData.sun_j2000_position.y.toFixed(2)} km, 
                            Z: {imageData.sun_j2000_position.z.toFixed(2)} km
                        </p>
                    </div>}
                    {imageData.attitude_quaternions && 
                    <div>
                        <h1 className="text-2xl font-bold text-blue-600">Satellite Attitude:</h1>
                        <p className="text-white-700 mt-2">
                            q0: {imageData.attitude_quaternions.q0.toFixed(4)}, 
                            q1: {imageData.attitude_quaternions.q1.toFixed(4)}, 
                            q2: {imageData.attitude_quaternions.q2.toFixed(4)}, 
                            q3: {imageData.attitude_quaternions.q3.toFixed(4)}
                        </p>
                    </div>}
                </div>

                </div>
            )}
        </div>
        </div>
    );
}

export default Earth;
