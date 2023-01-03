import React from 'react'
import UserData from '../types/UserData';

interface UserPictureProps {
  data : UserData
}

const UserPicture = ({data: {picture}} : UserPictureProps) => {
  return (
    <img src={`${picture}`} alt="user"/>
  )
}

export default UserPicture
