import React from 'react'
import UserData from '../types/UserData';

interface UserNameChangeProps {
  data : UserData
  changeHandler(event: React.ChangeEvent<HTMLInputElement>) : void;
}

const UserNameChange = ({data: {name}, changeHandler} : UserNameChangeProps) => {
  return (
    <input type="text" onChange={changeHandler} placeholder={'Update Name here.....'}/>
  )
}

export default UserNameChange
