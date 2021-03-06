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
  const newPost = new PostMessage(body)//postMessage.create(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message)
    res.status(409).json({ message: error.message });
  }
};


export const deletePost= async (req,res)=>{
  const found_id=req.params.id
  
  const found_user= await PostMessage.findOne({_id:found_id})
  if (!found_user){
    res.status(404).json({error:"not found"})
  }

  try {
    //Provided the user was found
    await PostMessage.deleteOne({_id:found_id})
    res.status(201).json({success:true,data:[]})
    
  } catch (error) {
    res.status(401).json({error:error.message})
  }

}

//controller for updating post
export const updatePost = async (req,res)=>{
  try {
    const body= req.body
    const found_id = req.params.id

    //how we know that the body is not empty and have found the user  with the id
    if (!body){
      res.status(401).json({error:"updated information empty"})
    }
    const found_user= await PostMessage.findById(found_id)
    if (!found_user){
      // res.status(404).json({error:"not found"})
      res.status(404).send("no post with that id")
  }
    //new :true so we can received the updated version of the post.
    const updatedPost = await PostMessage.findByIdAndUpdate(req.params.id,body,{new:true})
    res.status(201).json(updatedPost)
    
  } catch (error) {
    res.status(401).send({error:error.message})
  }
}