import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js';

// Create a router
const router = express.Router();

// Create a route for Signup, Login, and Logout and creating controllers for them
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout",logout);

export default router;