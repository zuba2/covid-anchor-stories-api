const createStory = require("../domain/createStory");
const Story = require("../dbSchema");

/**
 * This is a handler for creating a story
 * @param {*} req
 * @param {*} res
 */
const handleCreateStory = async (req, res) => {
  const storyOrError = createStory(req.body);

  // Checking if create story failed
  if (storyOrError.tag == "failed") {
    res.status(400).json({
      data: null,
      error: {
        code: "VALIDATION",
        message: storyOrError.message,
      },
    });

    return;
  }

  // Save in persistence(Database)
  const story = await Story.create(storyOrError.data);
  console.log(story);

  // Checking if story was created
  if (!story) {
    res.status(500).json({
      data: null,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Oop! an error occured, please try again",
      },
    });

    return;
  }

  // Sending Story
  res.status(201).json({
    data: story,
    error: { code: null, message: null },
  });
};

module.exports = handleCreateStory;
