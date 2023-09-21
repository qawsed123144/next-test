import {Html, Preview, Body, Container, Text, Link, Tailwind } from '@react-email/components'

interface Props{name:string}

const welcomeEmail = ({name} : Props) => {
  return (
    <Html>
        <Preview> 歡迎加入會員</Preview>

          <Tailwind>
            <Body className='bg-sky-200'>
                <Container>
                    <Text className='font-bold text-3xl'>你好 {name}</Text>
                    <Link href='localhost:3000'>localhost:3000</Link>
                </Container>
            </Body>
          </Tailwind>
        
    </Html>
  )
}

export default welcomeEmail