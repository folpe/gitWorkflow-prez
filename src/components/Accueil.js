import React from 'react'
import { FlexBox, Heading, Slide, Text } from 'spectacle'
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
    </Slide>
  )
}

export default Accueil
