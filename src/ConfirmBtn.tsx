import React from 'react';
// interface ConfirmButtonPropType { handleClick : (params : {name: string , family:string}[])=>void}

interface ConfirmButtonPropType { handleClick : (event : React.MouseEvent<HTMLButtonElement , MouseEvent> , params : string[])=>void

    style?:React.CSSProperties
  
}
const ConfirmBtn = ({handleClick , style}:ConfirmButtonPropType) => {
    return (
       <button onClick={(event)=>handleClick(event , ["typescript" , "react"])}  style={style}
       >click me
       </button>
    );
}

export default ConfirmBtn;
