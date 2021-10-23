import React, { useEffect } from 'react';

//I didnt know it is important that you import an image in react before using it.
import memoryimg from './images/memory.png';

import Form from './component/Form/Form.js';
import Posts from './component/Posts/Posts.js';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/post'

//installed tailwind > https://www.ordinarycoders.com/blog/article/reactjs-tailwindcss

// import

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  //If you want something to span the whole width use w-screen 
  return (
    <div className="container mx-auto w-screen">
      <div className="bg-black p-3 px-10 rounded-sm item-center">
        <ul className="flex justify-between">
          <li className="mr-2">
            <h1 className="text-white hover:text-black text-center text-xl">
              Memories
            </h1>
          </li>
          <li>
            <img
              className="object-contain w-10 h-10"
              src={memoryimg}
              alt="memories"
            />
          </li>
        </ul>
      </div>
      <div className="lg:flex md:flex bg-blue-50">
        <div className="w-2/3">
          <Posts />
        </div>
        <div className="w-1/3">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
