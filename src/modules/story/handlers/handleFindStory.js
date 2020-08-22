const Story = require("../dbSchema");

/**
 * This is a handler for finding a single story
 * @param {*} req
 * @param {*} res
 */
const handleFindStory = async (req, res) => {
  const {id} = req.params;
  const story = await Story.findById(id);

  // Sending Story
  res.status(200).json({
    data: story,
    error: { code: null, message: null },
  });
};

module.exports = handleFindStory;
