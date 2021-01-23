const Home = () => {
  return (
    <div className='container'>
      <nav>
        <span>Answered</span>
        <span>Unanswered</span>
      </nav>
      <div className='container'>
        <div className='container-header question-card-header'>Paulinho Asks:</div>
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
