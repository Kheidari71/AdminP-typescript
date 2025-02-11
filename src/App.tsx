import React from 'react';
import UserInfo from './UserInfo.tsx';
import ConfirmBtn from './ConfirmBtn.tsx';

function App() {
  return (
    <div className="App">
      {/* <UserInfo name='kiana' family='heidari' age={22} skills={["c#" , "php"]}>

    {()=>console.log("hi")
    }
    
      </UserInfo> */}
      <ConfirmBtn handleClick={(event)=>{
        event.stopPropagation()
        event.preventDefault()
        console.log(event)
      }}
      style={{
        background: "blue",
        width:"100%",
      border : "solid",
      height :"100vh",
      
    
      }}/>
    </div>
  );
}

export default App;
