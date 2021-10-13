
//we can decide to rename the state to posts since i am in a post reducer
  const reducer =(state=[],action)=>{
    switch(action.type){
        case 'CREATE':
            return action.payload;

        case 'FETCH ALL':
            return state;
        
        default:
            return state
    }
   
}
export default reducer;

