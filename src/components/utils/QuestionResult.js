import { _capitalize } from '../../utils'
const QuestionResult = ({ text, votes }) => {
  return (
    <div className='question-result container border-gray pad-1'>
      <p>{_capitalize(text) + '?'}</p>
      <div className='progressBar'></div>
      <div className='votes'>{votes}</div>
    </div>
  )
}

export default QuestionResult
