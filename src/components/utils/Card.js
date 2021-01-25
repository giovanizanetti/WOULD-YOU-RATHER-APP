// import Avatar from '../assets/avatar-f-1.svg'
const Card = ({ name, avatar, children, headerText, isLargeHeader }) => {
  const largeHeaderStyle = { padding: '1rem', fontSize: '1.2rem' }

  return (
    <div className='container border-gray'>
      <div className='container-header question-card-header border-gray' style={isLargeHeader && largeHeaderStyle}>
        {headerText}
      </div>
      <div className='question-card-outer flex-row pad-TB-1'>
        {avatar && (
          <>
            <img className='question-card-avatar' src={avatar} alt={`${name}'s avatar'`} />
            <div style={{ borderLeft: 'solid 3px #cac7c7' }}></div>
          </>
        )}
        <div className='flex-column question-card-inner'>{children}</div>
      </div>
    </div>
  )
}

export default Card
