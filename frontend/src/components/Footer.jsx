import React, { useState } from 'react';
import './styles.css';

export default function Footer({ handleToggleModal, data, setData }) {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Defaults to today

    // Function to handle image download
    const handleDownload = () => {
        if (data && data.hdurl) {
            const downloadLink = document.createElement('a');
            downloadLink.href = data.hdurl;
            downloadLink.setAttribute('download', 'APOD_image.jpg');
            downloadLink.click();
            downloadLink.remove(); // Clean up to avoid memory leaks
        } else {
            alert('Sorry, the image is not available for download.');
        }
    };

    // Function to fetch APOD data
    const fetchAPIData = async (selectedDate) => {
        const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
        const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${selectedDate}`;
        try {
            const response = await fetch(url);
            const apiData = await response.json();
            setData(apiData);
            console.log("Fetched APOD data:", apiData);
        } catch (error) {
            console.error("Failed to fetch APOD data:", error);
        }
    };

    // Handle date change
    const handleDateChange = (event) => {
        setDate(event.target.value);
        fetchAPIData(event.target.value);
    };

    // Get today's date in YYYY-MM-DD format to set as max value
    const today = new Date().toISOString().split('T')[0];

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>Astronomy Picture of the Day</h1>
                <h2>{data?.title}</h2>
            </div>
            <div className="buttonGroup">
                <button className='downloadBtn' onClick={handleDownload} aria-label="Download image">
                    <i className="fa-regular fa-circle-down"></i>
                </button>
                <button onClick={handleToggleModal} aria-label="View more information">
                    <i className="fa-solid fa-circle-info"></i>
                </button>
                <input type="date" value={date} onChange={handleDateChange} className="datePicker" max={today} />
            </div>
        </footer>
    );
}
