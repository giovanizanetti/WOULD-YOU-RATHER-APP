import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { _capitalize } from '../utils'
import { saveUserVote } from '../actions/questions'

const ChooseOption = ({ options }) => {
  const { question1, question2 } = options
  const authedUser = useSelector((state) => state.auth.authedUser)

  const [choice, setChoice] = useState(undefined)
  const isDisabled = !choice
  const dispatch = useDispatch()
  useEffect(() => console.log(choice, isDisabled), [choice, isDisabled])

  const handleChange = (e) => {
    const answer = e.target.value
    const qid = answer === 'optionOne' ? question1.id : question2.id
    setChoice({
      answer,
      authedUser,
      qid,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(choice)
    dispatch(saveUserVote(choice))
    setChoice(undefined)
  }

  return (
    <div>
      <h2>Would you rather ...</h2>
      <form onSubmit={handleSubmit} className='flex-column optionForm pad-1' style={{ fontSize: '1.3rem' }}>
        <div className='flex-column'>
          <label className='pad-TB-1_2 '>
            <input
              style={{ marginRight: '1rem' }}
              type='radio'
              id='optionOne'
              name='option'
              onChange={handleChange}
              value='optionOne'
            />
            {_capitalize(question1.text + '?')}
          </label>
          <label className='pad-TB-1_2 '>
            <input
              style={{ marginRight: '1rem' }}
              type='radio'
              id='optionTwo'
              name='option'
              onChange={handleChange}
              value='optionTwo'
            />
            {_capitalize(question2.text + '?')}
          </label>
        </div>
        <button disabled={isDisabled} className='btn'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ChooseOption
