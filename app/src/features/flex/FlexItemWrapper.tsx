// Libraries
import React from 'react'
import Flex from '@react-css/flex'

// Components
import Header from '../helpers/Header'
import Container from '../helpers/Container'

export default function FlexItemWrapper(): React.ReactElement {
  return (
    <Flex column>
      <Container>
        <Header title='Default' />
        <Flex data-testid='flex-item-default-container'>
          <Flex.Item data-testid='flex-item-default'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header title='Custom Styles' />
        <Flex data-testid='flex-item-custom-styles-container'>
          <Flex.Item
            data-testid='flex-item-custom-styles'
            style={{
              width: 1,
              height: 2,
            }}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <div />' />
        <Flex data-testid='flex-item-as-div-container'>
          <Flex.Item data-testid='flex-item-as-div' as='div'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <nav />' />
        <Flex data-testid='flex-item-as-nav-container'>
          <Flex.Item data-testid='flex-item-as-nav' as='nav'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <main />' />
        <Flex data-testid='flex-item-as-main-container'>
          <Flex.Item data-testid='flex-item-as-main' as='main'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <aside />' />
        <Flex data-testid='flex-item-as-aside-container'>
          <Flex.Item data-testid='flex-item-as-aside' as='aside'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <article />' />
        <Flex data-testid='flex-item-as-article-container'>
          <Flex.Item data-testid='flex-item-as-article' as='article'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <header />' />
        <Flex data-testid='flex-item-as-header-container'>
          <Flex.Item data-testid='flex-item-as-header' as='header'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <section />' />
        <Flex data-testid='flex-item-as-section-container'>
          <Flex.Item data-testid='flex-item-as-section' as='section'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='as <footer />' />
        <Flex data-testid='flex-item-as-footer-container'>
          <Flex.Item data-testid='flex-item-as-footer' as='footer'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='order' />
        <Flex data-testid='flex-item-order-container'>
          <Flex.Item data-testid='flex-item-order' order={5}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='grow' />
        <Flex data-testid='flex-item-grow-container'>
          <Flex.Item data-testid='flex-item-grow' grow={2}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='shrink' />
        <Flex data-testid='flex-item-shrink-container'>
          <Flex.Item data-testid='flex-item-shrink' shrink={3}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='basis' />
        <Flex data-testid='flex-item-basis-container'>
          <Flex.Item data-testid='flex-item-basis' basis={0}></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='flex' />
        <Flex data-testid='flex-item-flex-container'>
          <Flex.Item data-testid='flex-item-flex' flex='1 2 5px'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignSelf' />
        <Flex data-testid='flex-item-alignSelf-container'>
          <Flex.Item data-testid='flex-item-alignSelf' alignSelf='flex-start'></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignSelf: auto' />
        <Flex data-testid='flex-item-alignSelfAuto-container'>
          <Flex.Item data-testid='flex-item-alignSelfAuto' alignSelfAuto></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignSelf: start' />
        <Flex data-testid='flex-item-alignSelfStart-container'>
          <Flex.Item data-testid='flex-item-alignSelfStart' alignSelfStart></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignSelf: end' />
        <Flex data-testid='flex-item-alignSelfEnd-container'>
          <Flex.Item data-testid='flex-item-alignSelfEnd' alignSelfEnd></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignSelf: center' />
        <Flex data-testid='flex-item-alignSelfCenter-container'>
          <Flex.Item data-testid='flex-item-alignSelfCenter' alignSelfCenter></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignSelf: baseline' />
        <Flex data-testid='flex-item-alignSelfBaseline-container'>
          <Flex.Item data-testid='flex-item-alignSelfBaseline' alignSelfBaseline></Flex.Item>
        </Flex>
      </Container>
      <Container>
        <Header code title='alignSelf: stretch' />
        <Flex data-testid='flex-item-alignSelfStretch-container'>
          <Flex.Item data-testid='flex-item-alignSelfStretch' alignSelfStretch></Flex.Item>
        </Flex>
      </Container>
    </Flex>
  )
}
