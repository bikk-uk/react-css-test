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
        <Header title='Default' />
        <Flex data-testid='flex-container-default'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Custom Styles' />
        <Flex data-testid='flex-container-custom-styles' style={{ width: 3, height: 4 }}>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='inline' />
        <Flex data-testid='flex-container-inline' inline>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexDirection' />
        <Flex data-testid='flex-container-flexDirection' flexDirection='row-reverse'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexDirection: row' />
        <Flex data-testid='flex-container-flexDirectionRow' row>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexDirection: row-reverse' />
        <Flex data-testid='flex-container-flexDirectionRowReverse' rowReverse>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexDirection: column' />
        <Flex data-testid='flex-container-flexDirectionColumn' column>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexDirection: column-reverse' />
        <Flex data-testid='flex-container-flexDirectionColumnReverse' columnReverse>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='flexDirection Warning' />
        <Flex data-testid='flex-container-flexDirection-warning' column columnReverse>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
    </Flex>
  )
}
