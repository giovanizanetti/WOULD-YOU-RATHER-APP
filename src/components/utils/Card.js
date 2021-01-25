// import Avatar from '../assets/avatar-f-1.svg'
const Card = ({ name, avatar, children, headerText }) => {
  return (
    <div className='container border-gray'>
      <div className='container-header question-card-header border-gray'>{headerText}</div>
      <div className='question-card-outer flex-row pad-TB-1'>
        <img className='question-card-avatar' src={avatar} alt={`${name}'s avatar'`} />
        <div className='flex-column question-card-inner'>{children}</div>
      </div>
    </div>
  )
}

export default Card
