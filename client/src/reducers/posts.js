
//we can decide to rename the state to posts since i am in a post reducer
const reducer =(posts=[],action)=>{
    switch(action.type){
        case 'CREATE':
            return [...posts,action.payload];

        case 'FETCH_ALL':
            return action.payload;

        case 'UPDATE':
            return posts.map((post)=> post._id===action.payload? action.payload: post)
        
        default:
            return posts
    }
   
}
export default reducer;

