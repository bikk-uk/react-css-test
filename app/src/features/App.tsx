// Libraries
import React from 'react'
import clsx from 'clsx'
import Flex from '@react-css/flex'
import { Switch, Route, Link, useLocation } from 'react-router-dom'

// Components
import FlexWrapper from './flex/FlexWrapper'
import GridWrapper from './grid/GridWrapper'

// Style
import 'style/milligram.min.css'
import './App.css'

export function App(): React.ReactElement {
  const { pathname } = useLocation()

  return (
    <>
      <div>
        <Flex row justifyCenter style={{ marginTop: '2em' }}>
          <Link to='/flex'>
            <button className={clsx('button primary padded', !pathname.startsWith('/flex') && 'button-outline')}>
              @react-css/flex
            </button>
          </Link>
          <Link to='/'>
            <button className={clsx('button primary padded', pathname !== '/' && 'button-outline')}>Home</button>
          </Link>
          <Link to='/grid'>
            <button className={clsx('button primary padded', !pathname.startsWith('/grid') && 'button-outline')}>
              @react-css/grid
            </button>
          </Link>
        </Flex>
      </div>
      <div style={{ padding: '1em 2em 1em 2em' }}>
        <Switch>
          <Route exact path='/'>
            <div style={{ textAlign: 'center' }}>
              Testing Application for <code>@react-css</code> Packages
            </div>
          </Route>
          <Route path='/flex'>
            <FlexWrapper />
          </Route>
          <Route path='/grid'>
            <GridWrapper />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
