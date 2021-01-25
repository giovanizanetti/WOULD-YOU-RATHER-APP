import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { _capitalize } from '../utils'

import Card from './utils/Card'
import QuestionResult from './utils/QuestionResult'

const QuestionDetails = () => {
  const { id } = useParams()
  const { author, optionOne, optionTwo } = useSelector((state) => state.questions[id]) || {}
  const votesOption1 = optionOne.votes.length
  const votesOption2 = optionTwo.votes.length
  const totalVotes = votesOption1 + votesOption2
  const votesResults1 = `${votesOption1} out of ${totalVotes}`
  const votesResults2 = `${votesOption2} out of ${totalVotes}`
  const { name, avatarURL } = useSelector((state) => state.users[author]) || {}
  const headerText = `Asked by ${name}`

  return (
    <Card name={name} avatar={avatarURL} headerText={headerText}>
      <div className='question-results-container'>
        <h3>Results:</h3>
        <QuestionResult text={optionOne.text} votes={votesResults1} />
        <QuestionResult text={optionTwo.text} votes={votesResults2} />
      </div>
    </Card>
  )
}

export default QuestionDetails
