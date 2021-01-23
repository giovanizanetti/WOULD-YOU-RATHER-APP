import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from '../../actions/questions'
import QuestionListItem from './QuestionListItem'
import { _isEmpty } from '../../utils'

const QuestionsList = ({ activeList }) => {
  const questions = useSelector((state) => state.questions)
  const dispatch = useDispatch()

  useEffect(() => {
    // if (_isEmpty(questions)) {
    dispatch(getQuestions())
    // }
  }, [dispatch])

  // }, [dispatch, questions])

  return (
    <div>
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
    </div>
  )
}

export default QuestionsList
