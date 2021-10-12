import React from 'react'
import { Appear, FlexBox, Heading, ListItem, Slide, UnorderedList } from 'spectacle'

const Avantages = () => {
  return (
    <Slide>
      <Heading fontSize="h3">Les Avantages</Heading>
      <FlexBox>
        <UnorderedList>
          <Appear>
            <ListItem>Chaque dev travaille indépendament</ListItem>
          </Appear>
          <Appear>
            <ListItem>Pas de code non voulu embarqué</ListItem>
          </Appear>
          <Appear>
            <ListItem>Gestion des releases</ListItem>
          </Appear>
          <Appear>
            <ListItem>Gestion des hotfix</ListItem>
          </Appear>
          <Appear>
            <ListItem>Branche Main toujours stable</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
  )
}

export default Avantages
