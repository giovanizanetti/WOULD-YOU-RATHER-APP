import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveQuestion } from '../actions/questions'

import Card from './utils/Card'
const NewQuestion = () => {
  const author = useSelector((state) => state.auth.authedUser)

  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')
  const dispatch = useDispatch()

  const headerText = 'Create a new question'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!optionOneText.length || !optionTwoText.length) return alert('You must enter a question!')
    console.log('submited', { optionOneText, optionTwoText })
    dispatch(saveQuestion({ author, optionOneText, optionTwoText }))
    setOptionTwoText('')
    setOptionOneText('')
  }

  return (
    <Card isLargeHeader={true} headerText={headerText}>
      <div>
        <h4>Complete de question:</h4>
        <h2>Would you rather ...</h2>
        <form onSubmit={handleSubmit} className='flex-column center newQuestion'>
          <input
            id='optionOneText'
            placeholder='Enter option one'
            onChange={(e) => setOptionOneText(e.target.value)}
            value={optionOneText}
          ></input>
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
          ></input>
          <button className='btn'>Submit</button>
        </form>
      </div>
    </Card>
  )
}

export default NewQuestion
