const QuestionListItem = () => {
  return (
    <div className='container border-gray'>
      <div className='container-header question-card-header border-gray'>Paulinho Asks:</div>
      <div className='question-card-outer flex-row pad-TB-1'>
        <img className='question-card-avatar' src='./assets/avata-m-1.svg' alt='user avatar' />
        <div className='flex-column question-card-inner'>
          <h3>Would You Rather?</h3>
          <span>...blalala...</span>
          <button className='btn btn-transparent'>View poll</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionListItem
