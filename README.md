# MERN Chat App

## Overview

This project is a real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. It supports multiple chat rooms, user authentication, and real-time message delivery. The app is designed for scalability and performance, making it ideal for modern communication needs.

You can try out the live demo here: [MERN Chat App Live](https://mern-chat-app-ayf0.onrender.com/login). The application is deployed using [Render](https://render.com).

## Features

- **Real-Time Messaging**: Messages are instantly delivered to users using Socket.IO.
- **User Authentication**: Secure user authentication with JWT.
- **Multiple Chat Rooms**: Join or create chat rooms to engage in group conversations.
- **Private Messaging**: Start private chats with other users.
- **Responsive UI**: Built with React and TailwindCSS for an optimal user experience across devices.

## Technologies Used

- **MongoDB**: Database to store user information and chat histories.
- **Express.js**: Backend framework for building the RESTful API.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: Server-side JavaScript runtime.
- **Socket.IO**: For real-time, bi-directional communication between server and client.
- **JWT**: For secure authentication.
- **TailwindCSS**: For responsive design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bence899/mern-chat-app.git
   cd mern-chat-app
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the `server` directory with the following:
   ```
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```

5. Start the application:
   ```bash
   at root directory
   npm run server
   ```

6. Run the client:
   ```bash
   cd frontend
   npm run dev 
   ```

## Deployment

This application is deployed using [Render](https://render.com), which simplifies deployment and provides a seamless hosting solution for full-stack applications.

## Usage

Visit the following link in your browser: [MERN Chat App Live](https://mern-chat-app-ayf0.onrender.com/login). Sign up or log in, and start messaging in real time.

## Contributing

Feel free to fork the repository and create pull requests. Any contributions are welcome!

## License

This project is open-source and available under the MIT License.
