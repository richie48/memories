import React from 'react';

//passed in the the state as props
const Post = ({post,key}) => {
  return (
    <div className="m-1 p-2 max-w-sm rounded bg-blue-50 shadow-lg min-h-md">
      <img src={post.selectedFile} alt="?? no display"></img>
      <div className="px-3 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-sm">{post.message}</p>
      </div>
      <div class="px-2 pt-2 pb-1">
        {post.tags.length && post.tags.map((tag)=><span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">#{tag}</span>)}
  </div>

    </div>
  );
};

export default Post;
