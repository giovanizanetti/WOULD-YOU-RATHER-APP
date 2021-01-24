import { useState } from 'react'
import QuestionsList from './QuestionsList'

const Home = () => {
  const answered = 'answered'
  const unAnswered = 'unanswered'
  const [active, setAtive] = useState(unAnswered)
  const handleClick = (e) => setAtive(e.target.id)

  return (
    <div
      className='container border-gray questions-container'
      style={{ overflow: 'hidden', position: 'fixed', maxHeight: '80vh', minHeight: '40vh' }}
    >
      <nav className='questions-container-nav'>
        <div className={active === answered ? 'questions-active' : undefined} id={answered} onClick={handleClick}>
          Answered
        </div>
        <div className={active === unAnswered ? 'questions-active' : undefined} id={unAnswered} onClick={handleClick}>
          Unanswered
        </div>
      </nav>
      <QuestionsList activeList={active} />
    </div>
  )
}
export default Home
