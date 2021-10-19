import React from 'react'
import {
  Appear,
  FlexBox,
  Heading,
  ListItem,
  Notes,
  Slide,
  UnorderedList,
} from 'spectacle'

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
            <ListItem>Des branches de travail stablent</ListItem>
          </Appear>
          <Appear>
            <ListItem>Gestion des releases</ListItem>
          </Appear>
          <Appear>
            <ListItem>Gestion des hotfix</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <div>
          Chacun travaille indépendament
          <ul>
            <li>Gestion des conflits facilité</li>
            <li>Pas de risque d'écraser le travail des autres</li>
          </ul>
        </div>
        <div>Main et develop toujours stable</div>
        <div>
          Possibilité de faire des releases et de gérer des tags (meme code,
          clients différents)
        </div>
        <div>Possibilité ede corriger à chaud</div>
      </Notes>
    </Slide>
  )
}

export default Avantages
