import React from 'react'
import UserData from '.././types/UserData';

interface UserNameProps {
  data : UserData
}

const UserName = ({data: {name}} : UserNameProps) => {
  return (
    <h3 style={{color: name ? '#040335' : '#fff'}}>{`Name: ${name}`}</h3>
  )
}

export default UserName
