import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  //UseSelector gives you access to all the states in your redux store
  let posts = useSelector((state)=>state.posts);

  posts=[...posts]// based on what is in the console it seems the state grabbed by selector is empty.
  console.log(posts)

  //Using props to access elements of each post
  return (
    <>
    <h1 className="text-center font-bold mt-4">Posts</h1>
    <div className="grid grid-cols-2">
      {!posts? <h1 className="text-center">loading...</h1> : (posts.map((post) => <Post post={post} key={post._id}/>))}
    </div>
    </>)
};

export default Posts;
