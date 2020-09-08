import {DEC,INCR}from '../actions/type';
const initialState={
    count:0,
}
const count=(state=initialState,action)=>{
    switch(action.type){
        case DEC :return count +1 ;
        case INCR :return count -1;
        default:        return state;

    }
}
export default count;