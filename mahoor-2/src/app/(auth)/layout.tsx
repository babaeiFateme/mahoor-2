import React, { PropsWithChildren } from 'react'

const layout = ({children}:PropsWithChildren) => {
  return (
    <div>auth{children}</div>
  )
}

export default layout