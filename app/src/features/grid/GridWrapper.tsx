// Libraries
import React from 'react'
import clsx from 'clsx'
import Flex from '@react-css/flex'

// Components
import GridItemWrapper from './GridItemWrapper'
import GridContainerWrapper from './GridContainerWrapper'

type GridDisplayType = 'container' | 'item'

export default function GridWrapper(): React.ReactElement {
  const [displayType, setDisplayType] = React.useState<GridDisplayType>('container')

  const showContainer = React.useCallback(() => setDisplayType('container'), [setDisplayType])
  const showItem = React.useCallback(() => setDisplayType('item'), [setDisplayType])

  return (
    <>
      <Flex row justifyCenter>
        <button
          className={clsx('button secondary padded', displayType !== 'container' && 'button-outline')}
          onClick={showContainer}>
          Grid Container
        </button>
        <button
          className={clsx('button secondary padded', displayType !== 'item' && 'button-outline')}
          onClick={showItem}>
          Grid Item
        </button>
      </Flex>
      <div style={{ marginTop: '1em' }}> {displayType === 'item' ? <GridItemWrapper /> : <GridContainerWrapper />}</div>
    </>
  )
}
