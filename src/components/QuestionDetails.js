import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Card from './Card'

const QuestionDetails = () => {
  const { id } = useParams()
  const { author, optionOne, optionTwo } = useSelector((state) => state.questions[id]) || {}
  const { name, avatarURL } = useSelector((state) => state.users[author]) || {}
  const headerText = `Asked by ${name}`

  return (
    <Card name={name} avatar={avatarURL} headerText={headerText}>
      <div>QuestionDetails</div>
    </Card>
  )
}

export default QuestionDetails
