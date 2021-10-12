import React from 'react'
import { FlexBox, Heading, Slide } from 'spectacle'
import workflowSchema from '../assets/images/gitflowschema.png'

const Workflow = () => {
  return (
    <Slide>
      <Heading fontSize="h3">Workflow</Heading>
      <FlexBox>
        <FlexBox width="65%">
          <img src={workflowSchema} alt="git workflow schema" />
        </FlexBox>
      </FlexBox>
    </Slide>
  )
}

export default Workflow
