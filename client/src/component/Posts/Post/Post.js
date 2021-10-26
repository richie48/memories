import React from 'react';
import moment from 'moment';

const editPost = ()=>{
  //call update 
}
//passed in the the state as props
//Inline block takes the width necessary for the tags made
const Post = ({post}) => {
  return (
    <div className=" relative m-1 max-w-sm rounded-lg bg-blue-50 shadow-lg min-h-md hover:bg-blue-100" onClick={editPost}>
      <img className="object-contain" src={post.selectedFile} alt="?? no display"></img>
      <div className="absolute top-0 left-0 text-gray-300 inline-block mx-2 font-bold">{moment(post.createdAt).fromNow()}</div>
      <div className="px-3 py-4">
        <div className="font-bold text-xl mb-2 text-center">{post.title}</div>
        <p className="text-gray-700 text-sm text-center overflow-hidden">{post.message}</p>
      </div>
      <div class="px-2 pt-2 pb-1 text-center">
        {post.tags.length && post.tags.map((tag)=><span class="inline-block bg-gray-200 hover:bg-white rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">#{tag}</span>)}
  </div>

    </div>
  );
};

export default Post;
