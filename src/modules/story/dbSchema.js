const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const View = new Schema({
  ip: { type: String, required: true },
  cookie: { type: String, required: true },
});

const storySchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: "./img/default-story.jpg" },
  views: { type: [View], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
