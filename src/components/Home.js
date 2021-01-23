import { useState } from 'react'
import QuestionsList from './QuestionsList'

const Home = () => {
  const answered = 'ansered'
  const unanswered = 'unansered'
  const [active, setAtive] = useState(answered)
  const handleClick = (e) => setAtive(e.target.id)

  return (
    <div className='container border-gray' style={{ overflow: 'hidden', position: 'fixed', maxHeight: '80vh' }}>
      <nav className='questions-container-nav'>
        <div className={active === answered ? 'questions-active' : undefined} id={answered} onClick={handleClick}>
          Answered
        </div>
        <div className={active === unanswered ? 'questions-active' : undefined} id={unanswered} onClick={handleClick}>
          Unanswered
        </div>
      </nav>
      <QuestionsList activeList={active} />
    </div>
  )
}
export default Home
