import http from "http"
import express from "express";

const app = express();
const PORT = 3000 

const httpServer = http.createServer(app);

const handleListen = () => console.log(`Listening on http://localhost:${PORT}`);
httpServer.listen(3000, handleListen);
