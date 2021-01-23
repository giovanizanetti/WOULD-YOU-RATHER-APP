import { useState } from 'react'

const Home = () => {
  const answered = 'ansered'
  const unanswered = 'unansered'
  const [active, setAtive] = useState(answered)
  const handleClick = (e) => setAtive(e.target.id)

  return (
    <div className='container border-gray'>
      <nav className='questions-container-nav'>
        <div className={active === answered ? 'questions-active' : undefined} id={answered} onClick={handleClick}>
          Answered
        </div>
        <div className={active === unanswered ? 'questions-active' : undefined} id={unanswered} onClick={handleClick}>
          Unanswered
        </div>
      </nav>
      <div className='container border-gray'>
        <div className='container-header question-card-header border-gray'>Paulinho Asks:</div>
        <div className='question-card-outer flex-row pad-TB-1'>
          <img className='question-card-avatar' src='./assets/avata-m-1.svg' alt='user avatar' />
          <div className='flex-column question-card-inner'>
            <h3>Would You Rather?</h3>
            <span>...blalala...</span>
            <button className='btn btn-transparent' style={{}}>
              View poll
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
