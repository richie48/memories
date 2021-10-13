import * as api from '../api/index'

//Action creation

//redux thunk allow us to specify an extra arrow function
export const getPosts = () => async (dispatch) =>{
    try {
        const {data} =  await api.fetchPosts();
        const action={type:'FETCH_ALL', payload:[]}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }

  };