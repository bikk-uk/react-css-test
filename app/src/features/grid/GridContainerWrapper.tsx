// Libraries
import React from 'react'
import Flex from '@react-css/flex'
import Grid from '@react-css/grid'

// Components
import Header from '../helpers/Header'
import Container from '../helpers/Container'

export default function GridContainerWrapper(): React.ReactElement {
  return (
    <Flex column>
      <Container>
        <Header title='Default' />
        <Grid data-testid='grid-container-default'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header title='Custom Styles' />
        <Grid data-testid='grid-container-custom-styles' style={{ width: 5, height: 6 }}>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='inline' />
        <Grid data-testid='grid-container-inline' inline>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <div />' />
        <Grid data-testid='grid-container-as-div' as='div'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <nav />' />
        <Grid data-testid='grid-container-as-nav' as='nav'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <main />' />
        <Grid data-testid='grid-container-as-main' as='main'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <aside />' />
        <Grid data-testid='grid-container-as-aside' as='aside'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <article />' />
        <Grid data-testid='grid-container-as-article' as='article'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <header />' />
        <Grid data-testid='grid-container-as-header' as='header'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <section />' />
        <Grid data-testid='grid-container-as-section' as='section'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='as <footer />' />
        <Grid data-testid='grid-container-as-footer' as='footer'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='rows' />
        <Grid data-testid='grid-container-rows' rows='2px 5px 4px'>
          <Grid.Item></Grid.Item>
          <Grid.Item></Grid.Item>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='columns' />
        <Grid data-testid='grid-container-columns' columns='1px 2px 3px'>
          <Grid.Item></Grid.Item>
          <Grid.Item></Grid.Item>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='gap' />
        <Grid data-testid='grid-container-gap' gap='5px'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='rowGap' />
        <Grid data-testid='grid-container-rowGap' rowGap='10px'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='columnGap' />
        <Grid data-testid='grid-container-columnGap' columnGap='2px'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyItems' />
        <Grid data-testid='grid-container-justifyItems' justifyItems='end'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyItems: justifyItemsStart' />
        <Grid data-testid='grid-container-justifyItemsJustifyItemsStart' justifyItemsStart>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyItems: justifyItemsEnd' />
        <Grid data-testid='grid-container-justifyItemsJustifyItemsEnd' justifyItemsEnd>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyItems: justifyItemsCenter' />
        <Grid data-testid='grid-container-justifyItemsJustifyItemsCenter' justifyItemsCenter>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyItems: justifyItemsStretch' />
        <Grid data-testid='grid-container-justifyItemsJustifyItemsStretch' justifyItemsStretch>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignItems' />
        <Grid data-testid='grid-container-alignItems' alignItems='end'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsStart' />
        <Grid data-testid='grid-container-alignItemsAlignItemsStart' alignItemsStart>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsEnd' />
        <Grid data-testid='grid-container-alignItemsAlignItemsEnd' alignItemsEnd>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsCenter' />
        <Grid data-testid='grid-container-alignItemsAlignItemsCenter' alignItemsCenter>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='alignItems: alignItemsStretch' />
        <Grid data-testid='grid-container-alignItemsAlignItemsStretch' alignItemsStretch>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyContent' />
        <Grid data-testid='grid-container-justifyContent' justifyContent='space-between'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyContentStart' />
        <Grid data-testid='grid-container-justifyContentJustifyContentStart' justifyContentStart>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyContentEnd' />
        <Grid data-testid='grid-container-justifyContentJustifyContentEnd' justifyContentEnd>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyContentCenter' />
        <Grid data-testid='grid-container-justifyContentJustifyContentCenter' justifyContentCenter>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyContentStretch' />
        <Grid data-testid='grid-container-justifyContentJustifyContentStretch' justifyContentStretch>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyContentSpaceAround' />
        <Grid data-testid='grid-container-justifyContentJustifyContentSpaceAround' justifyContentSpaceAround>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyContentSpaceBetween' />
        <Grid data-testid='grid-container-justifyContentJustifyContentSpaceBetween' justifyContentSpaceBetween>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='justifyContent: justifyContentSpaceEvenly' />
        <Grid data-testid='grid-container-justifyContentJustifyContentSpaceEvenly' justifyContentSpaceEvenly>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='autoFlow' />
        <Grid data-testid='grid-container-autoFlow' autoFlow='row dense'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='autoFlow: autoFlowRow' />
        <Grid data-testid='grid-container-autoFlowAutoFlowRow' autoFlowRow>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='autoFlow: autoFlowColumn' />
        <Grid data-testid='grid-container-autoFlowAutoFlowColumn' autoFlowColumn>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='autoFlow: autoFlowDense' />
        <Grid data-testid='grid-container-autoFlowAutoFlowDense' autoFlowDense>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='autoRows' />
        <Grid data-testid='grid-container-autoRows' autoRows='5px'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='autoColumns' />
        <Grid data-testid='grid-container-autoColumns' autoColumns='min-content'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='template' />
        <Grid data-testid='grid-container-template' template='10px 10px / 5px 5px'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='placeItems' />
        <Grid data-testid='grid-container-placeItems' placeItems='center start'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
      <Container>
        <Header code title='placeContent' />
        <Grid data-testid='grid-container-placeContent' placeContent='end center'>
          <Grid.Item></Grid.Item>
        </Grid>
      </Container>
    </Flex>
  )
}
