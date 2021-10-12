import PostMessage from '../models/PostMessage.js';

//since we added await the we must mae function async
export const getPosts = async (req, res) => {
  try {
    //because finding something in a database take time, we need it as an asynchonous action, so we add await
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;

  //we are using the request received to create a new model named newPost.
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
