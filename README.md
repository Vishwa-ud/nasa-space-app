# React Frontend Application Using NASA APIs 🚀🌌

React frontend application that utilizes various NASA APIs to display astronomy-related data, including Mars Rover Photos, Astronomy Picture of the Day, and Earth imagery APIs. Users can explore daily or historical data and interact with the application to view dynamic content.


### Accessing the Application

You can access the hosted application by following this link:

[Hosted-Application](https://nasa-space-web.vercel.app/)

##### 🟢 new users need to sign up.

---

 Table of contents
=================

<!--ts-->
   * [Overview](#overview)
   * [Setup guide](#setup-guide)
   * [Technology Stack](#technology-stack)
   * [Deployment](#deployment)
   * [API Integration](#api-integration)
     * [APOD (Astronomy Picture of the Day)](#apod-astronomy-picture-of-the-day)
     * [EPIC (Earth Polychromatic Imaging Camera)](#epic-earth-polychromatic-imaging-camera)
     * [Mars Rover Photos Viewer](#mars-rover-photos-viewer)
   * [Testing](#testing)
      * [Backend Test](#backend-test)
      * [Frontend Test](#frontend-test)
    
        
<!--te-->

## Overview
NASA API Explorer provides users with a user-friendly interface to explore data from NASA's APIs. It offers a seamless experience for viewing Mars Rover Photos, Astronomy Picture of the Day, and Earth imagery. Users can choose to view daily updates or search for historical data.

---

## Technology Stack
- Frontend: React + Vite
- Backend: Express Js, Node JS
- Database: MongoDB
- Language: JavaScript
- CSS Framework: Tailwind CSS
- Session Management: JSON Web Token
- Version Control: GitHub
- Hosting Platform: Vercel

---

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
3. Set up environment variables in a .env file (Place .env File On Backend Folder) Add  environment variables ex: DataBase Link , SALT, JWTPRIVATEKEY 

4. run backend
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
4. Set up environment variables in a .env file (Place .env File On Frontend Folder).
ex :VITE_NASA_API_KEY   (your nasa api key) For How to generate NASA API Key Look API Integration Section.

5. run frontend
```
npm run dev
```

---

## Deployment
deployed using Vercel for seamless hosting.
- Why vercel,
- Real-time Updates: With Vercel, our application updates automatically in real-time whenever  push commits to GitHub.
- Free Hosting: enjoy free hosting on Vercel's generous free tier, saving costs while ensuring our application is always accessible.
  
- Simply follow these steps to host your react - node app:

1. Sign up for an account on Vercel.(Login with github accout)
2. Install Vercel to Your Repository (selcet the repo you want to Host)
3. Import Repository 
4. Configure Project In Root Directory first select backend and Add Environment Variables Like MongoDB url Secret KEY ect. And Deploy .
5. Also For frontend Import to your currunt project cahnge name use frontend or what you like then Root Directory select frontend  Add Environment Variables Like if you need . Then Deploy.

### Frontend

In Your Frontend, where you Connect with backend. use Backend Domain addres you deplployed insted of your Localhost. 
ex: like this 
```
https://web-app-server.vercel.app/api/v1/

```

### Backend
1. In package.json change nodemon to node
```
"scripts": {
    "start": "node server.js"
  },
```
2. Create vercel.json
and coppy this.
```
{
    "version": 2,
    "builds": [
        {
            "src": "server.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/server.js"
        }
    ]
}

```
3. In Server.js
```
app.use(cors({
    origin: 'https://yourwebappname.vercel.app', // Include your Frontend Domain address
    methods: 'GET,POST', // Allow all request methods
    credentials: true // Allow credentials
  }));

```

---

## API Integration

### how to use the APIs.

### Generate API Key 
 - [Link to nasa open api](https://api.nasa.gov/)
 - signup and get key via email
 - use .env to keep api key secured no one can see.

## APOD (Astronomy Picture of the Day)

### Overview
 NASA Astronomy Picture of the Day (APOD) API to fetch daily images and related information about space and astronomy. The APOD API provides a rich source of fascinating images along with their descriptions, which  utilize to enhance the user experience of our application.


 ### Fetching Data from NASA API

fetch data from the NASA (National Aeronautics and Space Administration) API to retrieve the Astronomy Picture of the Day (APOD) and related information. Here's an overview of how fetch and cache data from the NASA API:

### Fetching Process
use JavaScript's built-in `fetch` function to make HTTP requests to the NASA APOD API endpoint. Here's a breakdown of the steps involved:

1. **API Endpoint**:  construct the API request URL using the base URL `https://api.nasa.gov/planetary/apod` and include our NASA API key as a query parameter (`api_key`). The API key is securely stored in our application environment.

2. **Local Data Cache**: Before making a request to the API, check if the data for the current day is available in the local storage cache. generate a unique cache key based on the current date and prefix it with 'NASA-' (e.g., `NASA-Sun Apr 25 2024`). If data for the current date is found in the cache, retrieve and use it, skipping the API request.

3. **Fetching Data**: If the data for the current day is not available in the cache, proceed to make a request to the NASA API using the constructed URL.  use `fetch` to perform an asynchronous HTTP GET request to the API endpoint.

4. **Processing Response**: Upon receiving a response from the API,  extract the JSON data using the `json` method. The fetched APOD data typically includes information such as the image URL, title, date, and explanation.

5. **Caching Data**: Once  receive the data from the API,  store it in the local storage cache using the unique cache key generated earlier. This cached data allows us to avoid making redundant API requests for the same day in future application sessions.

6. **Error Handling**:  handle any errors that occur during the API request or data processing. If an error occurs, log the error message to the console for debugging purposes.


### Challenges Faced
During the integration of the APOD API, encountered several challenges:

1. **API Key Management**: Initially, managing the API key securely posed a challenge.  needed a reliable method to securely store and retrieve the API key without exposing it in our codebase.

2. **Caching Data**: Another challenge was efficiently caching fetched data to minimize unnecessary API calls. aimed to store the retrieved APOD data locally to reduce network requests and improve application performance.

### Resolutions
To address the challenges faced during API integration,  implemented the following solutions:

1. **Secure API Key Handling**:  leveraged environment variables and configuration files to securely manage the API key. By storing the API key in an environment variable,  ensured that it remained private and inaccessible to unauthorized users.

2. **Data Caching**: To optimize performance and minimize API calls,  implemented a caching mechanism using browser local storage. Upon fetching data from the APOD API, stored it locally, associating each entry with the current date. Subsequent requests for the same date retrieved the data from the local cache instead of making additional API calls, reducing network overhead.

### Conclusion
Integrating the APOD API into our project proved to be a valuable addition, enriching the user experience with captivating images and informative content about space and astronomy. By overcoming challenges such as API key management and data caching,  ensured the smooth functioning and optimal performance of our application.

---

## EPIC (Earth Polychromatic Imaging Camera)

 ### Overview
 NASA EPIC API to retrieve Earth imagery captured by the DSCOVR satellite. The API provides access to both natural and enhanced color images taken on specific dates. By integrating this API, users can explore stunning images of our planet taken from space.

### Challenges Faced

1. **API Key Handling**: One challenge was securely handling the NASA API key. used environment variables through Vite (`import.meta.env`) to store the key securely and access it within the application.

2. **Date Formatting**: The API requires dates to be in a specific format. faced challenges in formatting dates correctly to match the API's requirements. However, resolved this by converting JavaScript Date objects to the required ISO format using `toISOString()`.

3. **Data Handling**: The API responses contain various data fields, and handling them dynamically posed a challenge. addressed this by parsing the response data and displaying relevant information based on user selections.

4. **Image Format**: Initially, images were not fetched in PNG format, causing issues with rendering. To resolve this,  modified the image URL to explicitly request the PNG format from the API.

### Resolution

1. **API Key Handling**: securely stored the NASA API key in a Vite environment variable (`VITE_NASA_API_KEY`). This approach keeps the key out of version control and ensures security.

2. **Date Formatting**: To correctly format dates for API requests,  used JavaScript's `toISOString()` method to convert Date objects into the required format. This ensured compatibility with the API's date parameters.

3. **Data Handling**: parsed the API response data and displayed relevant information dynamically based on user selections. This involved conditional rendering of components and fields, ensuring a seamless user experience.

4. **Image Format**: updated the image URL to explicitly request the PNG format from the API. By appending `.png` to `imageData.image`, ensured that images are fetched in the desired PNG format, resolving rendering issues.

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

## Testing

### Backend Test

#### Unit Testing

- Tests with Jest and SuperTest
1. setup
```
npm i jest supertest cross-env
```
2. Package.json add test script
```
"scripts": {
    "test": "cross-env NODE_ENV=test jest --testTimeout=5000",
   }
```
3. create test folder in backend mkdir tests
4. create test file for each test ex users.test.js and write test case for each
5. run test
```
npm test
```
#### Results for Register and Login :
![Backendtest](https://github.com/sliitcsse/se3040-assignment02-Vishwa-ud/assets/94515855/a9787527-53ad-4c6e-a328-f70640019f51)

#### Integration Testing

Integration Test with Postman 
![interigation test](https://github.com/sliitcsse/se3040-assignment02-Vishwa-ud/assets/94515855/538627ab-2015-4e14-9122-f680930bc0c0)


### Frontend Test
#### Unit Testing &  Integration Testing
- Using Jest and React Testing Library and Vitest.
- Set Up the Testing environmet in frontend.
1. install Jest and React Testing Library
``` 
npm install  vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event -D
```
2. package.json update
```
"scripts": {
    "test": "vitest"
  }
```
3.mkdir tests   (create a test folder in root frontend) 
setup.js
```
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
    cleanup();
    vi.clearAllMocks();
});
```
4. update vite.config.js
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles : "./tests/setup.js"
  },
})

```
5. implement test files create ex:login.test.jsx 
6. run test
```
npm test
or 
npm run test:ui
```
Test Results :

![testtt](https://github.com/sliitcsse/se3040-assignment02-Vishwa-ud/assets/94515855/98d7373e-ee72-447e-8597-a73882a0ca5d)

---