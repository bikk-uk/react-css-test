// Libraries
import React from 'react'
import Flex from '@react-css/flex'
import Grid from '@react-css/grid'

// Components
import Header from '../helpers/Header'
import Container from '../helpers/Container'

export default function GridItemWrapper(): React.ReactElement {
  return (
    <Flex column>
      <Container>
        <Header title='Default' />
        <Grid data-testid='grid-item-default-container'>
          <Grid.Item data-testid='grid-item-default'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <div />' />
        <Grid data-testid='grid-item-as-div-container'>
          <Grid.Item data-testid='grid-item-as-div' as='div'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <nav />' />
        <Grid data-testid='grid-item-as-nav-container'>
          <Grid.Item data-testid='grid-item-as-nav' as='nav'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <main />' />
        <Grid data-testid='grid-item-as-main-container'>
          <Grid.Item data-testid='grid-item-as-main' as='main'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <aside />' />
        <Grid data-testid='grid-item-as-aside-container'>
          <Grid.Item data-testid='grid-item-as-aside' as='aside'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <article />' />
        <Grid data-testid='grid-item-as-article-container'>
          <Grid.Item data-testid='grid-item-as-article' as='article'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <header />' />
        <Grid data-testid='grid-item-as-header-container'>
          <Grid.Item data-testid='grid-item-as-header' as='header'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <section />' />
        <Grid data-testid='grid-item-as-section-container'>
          <Grid.Item data-testid='grid-item-as-section' as='section'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <footer />' />
        <Grid data-testid='grid-item-as-footer-container'>
          <Grid.Item data-testid='grid-item-as-footer' as='footer'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header title='Custom Styles' />
        <Grid data-testid='grid-item-custom-styles-container'>
          <Grid.Item
            data-testid='grid-item-custom-styles'
            style={{
              width: 2,
              height: 4,
            }}></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='columnStart' />
        <Grid data-testid='grid-item-columnStart-container'>
          <Grid.Item data-testid='grid-item-columnStart' columnStart={4}></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='columnEnd' />
        <Grid data-testid='grid-item-columnEnd-container'>
          <Grid.Item data-testid='grid-item-columnEnd' columnEnd={5}></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='column' />
        <Grid data-testid='grid-item-column-container'>
          <Grid.Item data-testid='grid-item-column' column='3 / 4'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='rowStart' />
        <Grid data-testid='grid-item-rowStart-container'>
          <Grid.Item data-testid='grid-item-rowStart' rowStart='span 2'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='rowEnd' />
        <Grid data-testid='grid-item-rowEnd-container'>
          <Grid.Item data-testid='grid-item-rowEnd' rowEnd='row1-end'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='row' />
        <Grid data-testid='grid-item-row-container'>
          <Grid.Item data-testid='grid-item-row' row='4 / 6'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='area' />
        <Grid data-testid='grid-item-area-container'>
          <Grid.Item data-testid='grid-item-area' area='1 / 3 / 2 / 4'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifySelf' />
        <Grid data-testid='grid-item-justifySelf-container'>
          <Grid.Item data-testid='grid-item-justifySelf' justifySelf='center'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifySelf: justifySelfStart' />
        <Grid data-testid='grid-item-justifySelfJustifySelfStart-container'>
          <Grid.Item data-testid='grid-item-justifySelfJustifySelfStart' justifySelfStart></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifySelf: justifySelfEnd' />
        <Grid data-testid='grid-item-justifySelfJustifySelfEnd-container'>
          <Grid.Item data-testid='grid-item-justifySelfJustifySelfEnd' justifySelfEnd></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifySelf: justifySelfCenter' />
        <Grid data-testid='grid-item-justifySelfJustifySelfCenter-container'>
          <Grid.Item data-testid='grid-item-justifySelfJustifySelfCenter' justifySelfCenter></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifySelf: justifySelfStretch' />
        <Grid data-testid='grid-item-justifySelfJustifySelfStretch-container'>
          <Grid.Item data-testid='grid-item-justifySelfJustifySelfStretch' justifySelfStretch></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignSelf' />
        <Grid data-testid='grid-item-alignSelf-container'>
          <Grid.Item data-testid='grid-item-alignSelf' alignSelf='center'></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignSelf: alignSelfStart' />
        <Grid data-testid='grid-item-alignSelfAlignSelfStart-container'>
          <Grid.Item data-testid='grid-item-alignSelfAlignSelfStart' alignSelfStart></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignSelf: alignSelfEnd' />
        <Grid data-testid='grid-item-alignSelfAlignSelfEnd-container'>
          <Grid.Item data-testid='grid-item-alignSelfAlignSelfEnd' alignSelfEnd></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignSelf: alignSelfCenter' />
        <Grid data-testid='grid-item-alignSelfAlignSelfCenter-container'>
          <Grid.Item data-testid='grid-item-alignSelfAlignSelfCenter' alignSelfCenter></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignSelf: alignSelfStretch' />
        <Grid data-testid='grid-item-alignSelfAlignSelfStretch-container'>
          <Grid.Item data-testid='grid-item-alignSelfAlignSelfStretch' alignSelfStretch></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='placeSelf' />
        <Grid data-testid='grid-item-placeSelf-container'>
          <Grid.Item data-testid='grid-item-placeSelf' placeSelf='stretch end'></Grid.Item>
        </Grid>
      </Container>
    </Flex>
  )
}
