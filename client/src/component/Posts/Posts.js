import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  //UseSelector gives you access to all the states in your redux store
  const posts = useSelector((state)=>state.posts);
  const posts_data=posts.data

  // posts=[...posts]// based on what is in the console it seems the state grabbed by selector is empty.

  //Using props to access elements of each post
  return (
    <>
    <h1 className="text-center font-bold mt-4">Posts</h1>
    <div className="grid grid-cols-2">
      {!posts_data.length? <h1 className="text-center">loading...</h1> : (posts_data.map((post) => <Post post={post} key={post._id}/>))}
    </div>
    </>)
};

export default Posts;
