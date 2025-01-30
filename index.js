import express from 'express';
import tagRoutes from './routes/tags.js';

const app = express();

app.use('/tags', tagRoutes);

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});