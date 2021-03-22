// Libraries
import React from 'react'
import clsx from 'clsx'
import Flex from '@react-css/flex'

// Components
import FlexItemWrapper from './FlexItemWrapper'
import FlexContainerWrapper from './FlexContainerWrapper'

type FlexDisplayType = 'container' | 'item'

export default function FlexWrapper(): React.ReactElement {
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
      <div style={{ marginTop: '1em' }}> {displayType === 'item' ? <FlexItemWrapper /> : <FlexContainerWrapper />}</div>
    </>
  )
}
