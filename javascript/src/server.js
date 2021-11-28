import http from "http"
import express from "express";

const app = express();

// file upload
app.get('/upload', (req, res) => {
  res.render('upload')
})

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4000

const serverOptions = {
  cors: true, 
  origins: [`http://127.0.0:${PORT}`]
}


const handleListen = () => console.log(`Server Running on http://localhost:${PORT}`);


httpServer.listen(PORT, handleListen);
