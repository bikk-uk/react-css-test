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
        <Header title='Flex Container Default' />
        <Flex data-testid='flex-container-default'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
    </Flex>
  )
}
