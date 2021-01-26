import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveQuestion } from '../actions/questions'

import Card from './utils/Card'
const AddQuestion = () => {
  const author = useSelector((state) => state.auth.authedUser)
  const history = useHistory()

  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')
  const isDisabled = !optionTwoText.length || !optionOneText.length
  const dispatch = useDispatch()

  const headerText = 'Create a new question'

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveQuestion({ author, optionOneText, optionTwoText }))
    setOptionTwoText('')
    setOptionOneText('')
    setTimeout(() => history.push('/'), 500)
  }

  return (
    <Card isLargeHeader={true} headerText={headerText}>
      <div>
        <h4>Complete de question:</h4>
        <h2>Would you rather ...</h2>
        <form onSubmit={handleSubmit} className='flex-column center newQuestion'>
          <input
            autoFocus
            id='optionOneText'
            placeholder='Enter option one'
            onChange={(e) => setOptionOneText(e.target.value)}
            value={optionOneText}
          />
          <div className='divisor-form'>
            <div className='line'></div>
            <div style={{ padding: ' 0 .5rem' }}>or</div>
            <div className='line'></div>
          </div>
          <input
            id='optionTwoText'
            placeholder='Enter option two'
            onChange={(e) => setOptionTwoText(e.target.value)}
            value={optionTwoText}
          />
          <button disabled={isDisabled} className='btn'>
            Submit
          </button>
        </form>
      </div>
    </Card>
  )
}

export default AddQuestion
