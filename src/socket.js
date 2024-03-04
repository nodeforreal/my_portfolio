import { io } from "socket.io-client";

// socket url
const URL = process.env.NODE_ENV === 'production' ? "https://visitor-notification.onrender.com/" : 'http://localhost:3000';

// connect socket
const socket = io(URL)

export { socket }