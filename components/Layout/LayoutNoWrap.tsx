import React from 'react';


interface Props {
  children: React.ReactNode
}

const LayoutNoWrap = ({children}: Props): React.ReactElement => {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}

export default LayoutNoWrap;
