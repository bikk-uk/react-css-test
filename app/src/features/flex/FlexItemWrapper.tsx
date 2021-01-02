// Libraries
import React from 'react'
import Flex from '@react-css/flex'

// Components
import Header from '../helpers/Header'

const Container = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => (
  <div
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
      <Container>
        <Header title='Flex Item Default' />
        <Flex data-testid='flex-item-default-container'>
          <Flex.Item data-testid='flex-item-default'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - order' />
        <Flex data-testid='flex-item-order-container'>
          <Flex.Item data-testid='flex-item-order' order={5}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - grow' />
        <Flex data-testid='flex-item-grow-container'>
          <Flex.Item data-testid='flex-item-grow' grow={2}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - shrink' />
        <Flex data-testid='flex-item-shrink-container'>
          <Flex.Item data-testid='flex-item-shrink' shrink={3}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - basis' />
        <Flex data-testid='flex-item-basis-container'>
          <Flex.Item data-testid='flex-item-basis' basis={0}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - flex' />
        <Flex data-testid='flex-item-flex-container'>
          <Flex.Item data-testid='flex-item-flex' flex='1 2 5px'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - alignSelf' />
        <Flex data-testid='flex-item-alignSelf-container'>
          <Flex.Item data-testid='flex-item-alignSelf' alignSelf='flex-start'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - alignSelfAuto' />
        <Flex data-testid='flex-item-alignSelfAuto-container'>
          <Flex.Item data-testid='flex-item-alignSelfAuto' alignSelfAuto></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - alignSelfStart' />
        <Flex data-testid='flex-item-alignSelfStart-container'>
          <Flex.Item data-testid='flex-item-alignSelfStart' alignSelfStart></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - alignSelfEnd' />
        <Flex data-testid='flex-item-alignSelfEnd-container'>
          <Flex.Item data-testid='flex-item-alignSelfEnd' alignSelfEnd></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - alignSelfCenter' />
        <Flex data-testid='flex-item-alignSelfCenter-container'>
          <Flex.Item data-testid='flex-item-alignSelfCenter' alignSelfCenter></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - alignSelfBaseline' />
        <Flex data-testid='flex-item-alignSelfBaseline-container'>
          <Flex.Item data-testid='flex-item-alignSelfBaseline' alignSelfBaseline></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - alignSelfStretch' />
        <Flex data-testid='flex-item-alignSelfStretch-container'>
          <Flex.Item data-testid='flex-item-alignSelfStretch' alignSelfStretch></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Item - alignSelf Warning' />
        <Flex data-testid='flex-item-alignSelf-warning-container'>
          <Flex.Item data-testid='flex-item-alignSelf-warning' alignSelfStretch alignSelfAuto></Flex.Item>
        </Flex>
      </Container>
    </Flex>
  )
}

export default FlexItemWrapper
