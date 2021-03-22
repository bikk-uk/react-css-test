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
      <Container>
        <Header code title='flexWrap' />
        <Flex data-testid='flex-container-flexWrap' flexWrap='nowrap'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexWrap: wrap' />
        <Flex data-testid='flex-container-flexWrapWrap' wrap>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexWrap: nowrap' />
        <Flex data-testid='flex-container-flexWrapNoWrap' noWrap>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexWrap: wrapReverse' />
        <Flex data-testid='flex-container-flexWrapWrapReverse' wrapReverse>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='justifyContent' />
        <Flex data-testid='flex-container-justifyContent' justifyContent='flex-start'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyStart' />
        <Flex data-testid='flex-container-justifyContentJustifyStart' justifyStart>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyEnd' />
        <Flex data-testid='flex-container-justifyContentJustifyEnd' justifyEnd>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyCenter' />
        <Flex data-testid='flex-container-justifyContentJustifyCenter' justifyCenter>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='justifyContent: justifySpaceBetween' />
        <Flex data-testid='flex-container-justifyContentJustifySpaceBetween' justifySpaceBetween>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='justifyContent: justifySpaceAround' />
        <Flex data-testid='flex-container-justifyContentJustifySpaceAround' justifySpaceAround>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
    </Flex>
  )
}
