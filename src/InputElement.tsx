import React from 'react';

const InputElement = ({handleChange}: {handleChange: (event:React.ChangeEvent<HTMLInputElement>)=>string}) => {
    return (
        <div>
            <input
            type= "text"
            onChange={{handleChange}}
            />
        </div>
    );
}

export default InputElement;
