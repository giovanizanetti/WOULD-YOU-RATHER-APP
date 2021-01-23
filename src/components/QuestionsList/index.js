import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from '../../actions/questions'
import QuestionListItem from './QuestionListItem'
import { _isEmpty } from '../../utils'

const QuestionsList = ({ activeList }) => {
  const questions = useSelector((state) => state.questions)
  const dispatch = useDispatch()
  const questionsIDs = Object.keys(questions).map((question) => question)

  useEffect(() => {
    if (_isEmpty(questions)) {
      dispatch(getQuestions())
    }
  }, [dispatch, questions])

  return (
    <div style={{ overflowY: 'auto' }}>
      {questionsIDs && questionsIDs.map((id) => <QuestionListItem questionId={id} />)}
    </div>
  )
}

export default QuestionsList
