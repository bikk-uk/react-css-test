// Libraries
import React from 'react'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

export default function Container({ children }: Props): React.ReactElement {
  return <div className='container'>{children}</div>
}
