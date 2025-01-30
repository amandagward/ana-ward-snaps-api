import express from 'express';
import photos from '../data/photos.json' with {type: "json"};

const router = express.Router();

router.get("/", function (request, response) {
    response.json(photos);
});

router.get("/:id", function (request, response) {
    const photo = photos.find((e) => e.id === request.params.id);
    // looking through the array of photos and finding the one object that matches the parameter
    if (photo === undefined) {
        response.status(404).send("Photo not found")
        // returns error code
    }
    else {
        response.json(photo)
    }
    // returns photo via json
})

export default router;
// imported to index.js as photoRoutes