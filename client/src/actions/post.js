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