import React from 'react';
import { FlexBox, Heading, Link, Slide, Text } from 'spectacle';

const Bonus = () => {
  return (
    <Slide>
      <Heading fontSize="h3">Bonus</Heading>
      <FlexBox flexDirection="column">
        <Text><Link href="https://typicode.github.io/husky/#/" target="_blank">Husky</Link> - Git hooks</Text>
        <Text><Link href="https://www.gitkraken.com/git-client" target="_blank">GitKraken</Link> - GUI for git</Text>
      </FlexBox>
    </Slide>
  );
};

export default Bonus;
