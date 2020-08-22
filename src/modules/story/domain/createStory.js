// Sterilize
const sterilize = (data) => (typeof data == "string" ? data.trim() : data);
const sterilizeMany = (obj) => {
  for (const key in obj) {
    obj[key] = sterilize(obj[key]);
  }

  return obj;
};

// Validate
const validateStory = (unvalidateStory) => {
  let errMgs = "";
  let data = sterilizeMany(unvalidateStory);

  if (!data.title) errMgs += "Title is required. ";
  if (!data.content) errMgs += "Content is required. ";
  if (data.image && typeof data.image !== "string") {
    errMgs += "Image must be alpha-numeric. ";
  }

  // Prepare validate
  return { data, isValid: errMgs.length < 1, message: errMgs };
};

// Create a new story
const createStory = (unvalidateStory) => {
  // Validate Story
  const { data, isValid, message } = validateStory(unvalidateStory);

  // Check if data is valid
  if (isValid) {
    return {
      tag: "passed",
      data: {
        title: data.title,
        content: data.content,
        image: data.image,
        views: [],
        createdAt: new Date(),
        updateAt: null,
      },
    };
  }

  // Return Story
  return { tag: "failed", message };
};

module.exports = createStory;
