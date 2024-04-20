import React, { useState } from 'react';

function Mars() {
    const [sol, setSol] = useState(1000);
    const [camera, setCamera] = useState('');
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;  // Your NASA API key

    const fetchPhotos = async () => {
        setLoading(true);
        setError(null);
        const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`;
        const query = `?sol=${sol}${camera ? `&camera=${camera}` : ''}&page=${page}&api_key=${NASA_KEY}`;
        const url = baseUrl + query;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.photos) {
                setPhotos(data.photos);
            } else {
                setPhotos([]);
                setError('No photos found or data structure is unexpected.');
            }
        } catch (error) {
            console.error('Error fetching Mars photos:', error);
            setPhotos([]);
            setError('Error loading photos. Please check your connection and try again.');
        }
        setLoading(false);
    };

    return (
        <div>
            <input type="number" value={sol} onChange={e => setSol(e.target.value)} placeholder="Sol (Mars Solar Day)" />
            <input type="text" value={camera} onChange={e => setCamera(e.target.value)} placeholder="Camera Code (e.g., fhaz, rhaz)" />
            <input type="number" value={page} onChange={e => setPage(e.target.value)} placeholder="Page Number" />
            <button onClick={fetchPhotos} disabled={loading}>Fetch Mars Photos</button>
            
            {loading ? <p>Loading...</p> : error ? <p>{error}</p> : photos.length ? (
                photos.map((photo, index) => (
                    <div key={index}>
                        <img src={photo.img_src} alt={`Mars Rover on Sol ${sol}`} />
                        <p>Camera: {photo.camera.full_name}</p>
                        <p>Date taken: {photo.earth_date}</p>
                    </div>
                ))
            ) : <p>No photos to display.</p>}
        </div>
    );
}

export default Mars;
