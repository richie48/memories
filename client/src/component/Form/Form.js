import React from 'react';

const Form = () => {
  const handleSubmit = ()=>{

  }
  return (
    <>
      <form className="" autoComplete="off" onSubmit={handleSubmit}>
        <h6 className="font-bold item-right">Create a memory</h6>
        <div className=""> 
        <label className="block text-grey-600 text-sm ">Creator
        </label>
        <input className="text-grey-600 shadow bg-red-100" for="creator text-sm" type="text" placeholder="creator"></input>
        </div>

        <div>
        <label className="block text-grey-600 text-sm ">Title
        </label>
        <input className="text-grey-600 shadow bg-red-100 " for="creator text-sm" type="text" placeholder="title"></input>
        </div> 

        <div>
        <label className="block text-grey-600 text-sm ">Title
        </label>
        <input className="text-grey-600 shadow bg-red-100 " for="creator text-sm" type="text" placeholder="title"></input>
        </div> 


      </form>
    </>
  );
};

export default Form;
