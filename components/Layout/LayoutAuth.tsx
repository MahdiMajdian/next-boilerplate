import { useRouter } from 'next/router';
import React, { useLayoutEffect } from 'react';


interface Props {
  children: React.ReactNode
}

const LayoutAuth = ({children}: Props): React.ReactElement => {
  const router = useRouter()
  const token = localStorage.getItem('token')
  
  useLayoutEffect(() => {
    if(!token){
      router.replace('/login')
    }
    // validate token
    new Promise((resolve) => setTimeout(() => {resolve({user: 'sdfsdg'})}, 500)).then(
      (data) => {
        if(!data){
          router.replace('/login')
        }
      }
    )
  }, [router, token])

  return (
    <>
      {children}
    </>
  )
}

export default LayoutAuth;

