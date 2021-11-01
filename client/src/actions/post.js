import axios from 'axios';
const url = 'http://localhost:5000/posts/';
//Action creation

//redux thunk allow us to specify an extra arrow function
export const getPosts = () => async (dispatch) =>{
    try {
        const {data} =  await axios.get(url);
        console.log(data)
        const action={type:'FETCH_ALL', payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
  };

  export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} =  await axios.post(url,post);
        const action={type:'CREATE', payload:data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }

  };

  export const updatePost= (id,post)=> async (dispatch)=>{
      try {
          //This is jus javascript not jsx 
          const {data}= await axios.put(`${url}/${id}`,post)
          const action={type:'UPDATE',payload:data}
          dispatch(action)
          
      } catch (error) {
          console.log(error.message)
      }
  }