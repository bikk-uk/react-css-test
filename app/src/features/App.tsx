// Libraries
import React from 'react'
import clsx from 'clsx'
import Flex from '@react-css/flex'
import { Switch, Route, Link, useLocation } from 'react-router-dom'

// Components
import FlexTest from './flex/Flex'
import GridTest from './grid/Grid'

// Style
import 'style/milligram.min.css'

export function App(): React.ReactElement {
  const { pathname } = useLocation()

  return (
    <>
      <div>
        <Flex row justifySpaceAround style={{ marginTop: '2em' }}>
          <Link to='/flex'>
            <button className={clsx('button', !pathname.startsWith('/flex') && 'button-outline')}>
              @react-css/flex
            </button>
          </Link>
          <Link to='/'>
            <button className={clsx('button', pathname !== '/' && 'button-outline')}>Home</button>
          </Link>
          <Link to='/grid'>
            <button className={clsx('button', !pathname.startsWith('/grid') && 'button-outline')}>
              @react-css/grid
            </button>
          </Link>
        </Flex>
      </div>
      <div style={{ padding: '5em' }}>
        <Switch>
          <Route exact path='/'>
            <div style={{ textAlign: 'center' }}>
              Testing Application for <code>@react-css</code> Packages
            </div>
          </Route>
          <Route path='/flex'>
            <FlexTest />
          </Route>
          <Route path='/grid'>
            <GridTest />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
