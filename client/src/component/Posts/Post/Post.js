import React from 'react';
import moment from 'moment';



const deletePost = ()=>{

}
//passed in the the state as props
//Inline block takes the width necessary for the tags made
const Post = ({post, setCurrentId}) => {
  return (
    <div className=" relative m-1 max-w-sm rounded-lg bg-blue-50 shadow-lg min-h-md hover:bg-blue-100" onClick={()=>{setCurrentId(post._id)}}>

      <img className="object-contain" src={post.selectedFile} alt="?? no display"></img>
      <div className="absolute top-0 left-0 text-gray-200 inline-block mx-2 mt-1 text-sm">{moment(post.createdAt).fromNow()}</div>
      {/* <div className="absolute top-0 right-0 pointer-events-auto ... bg-blue-50">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
      </div> */}
      <div className="px-3 py-4">
        <div className="font-bold text-xl mb-2 text-center">{post.title}</div>
        <p className="text-gray-700 text-sm text-center overflow-hidden">{post.message}</p>
      </div>
      <div class="px-2 pt-2 pb-1 text-center">
        {post.tags.length && post.tags.map((tag)=><span class="inline-block bg-gray-200 hover:bg-white rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">#{tag}</span>)}
  </div>
  <select className="bg-blue-100 ... absolute top-0 right-0">
      <option className="text-xs" onClick={()=>setCurrentId(post._id)}>Update</option>
        <option className="text-xs" onClick={deletePost}>Delete</option>
      </select>
    </div>
  );
};

export default Post;
