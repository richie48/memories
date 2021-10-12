import mongoose from 'mongoose';

//creating our scheme
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//we have to turn our schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
