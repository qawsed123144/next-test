import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode
}

const ProductsLayout = ({children}:Props) => {
  return (
    <div className='flex'>
        <aside className='bg-slate-300 p-5'>Aside</aside>
        <div>{children}</div>
    </div>
  )
}

export default ProductsLayout