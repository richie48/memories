import React from 'react';

const Form = () => {
  const handleSubmit = ()=>{

  }
  return (
    <div className="grid grid-cols">
      <form className="" autoComplete="off" onSubmit={handleSubmit}>
        <h6 className="font-bold">Create a memory</h6>
        <div className="my-2"> 
        <label className="block text-grey-600 text-sm ">Creator
        </label>
        <input className="text-grey-600 shadow bg-white" for="creator text-sm" type="text" placeholder="creator"></input>
        </div>

        <div className="my-2">
        <label className="block text-grey-600 text-sm ">Title
        </label>
        <input className="text-grey-600 shadow bg-white text-sm" for="title" type="text" placeholder="title"></input>
        </div> 

        <div className="my-2">
        <label className="block text-grey-600 text-sm ">Message
        </label>
        <textarea className="text-grey-600 shadow bg-white text-sm " for="message" type="text" placeholder="message..."></textarea>
        </div> 

        <div className="my-2 w-full">
        <label className="block text-grey-600 text-sm ">Tags
        </label>
        <input className="text-grey-600 shadow bg-white text-sm" for="tags" type="text" placeholder="tags"></input>
        </div>

        <div className="my-2 grid grid-cols">
        <button className="bg-blue-500 hover:bg-black text-white font-bold py-1 px-10 mx-2 my-1 rounded focus:shadow-outline" type="button">
        Sign In
        </button> 
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-10 mx-2 my-1 rounded focus:shadow-outline" type="button">
        Clear
        </button>
        </div> 

      </form>
    </div>
  );
};

export default Form;
