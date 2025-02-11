//usereducer
import {React , useReducer} from 'react';

const initialState = {count :0};

function reducer(state , action){
 switch (action.type) {
    case 'icrement':
return{count:state.count + 1};
case 'decrement':
    return{count:state.count - 1}
    default:
        throw new Error();
 }   
}

const Counter = () => {
    const [state , dispatch]= useReducer(reducer , initialState)
    return (
        <div>
            
        </div>
    );
}

export default Counter;
