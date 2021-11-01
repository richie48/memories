import React, { useEffect,useState } from 'react';

//I didnt know it is important that you import an image in react before using it.
import memoryimg from './images/memory.png';

import Form from './component/Form/Form.js';
import Posts from './component/Posts/Posts.js';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/post'

//installed tailwind > https://www.ordinarycoders.com/blog/article/reactjs-tailwindcss

// import

const App = () => {
  const [currentId,setCurrentId]= useState(null)
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
      <div className="flex flex-col-reverse lg:flex-row md:flex-row xl:flex-row bg-blue-50">
        <div className="w-3/4 md:w-2/3 lg:w-2/3 xl:w-2/3">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="w-3/4 md:w-1/3 lg:w-1/3 xl:w-1/3 ">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default App;
