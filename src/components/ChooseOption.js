import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { _capitalize } from '../utils'

const ChooseOption = ({ options: { question1, question2 } }) => {
  console.log(question2)
  // const author = useSelector((state) => state.auth.authedUser)

  const [choice, setChoice] = useState(undefined)
  const isDisabled = !choice
  const dispatch = useDispatch()
  useEffect(() => console.log(choice, isDisabled), [choice, isDisabled])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!choice) return alert('You must choose an answer!')
    dispatch()
    setChoice(false)
  }

  return (
    <div>
      <h2>Would you rather ...</h2>
      <form onSubmit={handleSubmit} className='flex-column optionForm pad-1'>
        <div className='flex-column'>
          <label className='pad-TB-1_2 '>
            <input
              style={{ marginRight: '1rem' }}
              type='radio'
              id='optionOne'
              name='option'
              onChange={(e) => setChoice(e.target.value)}
              value={question1}
            />
            {_capitalize(question1.text + '?')}
          </label>
          <label className='pad-TB-1_2 '>
            <input
              style={{ marginRight: '1rem' }}
              type='radio'
              id='optionTwo'
              name='option'
              onChange={(e) => setChoice(e.target.value)}
              value={question2}
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
