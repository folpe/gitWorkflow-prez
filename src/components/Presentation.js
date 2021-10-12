import React, { useEffect, useState } from 'react'
import { CodePane, Notes, Slide } from 'spectacle'
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow'
import { intervalToDuration } from 'date-fns'

const Presentation = () => {
  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const today = new Date()
  const birthDate = new Date('1984 06 30 12:35:45')
  const age = intervalToDuration({
    start: birthDate,
    end: today,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const { years, months, days, hours, minutes, seconds } = age

      setYears(years)
      setMonths(months)
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)
    return () => clearInterval(interval)
  }, [age])

  return (
    <Slide>
      La slide de presentation
      <CodePane language="javascript" theme={tomorrow} highlightRanges={[1, 3]}>
        {` const florent = {
    age: {
      years: ${years},
      months: ${months},
      days: ${days},
      hours: ${hours},
      minutes: ${minutes},
      seconds: ${seconds}
    },
    webDevSince: 2010,
    lovedStack: ['React', 'Redux', 'Node.js', 'Webpack', 'GraphQl'],
    methodologyKnowledge: ['Scrum', 'Kanban']
    company: 'Volpio',
    intervenedFor: [
      'OrangeBank',
      'SACD',
      'Figaro',
    ],
  }`}
      </CodePane>
      <Notes>Les notes de la slide presentation</Notes>
    </Slide>
  )
}

export default Presentation
