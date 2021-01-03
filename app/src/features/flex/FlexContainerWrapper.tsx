// Libraries
import React from 'react'
import Flex from '@react-css/flex'

// Components
import Header from '../helpers/Header'
import Container from '../helpers/Container'

export default function FlexContainerWrapper(): React.ReactElement {
  return (
    <Flex column>
      <Container>
        <Header title='Flex Container - Default' />
        <Flex data-testid='flex-container-default'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Container - Inline' />
        <Flex data-testid='flex-container-inline' inline>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Flex Container - Custom Styles' />
        <Flex data-testid='flex-container-custom-styles' style={{ width: 3, height: 4 }}>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
    </Flex>
  )
}
