import express from 'express';
import tagRoutes from './routes/tags.js';
import photoRoutes from './routes/photos.js';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use('/tags', tagRoutes);
app.use('/photos', photoRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});