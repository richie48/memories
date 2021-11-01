import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = ({setCurrentId}) => {
  //UseSelector gives you access to all the states in your redux store
  const posts = useSelector((state)=>state.posts);
  let posts_data=posts.data

  //Using props to access elements of each post
  return (
    <>
    <h1 className="text-center font-bold mt-4">Posts</h1>
      {!posts.data? <h1 className="text-center mt-10">loading...</h1> : <div className="grid lg:grid-cols-3 md:grid-cols-2 " >{posts_data.map((post) => <Post post={post} key={post._id} setCurrentId={setCurrentId}/>)}</div>}
    </>)
};

export default Posts;
