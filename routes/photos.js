import crypto from "crypto";
import fs, { writeFile } from "fs";
import express from "express";
import photos from "../data/photos.json" with {type: "json"};

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

// Same as above with photo comments added via photo id
router.get("/:id/comments", function (request, response) {
    const photo = photos.find((e) => e.id === request.params.id);
    if (photo === undefined) {
        response.status(404).send("Photo not found")
    }
    else {
        response.json(photo.comments)
    }
})

// Same as above with photo comments added via photo id with additional post functionality
router.post("/:id/comments", function (request, response) {
    const photo = photos.find((e) => e.id === request.params.id);
    if (photo === undefined) {
        response.status(404).send("Photo not found")
    }
    else {
        const newComment = {
            "id": crypto.randomUUID(),
            "name": request.body.name,
            "comment": request.body.comment,
            "timestamp": new Date().getTime(),
        }
        photo.comments.push(newComment);
        const photoIndex = photos.findIndex((e) => e.id === request.params.id);
        photos[photoIndex] = photo;
        fs.writeFile("./data/photos.json", JSON.stringify(photos, null, "\t"), "utf8", (err) => {
            console.log("Failed to log comment", err)
        });
        response.json(newComment);
    }
})

export default router;
// imported to index.js as photoRoutes