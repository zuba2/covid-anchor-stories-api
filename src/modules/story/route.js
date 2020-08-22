const express = require("express");

// Importing Handlers
const handleCreateStory = require("./handlers/handleCreateStory");
const handleDeleteStory = require("./handlers/handleDeleteStory");
const handleFindStories = require("./handlers/handleFindStories");
const handleFindStory = require("./handlers/handleFindStory");


// Creating a story route
const storyRoute = express.Router();

// Defining Stories Routes
storyRoute.post("/", handleCreateStory);
storyRoute.get("/", handleFindStories);
storyRoute.get("/:id", handleFindStory);
storyRoute.patch("/:id", (req, res) => res.send("You reached update story"));
storyRoute.delete("/:id", handleDeleteStory);

// Exporting storyRoute
module.exports = storyRoute;
