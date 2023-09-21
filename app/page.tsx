import Link from 'next/link'
import Product from './components/Product'
import { getServerSession } from 'next-auth'
import authOptions from './api/auth/authoptions'

export default async function Home() {
  const data = await getServerSession(authOptions)

  return (
    <main>
      <h1>首頁</h1>
      <Product/>
      
      {data? <div>
                {data!.user!.name}  
                <Link href='/api/auth/signout'> 登出 </Link>
              </div>:
              <Link href='/api/auth/signin'> 登錄 </Link>}
      
    </main>
    
  )
}
