// Libraries
import React from 'react'
import Flex from '@react-css/flex'

// Components
import Header from '../helpers/Header'

const Container = ({ id, children }: { id: string; children: React.ReactElement | React.ReactElement[] }) => (
  <div
    id={id}
    style={{
      height: '5em',
      width: '100%',
      marginBottom: '1em',
      backgroundColor: 'lightgray',
      borderRadius: '2px',
    }}>
    {children}
  </div>
)

export function FlexItemWrapper(): React.ReactElement {
  return (
    <Flex column>
      <Container id='flex-item-default-container'>
        <Header title='Flex Item Default' />
        <Flex id='flex-item-default-container'>
          <Flex.Item id='flex-item-default'></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-order-container'>
        <Header title='Flex Item - order' />
        <Flex id='flex-item-order-container'>
          <Flex.Item id='flex-item-order' order={5}></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-grow-container'>
        <Header title='Flex Item - grow' />
        <Flex id='flex-item-grow-container'>
          <Flex.Item id='flex-item-grow' grow={2}></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-shrink-container'>
        <Header title='Flex Item - shrink' />
        <Flex id='flex-item-shrink-container'>
          <Flex.Item id='flex-item-shrink' shrink={3}></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-basis-container'>
        <Header title='Flex Item - basis' />
        <Flex id='flex-item-basis-container'>
          <Flex.Item id='flex-item-basis' basis='revert'></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-flex-container'>
        <Header title='Flex Item - flex' />
        <Flex id='flex-item-flex-container'>
          <Flex.Item id='flex-item-flex' flex='none'></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-alignSelf-container'>
        <Header title='Flex Item - alignSelf' />
        <Flex id='flex-item-alignSelf-container'>
          <Flex.Item id='flex-item-alignSelf' alignSelf='flex-start'></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-alignSelfAuto-container'>
        <Header title='Flex Item - alignSelfAuto' />
        <Flex id='flex-item-alignSelfAuto-container'>
          <Flex.Item id='flex-item-alignSelfAuto' alignSelfAuto></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-alignSelfStart-container'>
        <Header title='Flex Item - alignSelfStart' />
        <Flex id='flex-item-alignSelfStart-container'>
          <Flex.Item id='flex-item-alignSelfStart' alignSelfStart></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-alignSelfEnd-container'>
        <Header title='Flex Item - alignSelfEnd' />
        <Flex id='flex-item-alignSelfEnd-container'>
          <Flex.Item id='flex-item-alignSelfEnd' alignSelfEnd></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-alignSelfCenter-container'>
        <Header title='Flex Item - alignSelfCenter' />
        <Flex id='flex-item-alignSelfCenter-container'>
          <Flex.Item id='flex-item-alignSelfCenter' alignSelfCenter></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-alignSelfBaseline-container'>
        <Header title='Flex Item - alignSelfBaseline' />
        <Flex id='flex-item-alignSelfBaseline-container'>
          <Flex.Item id='flex-item-alignSelfBaseline' alignSelfBaseline></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-alignSelfStretch-container'>
        <Header title='Flex Item - alignSelfStretch' />
        <Flex id='flex-item-alignSelfStretch-container'>
          <Flex.Item id='flex-item-alignSelfStretch' alignSelfStretch></Flex.Item>
        </Flex>
      </Container>
      <Container id='flex-item-alignSelf-warning-container'>
        <Header title='Flex Item - alignSelf Warning' />
        <Flex id='flex-item-alignSelf-warning-container'>
          <Flex.Item id='flex-item-alignSelf-warning' alignSelfStretch alignSelfAuto></Flex.Item>
        </Flex>
      </Container>
    </Flex>
  )
}

export default FlexItemWrapper
