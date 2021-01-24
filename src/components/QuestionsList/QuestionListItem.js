import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { _capitalize, _truncate } from '../../utils'
import Card from '../Card'

const QuestionListItem = ({ question }) => {
  const {
    author,
    id,
    optionOne: { text },
  } = question
  const { name, avatarURL } = useSelector((state) => state.users[author]) || {}
  const history = useHistory()
  const handleClick = (e) => {
    setTimeout(() => e.target.blur(), 100)
    history.push(`/questions/${id}`)
  }
  return (
    // <>
    //   <div className='container border-gray'>
    //     <div className='container-header question-card-header border-gray'>{_capitalize(name)} Asks:</div>
    //     <div className='question-card-outer flex-row pad-TB-1'>
    //       <img className='question-card-avatar' src={avatarURL} alt='user avatar' />
    //       <div className='flex-column question-card-inner'>
    //         <h3>Would You Rather?</h3>
    //         <span>{_truncate(_capitalize(text), 10)}</span>
    //         <button className='btn btn-transparent'>View poll</button>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <Card name={_capitalize(name)} avatar={avatarURL}>
      <h3>Would You Rather?</h3>
      <span>{_truncate(_capitalize(text), 10)}</span>

      <button className='btn btn-transparent' onClick={handleClick}>
        View Poll
      </button>
    </Card>
  )
}

export default QuestionListItem
