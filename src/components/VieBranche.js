import React from 'react'
import { CodePane, FlexBox, Heading, Notes, Slide, Stepper, Text } from 'spectacle'

const data = {
  nouvelleBranche: {
    title: 'Nouvelle Branche',
    description: 'Tirer sa nouvelle branche à partir de la bonne',
    imgSrc: '',
    code: 'git checkout -b feature/TICKET-23-inscription-email',
  },
  status: {
    title: 'Status',
    description: 'Vérifier les fichiers modifiés',
    imgSrc: '',
    code: 'git status',
  },
  add: {
    title: 'Add',
    description: 'Ajouter en staging ses modifications par groupement logique',
    imgSrc: '',
    code: 'git add [fichier1] [fichier2]',
  },
  commit: {
    title: 'Commit',
    description: 'Créer un commit des modifications précédemment ajoutées à staging (avec un message clair)',
    imgSrc: '',
    code: 'git commit -m "commentaire normé"',
  },
  rebase: {
    title: 'Rebase (optionnel)',
    description: 'Nettoyer son arbre local avant de partager son code avec les autres',
    imgSrc: '',
    code: 'git rebase -i HEAD~2',
  },
  push: {
    title: 'Push',
    description: 'Envoyer son code sur le remote',
    imgSrc: '',
    code: `git push origin -u HEAD`,
  },
}

const VieBranche = () => {
  return (
    <Slide>
      <Heading fontSize="h3">La vie d'une branche</Heading>
      <FlexBox flexDirection="column">
        <Stepper tagName="div" values={['nouvelleBranche', 'status', 'add', 'commit', 'rebase', 'push']}>
          {(value, step, isActive) =>
            isActive && (
              <>
                <Text>
                  {data[value].title}
                </Text>
                <Text fontSize="1.5rem">{data[value].description}</Text>
                {data[value].imgSrc && (
                  <img src={data[value].imgSrc} alt="git example" />
                )}
                {data[value].code && <CodePane language="bash">{data[value].code}</CodePane>}
              </>
            )
          }
        </Stepper>
      </FlexBox>
      <Notes>
        <div>Versioning (Doc)</div>
        <div>Nomenclature (Doc)</div>
        <div>Commentaire (Doc)</div>
        <br/>
        <div>Process (DOC)</div>
        <div>Pull avant de tirer nouvelle branche</div>
        <div>git status pour afficher les fichiers modifiés</div>
        <div>Ajouter les fichiers ayant un developpement commun</div>
        <div>Commiter avec un commentaire normalisé</div>
        <div>
          Rebaser sa branche si besoin pour avoir un arbre propre
          (responsabilité du dev)
        </div>
        <div>Pusher ses modifs (commit souvent pusher moins souvent)</div>
      </Notes>
    </Slide>
  )
}

export default VieBranche
