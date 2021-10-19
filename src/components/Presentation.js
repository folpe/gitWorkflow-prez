import React, { useEffect, useState } from 'react'
import { CodePane, FlexBox, Heading, Notes, Slide } from 'spectacle'
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow'
import { intervalToDuration } from 'date-fns'

const Presentation = () => {
  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)
  const today = new Date()
  const birthDate = new Date('1984 06 30 12:35:45')
  const age = intervalToDuration({
    start: birthDate,
    end: today,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const { years, months, days } = age

      setYears(years)
      setMonths(months)
      setDays(days)
    }, 1000)
    return () => clearInterval(interval)
  }, [age])

  return (
    <Slide>
      <Heading fontSize="h2">Qui suis-je ?</Heading>
      <FlexBox>
        <CodePane style={{width: '100%'}} language="javascript" theme={tomorrow}>
          {` const florent = {
    age: {
      years: ${years},
      months: ${months},
      days: ${days},
    },
    webDevSince: 2010,
    lovedStack: ['React', 'Redux', 'Node.js', 'Webpack', 'GraphQL'],
    methodologyKnowledge: ['Scrum', 'Kanban'],
    evangelistOf: ['Atomic Design'],
    company: 'Volpio',
    intervenedFor: [
      'OrangeBank',
      'SACD',
      'Figaro',
    ],
  }`}
        </CodePane>
      </FlexBox>

      <Notes>
        <div>Je m'appelle Florent</div>
        <div>Je suis dev front depuis un peu plus de 10 ans</div>
        <div>
          J'interviens auprès de sociétés en tant que dev senior/lead ou pour
          apporter des conseils pour l'amélioration de la methodologie
        </div>
      </Notes>
    </Slide>
  )
}

export default Presentation
