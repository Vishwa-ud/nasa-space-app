# React Frontend Application Using NASA APIs


 Table of contents
=================

<!--ts-->
   * [Setup guide](#setup-guide)
   * [Build process](#build-process)
   * [API Integration](#api-integration)
     * [APOD  (Astronomy Picture of the Day).](#apod-(astronomy-picture-of-the-day).)
     * [EPIC  (Earth Polychromatic Imaging Camera).](epic-(earth-polychromatic-imaging-camera).)
     * [Mars Rover Photos Viewer](#mars-rover-photos-viewer)
   * [Testing](#testing)
      * [Unit Testing](#unit-testing)
      * [Integration Testing ](#integration-testing)
    
        
<!--te-->

##  Setup guide

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

##  Build process

## API Integration

## how to use the APIs.

### Generate API Key 
 - signup and get key via email
 - use .env to keep api key secured no one can see.

## APOD  (Astronomy Picture of the Day.)

1. Call information
- use UseEffect Hook to Fetch data

---

 ## EPIC  (Earth Polychromatic Imaging Camera).

 ### Overview
 NASA EPIC API to retrieve Earth imagery captured by the DSCOVR satellite. The API provides access to both natural and enhanced color images taken on specific dates. By integrating this API, users can explore stunning images of our planet taken from space.

### Challenges Faced

1. **API Key Handling**: One challenge was securely handling the NASA API key. used environment variables through Vite (`import.meta.env`) to store the key securely and access it within the application.

2. **Date Formatting**: The API requires dates to be in a specific format. faced challenges in formatting dates correctly to match the API's requirements. However, resolved this by converting JavaScript Date objects to the required ISO format using `toISOString()`.

3. **Data Handling**: The API responses contain various data fields, and handling them dynamically posed a challenge. addressed this by parsing the response data and displaying relevant information based on user selections.

4. **Image Format**: Initially, images were not fetched in PNG format, causing issues with rendering. To resolve this, we modified the image URL to explicitly request the PNG format from the API.

### Resolution

1. **API Key Handling**: securely stored the NASA API key in a Vite environment variable (`VITE_NASA_API_KEY`). This approach keeps the key out of version control and ensures security.

2. **Date Formatting**: To correctly format dates for API requests,  used JavaScript's `toISOString()` method to convert Date objects into the required format. This ensured compatibility with the API's date parameters.

3. **Data Handling**: parsed the API response data and displayed relevant information dynamically based on user selections. This involved conditional rendering of components and fields, ensuring a seamless user experience.

4. **Image Format**: We updated the image URL to explicitly request the PNG format from the API. By appending `.png` to `imageData.image`, we ensured that images are fetched in the desired PNG format, resolving rendering issues.

---
## Mars Rover Photos Viewer

### Overview
The Mars Rover Photos Viewer component in our application utilizes the Mars Rover Photos API provided by NASA. This API allows users to retrieve photos taken by NASA's Mars rovers. Users can specify the Mars sol (solar day on Mars), the rover's camera, and pagination options to explore various photographs captured on the Martian surface.

### API Description
The Mars Rover Photos API offers access to a comprehensive collection of images from different cameras mounted on three rovers — Curiosity, Opportunity, and Spirit — based on several parameters:
- `sol`: Mars solar day of the rover mission.
- `camera`: Specific camera on the rover.
- `page`: Pagination parameter for the response.

### Implementation Details
The `Mars` component is implemented as a React functional component using hooks such as `useState` for managing state (e.g., selected sol, camera, and page) and `useEffect` for side effects to fetch data based on user input.

### Challenges and Solutions
#### Rate Limiting
**Challenge:** Initially, frequent API calls during development quickly led to hitting the rate limit imposed by NASA's API.
**Solution:** implemented conditional fetching to minimize unnecessary requests and introduced a simple caching mechanism to store previously fetched data. Additionally, added error handling to gracefully inform users when the rate limit has been exceeded.

#### Handling API Data Structure
**Challenge:** The API's response structure varied significantly based on the query parameters, sometimes leading to errors in rendering when data was absent.
**Solution:** added robust error handling and data structure checks before attempting to render the photos. This ensured that the application could handle empty or unexpected responses without crashing.

---

## Technology Stack
- Frontend: React + Vite
- Language: JavaScript
- CSS Framework: Tailwind CSS
- Version Control: GitHub
- Hosting Platform: _______

---

## Functional Requirements

• A user should be able to view daily or historical astronomy-related data.
• Incorporate user authentication for accessing personalized features.
• Display data dynamically based on user input or interactions.

---

## Testing

### Unit Testing
### Integration Testing



[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V1F4A3D5)