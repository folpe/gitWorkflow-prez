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

const Branches = () => {
  return (
    <Slide>
      <Heading fontSize="h3">Les différentes branches</Heading>
      <FlexBox>
        <UnorderedList>
          <Appear>
            <ListItem>Main</ListItem>
          </Appear>
          <Appear>
            <ListItem>Develop</ListItem>
          </Appear>
          <Appear>
            <ListItem>Feature</ListItem>
          </Appear>
          <Appear>
            <ListItem>Release</ListItem>
          </Appear>
          <Appear>
            <ListItem>Hotfix</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <div>Le découpage des branches</div>
        <div>Main => Propre et stable, prête pour deploiement</div>
        <div>Develop => branche comportant tous les développement</div>
        <div>Feature => Développement d'une nouvelle fonctionnalité</div>
        <div>
          Release => Ensemble de feature pour deploiement d'une nouvelle version
        </div>
        <div>Hotfix => Correction d'un bug à chaud</div>
      </Notes>
    </Slide>
  )
}

export default Branches
