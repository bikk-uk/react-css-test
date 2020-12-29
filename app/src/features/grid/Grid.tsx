// Libraries
import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export function Grid(): React.ReactElement {
  const match = useRouteMatch()

  return (
    <div>
      Grid
      <div>URL: {match.url}</div>
      <div>Path: {match.path}</div>
    </div>
  )
}

export default Grid
