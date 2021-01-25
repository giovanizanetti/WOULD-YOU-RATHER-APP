import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions } from '../../actions/questions'
import QuestionListItem from './QuestionListItem'
import { _isEmpty } from '../../utils'

const QuestionsList = ({ activeList }) => {
  const questions = useSelector((state) => state.questions)
  const { authedUser } = useSelector((state) => state.auth || {})
  const dispatch = useDispatch()

  useEffect(() => {
    if (_isEmpty(questions)) {
      dispatch(getQuestions())
    }
  }, [dispatch, questions])

  // transform  questions object in an array of IDs
  const questionsIDs = Object.keys(questions).map((question) => question)

  const unansweredQuestions =
    questionsIDs &&
    questionsIDs.filter((id) => {
      return (
        questions[id].optionOne.votes.find((voterID) => voterID === authedUser) === undefined &&
        questions[id].optionTwo.votes.find((voterID) => voterID === authedUser) === undefined
      )
    })

  const answeredQuestions =
    questionsIDs &&
    questionsIDs.filter((id) => {
      return (
        questions[id].optionOne.votes.find((voterID) => voterID === authedUser) ||
        questions[id].optionTwo.votes.find((voterID) => voterID === authedUser)
      )
    })

  // Check which list needs the questions and pass the correct questions
  const filteredQuestions = activeList === 'answered' ? answeredQuestions : unansweredQuestions

  return (
    <div style={{ overflowY: 'auto', position: 'relative' }}>
      {filteredQuestions.length ? (
        filteredQuestions.map((question) => <QuestionListItem key={question} question={questions[question]} />)
      ) : (
        <strong className='flex-column noQuestion-msg'>There are no {activeList} questions</strong>
      )}
    </div>
  )
}

export default QuestionsList
