import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Card from './Card'

const QuestionDetails = () => {
  const { id } = useParams()
  const { author, optionOne, optionTwo } = useSelector((state) => state.questions[id]) || {}
  const { name, avatarURL } = useSelector((state) => state.users[author]) || {}

  return (
    <Card name={name} avatar={avatarURL}>
      <div>QuestionDetails</div>
    </Card>
  )
}

export default QuestionDetails
