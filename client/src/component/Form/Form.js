import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/post';

//Does the job of holding files in the form
import FileBase from 'react-file-base64'

const Form = () => {
  const dispatch=useDispatch();
  const [postData,setPostData]=useState({
    creator:'', title:'', message:'',tags:'',selectedFile:''
  })
  const handleSubmit = (e)=>{
    e.preventDefault();//To prevent server refresh
    dispatch(createPost(postData));

  }

  const clearSubmit = (e)=>{
    e.preventDefault();
    setPostData({ creator:'', title:'', message:'',tags:'',selectedFile:''})
  }//here we clear the state

  //value and onChange are two of the most important properties of the form
  //w-full fixed my issues of my form input areas not being wide enough
  //setting e.g max-w-sm can determine how wide w-full goes
  return (
    <div className="m-3 p-3 bg-red-100 w-2/3 rounded-md shadow">
      <form className="" autoComplete="off" onSubmit={handleSubmit}>
        <h6 className="font-bold text-center">Create a memory</h6>
        <div className="my-2"> 
        <label className="block text-grey-600 ">Creator
        </label>
        <input className="text-grey-600 px-2 shadow bg-white w-full text-sm" type="text" placeholder="creator" value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value,
        })}></input>
        </div>

        <div className="my-2">
        <label className="block text-grey-600 ">Title
        </label>
        <input className="text-grey-600 px-2 shadow bg-white w-full" type="text" placeholder="title" value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value,
        })}></input>
        </div> 

        <div className="my-2">
        <label className="block text-grey-600 ">Message
        </label>
        <textarea className="text-grey-600 px-2 shadow bg-white w-full text-sm h-20" type="text" placeholder="message..."value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value,
        })}></textarea>
        </div> 

        <div className="my-2 w-full">
        <label className="block text-grey-600 text-sm ">Tags
        </label>
        <input className="text-grey-600 px-2 shadow bg-white w-full text-sm" type="text" placeholder="tags"value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value,
        })}></input>
        </div>
        <div>
          <FileBase type="file" mutiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}></FileBase>
        </div>

        <div className="my-2 grid grid-cols">
        <button className="bg-blue-500 hover:bg-black text-white font-bold py-1 px-10 my-1 rounded focus:shadow-outline" type="button"onClick={handleSubmit}>
        Submit
        </button> 
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-10  my-1 rounded focus:shadow-outline" type="button"onClick={clearSubmit}>
        Clear
        </button>
        </div> 

      </form>
    </div>
  );
};

export default Form;
