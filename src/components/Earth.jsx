import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Earth.css'; // Import CSS file for styling

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
        <div className="earth-container">
            <form onSubmit={handleSubmit} className="form-container">
                <label>
                    Select date:
                    <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="yyyy/MM/dd" />
                </label>
                <br />
                <label>
                    Select imagery type:
                    <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                        <option value="natural">Natural Color</option>
                        <option value="enhanced">Enhanced Color</option>
                        {/* Add more options as needed */}
                    </select>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {error && <p>{error}</p>}
            {imageData && (
                <div className="image-container">
                    <img src={`https://api.nasa.gov/EPIC/archive/${selectedType}/${imageData.date.slice(0, 4)}/${imageData.date.slice(5, 7)}/${imageData.date.slice(8, 10)}/png/${imageData.image}?api_key=${NASA_KEY}`} alt="NASA Image" className="center-image" />
                    <div className="details-container">
                        <p><strong>Date:</strong> {imageData.date}</p>
                        <p><strong>Caption:</strong> {imageData.caption}</p>
                        <p><strong>Centroid Coordinates:</strong> {imageData.centroid_coordinates && 
                            `Latitude: ${imageData.centroid_coordinates.lat.toFixed(2)}°, Longitude: ${imageData.centroid_coordinates.lon.toFixed(2)}°`}</p>
                        <p><strong>DSCOVR J2000 Position:</strong> {imageData.dscovr_j2000_position && 
                            `X: ${imageData.dscovr_j2000_position.x.toFixed(2)} km, Y: ${imageData.dscovr_j2000_position.y.toFixed(2)} km, Z: ${imageData.dscovr_j2000_position.z.toFixed(2)} km`}</p>
                        <p><strong>Lunar J2000 Position:</strong> {imageData.lunar_j2000_position && 
                            `X: ${imageData.lunar_j2000_position.x.toFixed(2)} km, Y: ${imageData.lunar_j2000_position.y.toFixed(2)} km, Z: ${imageData.lunar_j2000_position.z.toFixed(2)} km`}</p>
                        <p><strong>Sun J2000 Position:</strong> {imageData.sun_j2000_position && 
                            `X: ${imageData.sun_j2000_position.x.toFixed(2)} km, Y: ${imageData.sun_j2000_position.y.toFixed(2)} km, Z: ${imageData.sun_j2000_position.z.toFixed(2)} km`}</p>
                        <p><strong>Attitude Quaternions:</strong> {imageData.attitude_quaternions && 
                            `q0: ${imageData.attitude_quaternions.q0.toFixed(4)}, q1: ${imageData.attitude_quaternions.q1.toFixed(4)}, q2: ${imageData.attitude_quaternions.q2.toFixed(4)}, q3: ${imageData.attitude_quaternions.q3.toFixed(4)}`}</p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Earth;
