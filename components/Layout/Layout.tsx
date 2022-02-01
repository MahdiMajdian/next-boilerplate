import React from 'react';
import Header from './Header/Header';


interface Props {
  children: React.ReactNode
}

const Layout = ({children}: Props): React.ReactElement => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;
