import React from 'react'
import UserData from '../types/UserData';

interface UserAddressProps {
  data : UserData
}

const UserAddress = ({data: {number, address, city, country}} : UserAddressProps) => {
  return (
    <>
      <h3 style={{color: number ? '#040335' : '#fff'}}>{`Number: ${number}`}</h3>
      <h3 style={{color: address ? '#040335' : '#fff'}}>{`Address: ${address}`}</h3>
      <h3 style={{color: city ? '#040335' : '#fff'}}>{`City: ${city}`}</h3>
      <h3 style={{color: country ? '#040335' : '#fff'}}>{`Country: ${country}`}</h3>
    </>
  )
}

export default UserAddress
