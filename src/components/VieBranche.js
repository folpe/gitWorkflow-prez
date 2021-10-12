import React from 'react'
import { FlexBox, Heading, Notes, Slide, Text } from 'spectacle'

const VieBranche = () => {
  return (
    <Slide>
      <Heading fontSize="h3">La vie d'une branche</Heading>
      <FlexBox flexDirection="column">
        <Text>Nomenclature</Text>
        <Text>git checkout -b nouvelleBranche</Text>
        <Text>git status</Text>
        <Text>git add fichier(s)</Text>
        <Text>git commit -m "commentaire"</Text>
        <Text>git add fichier(s)</Text>
        <Text>git commit -m "commentaire"</Text>
        <Text>git rebase -i HEAD~2</Text>
        <Text>git push origin -u HEAD</Text>
      </FlexBox>
      <Notes>
        <div>Nomenclature</div>
        <div>Pull avant de tirer nouvelle branche</div>
        <div>git status pour afficher les fichiers modifiés</div>
        <div>Ajouter les fichiers ayant un developpement commun</div>
        <div>Commiter avec un commentaire normalisé</div>
        <div>Rebaser sa branche si besoin pour avoir un arbre propre (responsabilité du dev)</div>
        <div>Pusher ses modifs (commit souvent pusher moins souvent)</div>
      </Notes>
    </Slide>
  )
}

export default VieBranche
