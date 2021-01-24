// import Avatar from '../assets/avatar-f-1.svg'
const Card = (props) => {
  const { name, avatar } = props || {}

  const Avatar = `.${avatar}`
  return (
    <div className='container border-gray'>
      <div className='container-header question-card-header border-gray'>{name} Asks:</div>
      <div className='question-card-outer flex-row pad-TB-1'>
        <img className='question-card-avatar' src={Avatar} alt={`${name}'s avatar'`} />
        {console.log(avatar)}
        <div className='flex-column question-card-inner'>{props.children}</div>
      </div>
    </div>
  )
}

export default Card
