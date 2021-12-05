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
        <Header code title='as <div />' />
        <Flex data-testid='flex-container-as-div' as='div'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <nav />' />
        <Flex data-testid='flex-container-as-nav' as='nav'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <main />' />
        <Flex data-testid='flex-container-as-main' as='main'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <aside />' />
        <Flex data-testid='flex-container-as-aside' as='aside'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <article />' />
        <Flex data-testid='flex-container-as-article' as='article'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <header />' />
        <Flex data-testid='flex-container-as-header' as='header'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <section />' />
        <Flex data-testid='flex-container-as-section' as='section'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <footer />' />
        <Flex data-testid='flex-container-as-footer' as='footer'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='gap' />
        <Flex data-testid='flex-container-gap' gap='10px'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='rowGap' />
        <Flex data-testid='flex-container-rowGap' rowGap='50px'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='columnGap' />
        <Flex data-testid='flex-container-columnGap' columnGap='100px'>
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
      <Container>
        <Header code title='alignItems' />
        <Flex data-testid='flex-container-alignItems' alignItems='flex-end'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsStart' />
        <Flex data-testid='flex-container-alignItemsAlignItemsStart' alignItemsStart>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsEnd' />
        <Flex data-testid='flex-container-alignItemsAlignItemsEnd' alignItemsEnd>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsCenter' />
        <Flex data-testid='flex-container-alignItemsAlignItemsCenter' alignItemsCenter>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsBaseline' />
        <Flex data-testid='flex-container-alignItemsAlignItemsBaseline' alignItemsBaseline>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsStretch' />
        <Flex data-testid='flex-container-alignItemsAlignItemsStretch' alignItemsStretch>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignContent' />
        <Flex data-testid='flex-container-alignContent' alignContent='space-around'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignContent: alignContentStart' />
        <Flex data-testid='flex-container-alignContentAlignContentStart' alignContentStart>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignContent: alignContentEnd' />
        <Flex data-testid='flex-container-alignContentAlignContentEnd' alignContentEnd>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignContent: alignContentCenter' />
        <Flex data-testid='flex-container-alignContentAlignContentCenter' alignContentCenter>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignContent: alignContentSpaceBetween' />
        <Flex data-testid='flex-container-alignContentAlignContentSpaceBetween' alignContentSpaceBetween>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignContent: alignContentSpaceAround' />
        <Flex data-testid='flex-container-alignContentAlignContentSpaceAround' alignContentSpaceAround>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignContent: alignContentStretch' />
        <Flex data-testid='flex-container-alignContentAlignContentStretch' alignContentStretch>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flexFlow' />
        <Flex data-testid='flex-container-flexFlow' flow='row nowrap'>
          <Flex.Item></Flex.Item>
        </Flex>
      </Container>
    </Flex>
  )
}
