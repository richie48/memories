import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';

const Posts = () => {
  //UseSelector gives you access to all the states in your redux store
  const posts = useSelector((state)=>state.posts);

  //Using props to access elements of each post
  return (
    <div>
    <h1 className="text-center font-bold mt-4">Posts</h1>
    <div className="grid grid-cols-3">{!posts.length? <h1>loading...</h1>:posts.map((post)=><div className="flex item-stretch" key={post._id}><Post post={post}/></div>)}</div>
  </div>);
};

export default Posts;
