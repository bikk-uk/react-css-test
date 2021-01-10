// Libraries
import React from 'react'

interface Props {
  title: string
  code?: boolean
}

export default function Header({ title, code = false }: Props): React.ReactElement {
  const content = code ? <code>{title}</code> : title
  return <h5 style={{ marginBottom: 0, paddingTop: '0.5em' }}>{content}</h5>
}
