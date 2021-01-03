// Libraries
import React from 'react'

interface Props {
  title: string
}

export function Header({ title }: Props): React.ReactElement {
  return <h4 style={{ marginBottom: 0, paddingTop: '0.5em' }}>{title}</h4>
}

export default Header
