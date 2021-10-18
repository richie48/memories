import React,{useState} from 'react';

const Form = () => {
  const handleSubmit = ()=>{

  }

  const [postData,setPostData]=useState({
    creator:'', title:'', message:'',tags:'',selecetedFile:''
  })

  //value and onChange are two of the most important properties of the form
  //w-full fixed my issues of my form input areas not being wide enough
  //setting e.g max-w-sm can determine how wide w-full goes
  return (
    <div className="m-3 p-3 bg-red-100 w-2/3 rounded-md shadow">
      <form className="" autoComplete="off" onSubmit={handleSubmit}>
        <h6 className="font-bold">Create a memory</h6>
        <div className="my-2"> 
        <label className="block text-grey-600 text-sm ">Creator
        </label>
        <input className="text-grey-600 shadow bg-white w-full text-sm" type="text" placeholder="creator" value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value,
        })}></input>
        </div>

        <div className="my-2">
        <label className="block text-grey-600 text-sm ">Title
        </label>
        <input className="text-grey-600 shadow bg-white text-sm w-full" type="text" placeholder="title" value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value,
        })}></input>
        </div> 

        <div className="my-2">
        <label className="block text-grey-600 text-sm ">Message
        </label>
        <textarea className="text-grey-600 shadow bg-white w-full text-sm " type="text" placeholder="message..."value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value,
        })}></textarea>
        </div> 

        <div className="my-2 w-full">
        <label className="block text-grey-600 text-sm ">Tags
        </label>
        <input className="text-grey-600 shadow bg-white w-full text-sm" for="tags" type="text" placeholder="tags"value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value,
        })}></input>
        </div>

        <div className="my-2 grid grid-cols">
        <button className="bg-blue-500 hover:bg-black text-white font-bold py-1 px-10 my-1 rounded focus:shadow-outline" type="button">
        Sign In
        </button> 
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-10  my-1 rounded focus:shadow-outline" type="button">
        Clear
        </button>
        </div> 

      </form>
    </div>
  );
};

export default Form;
