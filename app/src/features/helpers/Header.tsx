// Libraries
import React from 'react'

interface Props {
  title: string
}

export function Header({ title }: Props): React.ReactElement {
  return <h4 style={{ marginBottom: 0, padding: '0.5EM' }}>{title}</h4>
}

export default Header
