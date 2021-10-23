import React from 'react';

//passed in the the state as props
const Post = ({post,key}) => {
  return (
    <div className="m-1 p-2 max-w-sm rounded bg-blue-50 shadow-lg min-h-md">
      <img src={post.selectedFile} alt="?? no image"></img>
      <div className="px-3 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-sm">{post.message}</p>
      </div>
      <div class="px-2 pt-2 pb-1">
    <span className="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">#winter</span>
  </div>

    </div>
  );
};

export default Post;
