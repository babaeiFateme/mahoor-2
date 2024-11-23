import React, { PropsWithChildren } from 'react'

const layout = ({children}:PropsWithChildren) => {
  return (
    <div>panel{children}</div>
  )
}

export default layout