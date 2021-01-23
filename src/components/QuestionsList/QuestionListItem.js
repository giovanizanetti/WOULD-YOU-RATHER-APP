import { useSelector } from 'react-redux'
import { capitalize } from '../../utils'

const QuestionListItem = ({ question }) => {
  const { author } = question
  const { name, avatarURL } = useSelector((state) => state.users[author]) || {}

  return (
    <>
      <div className='container border-gray'>
        <div className='container-header question-card-header border-gray'>{capitalize(name)} Asks:</div>
        <div className='question-card-outer flex-row pad-TB-1'>
          <img className='question-card-avatar' src={avatarURL} alt='user avatar' />
          <div className='flex-column question-card-inner'>
            <h3>Would You Rather?</h3>
            <span>...blalala...</span>
            <button className='btn btn-transparent'>View poll</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionListItem
