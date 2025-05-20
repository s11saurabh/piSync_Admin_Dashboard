# PiSync Admin Dashboard

## Project Overview
PiSync Admin Dashboard is a web application designed to monitor and manage PiSync devices. PiSync is a lightweight service that helps PiBook and PiBox devices sync offline learning data (like videos watched, notes taken, assignments completed) to the cloud when internet connectivity is available. This dashboard allows administrators to view device sync status, trigger manual syncs, and monitor error logs.

## Demo

**Live Demo:** [PiSync Admin Dashboard](https://pi-sync-admin-dashboard-git-main-saurabhs-projects-d236dc8e.vercel.app/)
**Video Demo:** [here](https://drive.google.com/file/d/1w38E_Fb9CYVIU2dwLUMe_-HBIrGfPe-a/view?usp=sharing)

**Login Credentials:**
- Username: iiitbhsaurabh
- Password: 12345
- after login must wait few seconds to load the data from backend server
  
  <img width="1470" alt="image" src="https://github.com/user-attachments/assets/00350467-4379-4e0b-abf9-2565ed6e683d" />
  <img width="1470" alt="image" src="https://github.com/user-attachments/assets/4a23a8ea-c662-4d79-9a07-82e7c4665184" />
  <img width="1470" alt="image" src="https://github.com/user-attachments/assets/b5bedc22-3de8-48ae-8031-70ec00dc2837" />


## Features

1. **User Authentication**
   - Secure login system with username/password validation
   - Protected routes requiring authentication

2. **Device Management**
   - View all registered devices
   - Check sync status (Success, Failed, Pending)
   - View last sync time for each device
   - Trigger manual sync for individual devices

3. **Error Logging**
   - View recent errors by device
   - Monitor error types and timestamps
   - Track sync failures for troubleshooting

4. **Responsive Design**
   - Clean, information-focused UI
   - Mobile-friendly layout

## Project Structure

```
piSync_Admin_Dashboard/
├── backend/
│   ├── controllers/
│   │   ├── deviceController.js
│   │   └── errorController.js
│   ├── data/
│   │   └── mockData.js
│   ├── routes/
│   │   └── api.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   │   └── pi.png
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DeviceTable.jsx
│   │   │   ├── ErrorLogs.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Navbar.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── styles/
│   │   │   └── main.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```


## Tech Stack

### Frontend

#### React.js
React is a JavaScript library for building user interfaces with a component-based architecture.
```jsx
// Example of a React component
import React from 'react';

const DeviceTable = ({ devices, onSync }) => {
  return (
    <div className="device-table-container">
      {/* Component JSX structure */}
    </div>
  );
};

export default DeviceTable;
```

#### React Router DOM
Handles routing in the React application, enabling navigation between different views without refreshing the page.
```jsx
// Example of React Router implementation
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
```

#### CSS
Custom CSS for styling the application interface with responsive design principles.
```css
/* Example CSS styling */
.navbar {
  background-color: #800000; /* dark red */
  color: white;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 5px 15px rgba(128, 0, 0, 0.9);
}
```

#### LocalStorage
Browser's storage mechanism used to persist authentication state.
```javascript
// Example of LocalStorage for authentication
export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
};
```

### Backend

#### Node.js
JavaScript runtime used for building the server-side of the application.
```javascript
// Node.js server entry point
const app = require('./app');
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Express.js
Web framework for Node.js that handles HTTP requests and API routes.
```javascript
// Express application setup
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

module.exports = app;
```

#### RESTful API
Follows REST principles for structured API endpoints.
```javascript
// Example API route definition
router.get('/devices', deviceController.getAllDevices);
router.post('/devices/:id/sync', deviceController.syncDevice);
```

#### CORS
Cross-Origin Resource Sharing enabled to allow frontend-backend communication.
```javascript
// CORS implementation
const cors = require('cors');
app.use(cors());
```

#### Mock Data
Simulated data used for demonstration purposes.
```javascript
// Mock data structure
const devices = [
  {
    id: 'PBX00123',
    lastSyncTime: '2025-04-27T10:00:00Z',
    syncStatus: 'Success'
  },
  // More devices...
];
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/s11saurabh/piSync_Admin_Dashboard.git
cd piSync_Admin_Dashboard

# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm run dev
```

### Frontend Setup
```bash
# In a new terminal, navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The application should now be running at `http://localhost:3000`


## Deployment

The application is deployed using Vercel for the frontend. The backend can be deployed separately to a service like Heroku, Railway, or Render.

## Future Improvements

1. **Real-time Updates**: Implement WebSockets for live device status updates
2. **User Management**: Add multiple user accounts with different permission levels
3. **Data Visualization**: Add charts and graphs for sync statistics
4. **Advanced Filtering**: Implement filtering and searching capabilities for device lists
5. **Notifications**: Add alert system for critical sync failures
6. **Responsive Design Enhancements**: Further optimize for various screen sizes

## GitHub Repository

For the latest version of the code and to contribute to the project, visit the GitHub repository:
[https://github.com/s11saurabh/piSync_Admin_Dashboard](https://github.com/s11saurabh/piSync_Admin_Dashboard)

---

Developed by Saurabh Kumar
