import express from 'express';
import photos from '../data/photos.json' with {type: "json"};

const router = express.Router();

router.get("/", function (request, response) {
    response.json(photos);
});

export default router;
// imported to index.js as photoRoutes