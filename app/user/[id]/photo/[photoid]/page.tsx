import React from 'react'

interface Props{
    params: {photoid:number}
}

const UserPhotoInfo = ({params :{photoid} } : Props) => {
  return (
    <div>UserPhotoInfo {photoid}</div>
  )
}

export default UserPhotoInfo