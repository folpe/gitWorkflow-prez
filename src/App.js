import { Box, Deck,  FlexBox,  FullScreen,  Progress } from 'spectacle'
import './App.css'
import Accueil from './components/Accueil';
import Avantages from './components/Avantages';
import Bonus from './components/Bonus';
import Branches from './components/Branches';
import Presentation from './components/Presentation'
import Questions from './components/Questions';
import VieBranche from './components/VieBranche';
import Workflow from './components/Workflow';

// import createTheme from "spectacle/lib/themes/default";

// const theme = createTheme({
//   primary: "#ff4081"
// });

const theme = {
  colors: {
    primary: '#ff4081',
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
}

// const transition = {
//   from: {
//     opacity: 0,
//     transform: 'rotate(45deg)'
//   },
//   enter: {
//     opacity: 1,
//     transform: 'rotate(0)'
//   },
//   leave: {
//     opacity: 0,
//     transform: 'rotate(-45deg)'
//   }
// };

const template = () => (
  <FlexBox
    align-items="center"
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
)

function App() {
  return (
    <Deck
      // transition={transition}
      // transitionDuration={500}
      theme={theme}
      template={template}
    >
      <Accueil />
      <Presentation />
      <Avantages />
      <Branches />
      <Workflow />
      <VieBranche />
      <Bonus />
      <Questions />
    </Deck>
  )
}

export default App
