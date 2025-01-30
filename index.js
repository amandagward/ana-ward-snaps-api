import express from 'express';
import tagRoutes from './routes/tags.js';
import photoRoutes from './routes/photos.js';

const app = express();

app.use(express.static("public"))
app.use(express.json())
app.use('/tags', tagRoutes);
app.use('/photos', photoRoutes);

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});