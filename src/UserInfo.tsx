import {React ,type FC , ReactNode } from 'react';
type UserInfoType = {name : string , family :string , age:number , skills?:("c#" | "php")[] , children: ()=>void
}
const UserInfo : FC<UserInfoType> = ({age ,family, name , skills , children}) => {
    return (
        <div>
          <h1>{name}</h1>
          <h1>{family}</h1>
          <h1>{age}</h1>
          <h1>{skills}</h1>
          {children}
        </div>
    );
}

export default UserInfo;
