// Libraries
import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function GridWrapper(): React.ReactElement {
  const match = useRouteMatch()

  return (
    <div style={{ background: 'green' }}>
      <div>URL: {match.url}</div>
      <div>Path: {match.path}</div>
    </div>
  )
}
