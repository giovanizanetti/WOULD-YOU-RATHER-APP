import { _capitalize } from '../../utils'
import ProgressBar from './ProgressBar'

const QuestionResult = ({ text, questionVotes, totalVotes }) => {
  const votesResults = `${questionVotes} out of ${totalVotes}`
  const progress = questionVotes < 1 ? 0 : (parseInt(questionVotes) / parseInt(totalVotes)) * 100

  return (
    <div className='question-result container border-gray pad-1'>
      <p>{_capitalize(text) + '?'}</p>
      <ProgressBar progress={progress} />
      <div className='votes'>{votesResults}</div>
    </div>
  )
}

export default QuestionResult
