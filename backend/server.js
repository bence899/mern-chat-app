//Package Imports
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
//Routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
//Database Connection
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the incoming request with cookies

//Adding route for Authentication Using Middleware
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


// app.get("/", (req,res) =>{
//     //Root route hhtp://localhost:5000
//     res.send("Hello World");
// });

app.listen (PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});