// Libraries
import React from 'react'
import clsx from 'clsx'
import Flex from '@react-css/flex'
import { Route, Routes, Link, useLocation } from 'react-router-dom'

// Components
import FlexWrapper from './flex/FlexWrapper'
import GridWrapper from './grid/GridWrapper'

// Style
import 'style/milligram.min.css'
import './App.css'

export default function App(): React.ReactElement {
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
        <Routes>
          <Route
            path='/'
            element={
              <div style={{ textAlign: 'center' }}>
                Testing Application for <code>@react-css</code> Packages
              </div>
            }
          />
          <Route path='/flex' element={<FlexWrapper />} />
          <Route path='/grid' element={<GridWrapper />} />
        </Routes>
      </div>
    </>
  )
}
