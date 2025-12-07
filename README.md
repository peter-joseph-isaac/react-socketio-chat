# React-SocketIO-Chat

A **Real-time Chat Application** built using **React.js** for the frontend and **Express.js** with **Socket.IO** for the backend. This application enables users to communicate in real-time with seamless two-way data transfer.

## Live Demo : https://react-socket-io-chat.onrender.com

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation and Setup](#installation-and-setup)
5. [Folder Structure](#folder-structure)
6. [Usage](#usage)
7. [License](#license)
8. [Contact](#contact)

---

## Project Overview

This project demonstrates a real-time chat application where users can send and receive messages instantly using WebSockets powered by Socket.IO. The backend handles the communication logic, while the React-based frontend provides an interactive user interface.

---

## Features

- Real-time messaging using **Socket.IO**.
- RESTful API integration with **Express.js**.
- Modular and scalable code structure.
- Easy setup and development with **Nodemon** for backend hot-reloading.

---

## Tech Stack

### Frontend:
- **React.js** (v18.3.1)
- **Axios** (v1.7.9) for HTTP requests
- **Socket.IO Client** (v4.8.1)

### Backend:
- **Express.js** (v4.21.2) for server-side logic
- **Socket.IO** (v4.8.1) for WebSocket communication
- **Body-parser** (v1.20.3) for parsing incoming request bodies
- **CORS** (v2.8.5) for cross-origin resource sharing
- **UUID** (v11.0.5) for unique identifier generation

---

## Installation and Setup

### Prerequisites:
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm or Yarn
- Git

### Steps to Run Locally:

1. Clone the repository:
git clone https://github.com/peter-joseph-isaac/react-socketio-chat  
cd react-socketio-chat

2. Install dependencies:

- For the backend:
  ```
  cd backend
  npm install
  ```

- For the frontend:
  ```
  cd ..
  npm install
  ```

3. Start the backend server:  
```
cd backend  
npm start  
```

4. Start the frontend server:  
```
open new terminal  
npm start  
```

5. Open your browser and navigate to `http://localhost:5173`.

---

## Folder Structure
```
react-socketio-chat/  
├── backend/ # Backend server folder  
│ ├── server.js # Main server file with Express & Socket.IO setup  
│ ├── package.json # Backend dependencies & scripts  
│ └── ...  
├── src/ # Frontend React application folder  
│ ├── App.jsx # Main React component and Socket.IO client setup  
│ └── ...  
├── package.json # Frontend dependencies & scripts  
└── README.md # Project documentation file  
```

---

## Usage

### Sending Messages:
1. Open multiple browser tabs or devices.
2. Type a message in one instance and see it appear in real-time across all connected clients.

### Development Tips:
- Use `Nodemon` to auto-restart the backend server during development:
cd backend
npm run dev

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## **Contact**

For questions or feedback, feel free to reach out:

**Peter Isaac**  
- Linkedln: https://www.linkedin.com/in/peter-joseph-isaac/
- GitHub: [https://github.com/peter-joseph-isaac](https://github.com/peter-joseph-isaac)
