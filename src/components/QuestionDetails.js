import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from './utils/Card'
import QuestionResult from './utils/QuestionResult'

const QuestionDetails = () => {
  const { id } = useParams()
  const { author, optionOne, optionTwo } = useSelector((state) => state.questions[id]) || {}

  const { authedUser } = useSelector((state) => state.auth || {})

  const isUserVote = (option) => (option && option.votes.find((id) => id === authedUser) ? true : false)

  const votesOption1 = optionOne.votes.length
  const votesOption2 = optionTwo.votes.length
  const isOption1Winner = votesOption1 > votesOption2 ? true : false

  const question1 = {
    votes: votesOption1,
    text: optionOne.text,
    isWinner: isOption1Winner,
    isEven: votesOption2 === votesOption1,
  }

  const question2 = {
    votes: votesOption2,
    text: optionTwo.text,
    isWinner: !isOption1Winner,
    isEven: votesOption2 === votesOption1,
  }

  const totalVotes = votesOption1 + votesOption2
  const { name, avatarURL } = useSelector((state) => state.users[author]) || {}
  const headerText = `Asked by ${name}`

  return (
    <Card name={name} avatar={avatarURL} headerText={headerText} isLargeHeader={true}>
      {isUserVote()}
      <div className='question-results-container'>
        <h3>Results:</h3>
        <QuestionResult question={question1} totalVotes={totalVotes} isUserVote={isUserVote(optionOne)} />
        <QuestionResult question={question2} totalVotes={totalVotes} isUserVote={isUserVote(optionTwo)} />
      </div>
    </Card>
  )
}

export default QuestionDetails
