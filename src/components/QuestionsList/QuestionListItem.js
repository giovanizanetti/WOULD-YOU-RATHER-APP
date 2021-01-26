import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { _capitalize, _truncate } from '../../utils'
import Card from '../utils/Card'

const QuestionListItem = ({ question }) => {
  const {
    author,
    id,
    optionOne: { text },
  } = question

  const { name, avatarURL } = useSelector((state) => state.users[author]) || {}
  const headerText = `${name} Asks:`
  const history = useHistory()

  const handleClick = (e) => {
    setTimeout(() => e.target.blur(), 100)
    history.push(`/questions/${id}`)
  }

  return (
    <Card name={_capitalize(name)} avatar={avatarURL} headerText={headerText}>
      <div>
        <h3>Would You Rather?</h3>
        <span>{_truncate(_capitalize(text), 10)}</span>
        <button className='btn btn-transparent' onClick={handleClick}>
          View Poll
        </button>
      </div>
    </Card>
  )
}

export default QuestionListItem
