import Link from 'next/link'
import React from 'react'
import { sort } from 'fast-sort';
import brick from '@/public/images/brick.jpeg'
import Image from 'next/image';

interface User{
  id:number,
  name:string,
  email:string
}

interface Props{
  searchParams:{sortOrder:string}
}

const UserPage = async ({searchParams:{sortOrder}}:Props) => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  const users:User[] = await result.json()

  const sorted_users = sort(users).asc(sortOrder === 'Email'? 
                                        user =>user.email : user =>user.name)

  return (
    <>
    <p><Link href={'/user?sortOrder=Name'}>Name</Link></p>
    <p><Link href={'/user?sortOrder=Email'}>Email</Link></p>
    {sorted_users.map(user => <li key={user.id}>{user.name} {user.email}</li>)}

    <Image src="https://res.cloudinary.com/dnlbtrczs/image/upload/v1695097155/next-app/zbipipxvayb6ileuskjc.png" 
            width={300}
            height={300}
             alt=''/>
    </>
  )
}
export default UserPage