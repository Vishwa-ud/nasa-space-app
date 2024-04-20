import React, { useState, useEffect } from 'react';

function Earth() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const lon = -95.33;  // Longitude for the new query
            const lat = 29.78;   // Latitude for the new query
            const date = '2018-01-01';  // Date in YYYY-MM-DD for the new query
            const dim = 0.15;    // Width and height in degrees for the new query
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;  // Your NASA API key

            // Updated URL to match the new query
            const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}&api_key=${NASA_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data); // This will log the data to the console
                // Use the image returned by the API. Assuming 'url' is the correct property
                setImageUrl(data.url);  
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Check if imageUrl exists and is not null */}
            {imageUrl ? <img src={imageUrl} alt="Earth from space" style={{ width: '100%', maxHeight: '600px' }} /> : <p>Loading...</p>}
        </div>
    );
}

export default Earth;
