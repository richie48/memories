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

  return (
    <div className="container mx-auto max-w-xl">
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
      <div className="grid grid-cols-2 bg-yellow-100">
        <div>
          <Posts />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
