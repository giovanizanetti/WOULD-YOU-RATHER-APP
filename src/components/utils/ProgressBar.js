const ProgressBar = ({ progress }) => {
  return (
    <div className='progressBar'>
      <div style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ProgressBar
