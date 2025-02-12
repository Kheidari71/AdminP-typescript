//usereducer
import {React , useReducer} from 'react';

type ActionType = {type : 'increment' | 'decrement'} | {type:'setCount' ,payload:number}
type StateType= {count:number}
const initialState : StateType= {count :0};

function reducer(state:StateType , action: ActionType){
 switch (action.type) {
    case 'increment':
return{count:state.count + 1};
case 'decrement':
    return{count:state.count - 1};
    case 'setCount':
    return{count:action.payload}
    default:
        throw new Error();
 }   
}

const Counter = () => {
    const [state , dispatch]= useReducer(reducer , initialState)
    return (
        <div>
           <p>Count: {state.count}</p> 
           <button onClick={()=>dispatch({type: 'increment'})}>Increase</button>
           <button onClick={()=>dispatch({type: 'decrement'})}>Decrease</button>

           <button onClick={()=>dispatch({type: 'setCount' , payload:6})}>Decrease</button>
        </div>
    );
}

export default Counter;
