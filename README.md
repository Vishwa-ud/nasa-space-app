# React Frontend Application Using NASA APIs

#  Setup guide

To run this project locally, follow these steps:

1. Create a New Folder Open it

2. Press Alt + D to select the address bar.

3. Type cmd and press Enter. This will open a command prompt window with the current folder as its location. (this method will open a command prompt window with the directory set to the folder you specified, allowing you to run commands directly in that folder)

4. Clone the repository to your local machine using Git:

```bash
git clone <github_repo_link>
```
5. To Run Backend and Frontend of the application follow below instructions.

#### Backend

1. Navigate to the project directory 
  ```
  cd backend
  ```
2. Install the project dependencies using npm.
```
npm i
```
3. run backend
```
npm start
```

#### Frontend
1. Open another terminal.

2. Navigate to the project directory.
  ```
  cd frontend
  ```
3. Install the project dependencies using npm.
```
npm i
```
4. run frontend
```
npm run dev
```

#  Build process

# API Integration

## how to use the APIs.

### Generate API Key 
 - signup and get key via email
 - use .env to keep api key secured no one can see.

# APOD  (Astronomy Picture of the Day.)

1. Call information
- use UseEffect Hook to Fetch data

---

 # Earth

 ## Introduction
This React component (`Earth`) is designed to fetch and display satellite imagery of Earth using the NASA API. It allows users to input specific geographic coordinates (longitude and latitude) and a date to retrieve an image of that location from space as captured on the specified date.

## NASA API
We used the `planetary/earth/assets` endpoint from the NASA API. This endpoint requires parameters such as longitude (`lon`), latitude (`lat`), date (`date`), and the dimension (`dim`) which controls the zoom level of the image.

## Implementation
The `Earth` component is implemented using React hooks. It initializes with default values representing a specific location and date. Users can update these values to fetch new images. The component handles the API response and updates the state to display the image.

## Challenges and Resolutions

### CORS Issue
Initially,  encountered a Cross-Origin Resource Sharing (CORS) issue, which is common when making API requests from the client side.

**Resolution:**  resolved this by setting up a proxy server that forwards requests to the NASA API, thereby avoiding CORS restrictions.

### Image Size
The images returned by the API were initially too large for our application's layout.

**Resolution:** handled this by using the `dim` parameter to fetch an image with a suitable zoom level and applied CSS styling to ensure the image fits within the layout.

### API Key Management
Exposing the API key in the client-side code is a security risk.

**Resolution:** used environment variables to securely store the NASA API key and accessed it in the component via `import.meta.env.VITE_NASA_API_KEY`.

### Error Handling
had to ensure that any errors in the API request were caught and handled gracefully.

**Resolution:**  implemented a try-catch block to log errors and provide user feedback in case of a failed request.

## Conclusion
The Earth imagery component provides a user-friendly interface to view satellite images from NASA. This component can be further enhanced by implementing features such as dynamic input fields for user-provided coordinates and dates, and a more sophisticated error handling and user notification system.

---

## Technology Stack
- Frontend: React + Vite
- Language: JavaScript
- CSS Framework: Tailwind CSS
- Version Control: GitHub
- Hosting Platform: _______

## Functional Requirements

• A user should be able to view daily or historical astronomy-related data.
• Incorporate user authentication for accessing personalized features.
• Display data dynamically based on user input or interactions.



[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V1F4A3D5)