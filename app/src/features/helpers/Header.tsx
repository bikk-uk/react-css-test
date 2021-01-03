// Libraries
import React from 'react'

interface Props {
  title: string
}

export default function Header({ title }: Props): React.ReactElement {
  return <h5 style={{ marginBottom: 0, paddingTop: '0.5em' }}>{title}</h5>
}
