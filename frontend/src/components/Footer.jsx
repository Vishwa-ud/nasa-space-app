import React from 'react';
import './styles.css';

export default function Footer({ showModal, handleToggleModal, data }) {
    // Function to handle image download
    const handleDownload = () => {
        if (data && data.hdurl) {
            // Create an anchor element
            const downloadLink = document.createElement('a');
            // Set the href attribute to the image URL
            downloadLink.href = data.hdurl;
            // Set the download attribute to force download
            downloadLink.setAttribute('download', 'APOD_image.jpg');
            // Simulate a click on the anchor element to trigger download
            downloadLink.click();
        }
    };

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>Astronomy Picture of the Day</h1>
                <h2>{data?.title}</h2>
            </div>
            <div className="buttonGroup">
        <button className='donloadbtn' onClick={handleDownload}>
            <i className="fa-regular fa-circle-down"></i>
        </button>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </div>
        </footer>
    );
}
