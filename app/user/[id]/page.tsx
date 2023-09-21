import React from 'react'
import { notFound } from 'next/navigation'

interface Props{
    params: {id:number}
}

const UserDetail = ({params :{id} } : Props) => {
  if (id>10) notFound()

  return (
    <div>User {id} </div>
  )
}

export default UserDetail