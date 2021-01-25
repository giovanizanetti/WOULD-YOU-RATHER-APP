import { _capitalize } from '../../utils'
import ProgressBar from './ProgressBar'

const QuestionResult = ({ question, totalVotes }) => {
  const { votes, text, isWinner, isEven } = question || {}
  console.log(isEven)

  const style = () => {
    const green = { background: 'rgba(147 217 77 / 64%)', borderColor: 'rgb(80 115 7 / 84%) !important' }
    const lightGray = { background: '#f2f2f2' }
    const yellow = { background: 'rgb(255 255 0 / 40%)' }
    if (isEven) return yellow
    if (isWinner) return green
    else return lightGray
  }

  const votesResults = `${votes} out of ${totalVotes}`
  const progress = votes < 1 ? 0 : (parseInt(votes) / parseInt(totalVotes)) * 100

  return (
    <div className='question-result container border-gray pad-1' style={style()}>
      <p>{_capitalize(text) + '?'}</p>
      <ProgressBar progress={progress} />
      <div className='votes'>{votesResults}</div>
    </div>
  )
}

export default QuestionResult
