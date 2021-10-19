import React from 'react'
import { FlexBox, Heading, Notes, Slide, Text } from 'spectacle'
import gitLogo from '../assets/images/gitLogoWhite.png'

const Accueil = () => {
  return (
    <Slide>
      <Heading fontSize="h1">Git Workflow</Heading>
      <FlexBox mt={'2rem'}>
        <FlexBox width="50%">
          <img src={gitLogo} alt="git logo" />
        </FlexBox>
      </FlexBox>
      <FlexBox mt={'4rem'}>
        <Text>Un workFlow pour tous</Text>
      </FlexBox>
      <Notes>
        L'intérêt de git c'est d'avoir un historique clair et propre d'un projet
        niveau code
        <ul>
          <li>Base de code efficace</li>
          <li>Eviter de reproduire les memes erreurs</li>
        </ul>
      </Notes>
    </Slide>
  )
}

export default Accueil
