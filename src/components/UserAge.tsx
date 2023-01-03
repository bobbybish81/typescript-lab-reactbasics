import React from 'react'
import UserData from '../types/UserData';

interface UserAgeProps {
  data : UserData
}

const UserAge = ({data: {age}} : UserAgeProps) => {
  return (
    <h3 style={{color: age ? '#040335' : '#fff'}}>{`Age: ${age}`}</h3>
  )
}

export default UserAge
