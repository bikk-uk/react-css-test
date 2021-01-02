// Libraries
import React from 'react'
import Flex from '@react-css/flex'
import clsx from 'clsx'

// Components
import FlexItemWrapper from './FlexItemWrapper'

type FlexDisplayType = 'container' | 'item'

export function FlexWrapper(): React.ReactElement {
  const [displayType, setDisplayType] = React.useState<FlexDisplayType>('container')

  const showContainer = React.useCallback(() => setDisplayType('container'), [setDisplayType])
  const showItem = React.useCallback(() => setDisplayType('item'), [setDisplayType])

  return (
    <>
      <Flex row justifyCenter>
        <button
          className={clsx('button secondary padded', displayType !== 'container' && 'button-outline')}
          onClick={showContainer}>
          Flex Container
        </button>
        <button
          className={clsx('button secondary padded', displayType !== 'item' && 'button-outline')}
          onClick={showItem}>
          Flex Item
        </button>
      </Flex>
      <div style={{ marginTop: '1em' }}> {displayType === 'item' ? <FlexItemWrapper /> : <span>Container</span>}</div>
    </>
  )
}

export default FlexWrapper
