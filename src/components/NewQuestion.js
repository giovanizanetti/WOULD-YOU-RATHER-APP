import Card from './utils/Card'
const newQuestion = () => {
  const headerText = 'Create a new question'
  return (
    <Card isLargeHeader={true} headerText={headerText}>
      <div>
        <h4>Complete de question:</h4>
        <h2>Would you rather ...</h2>
        <form className='flex-column center newQuestion'>
          <input placeholder='Enter option one'></input>
          <div className='divisor-form'>
            <div className='line'></div>
            <div style={{ padding: ' 0 .5rem' }}>or</div>
            <div className='line'></div>
          </div>
          <input placeholder='Enter option two'></input>
        </form>
      </div>
    </Card>
  )
}

export default newQuestion
