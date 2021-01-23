const Home = () => {
  return (
    <div className='container border-gray'>
      <nav className='questions-container-nav'>
        <div>
          <span>Answered</span>
        </div>
        <div>
          <span>Unanswered</span>
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
