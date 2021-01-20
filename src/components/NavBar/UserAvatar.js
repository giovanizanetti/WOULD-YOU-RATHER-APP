const UserAvatar = ({ className, authedUser: { name, avatarURL } }) => {
  return (
    <div className={className}>
      <img src={avatarURL} alt='user'></img>
      <span>
        Hello, <strong>{name}</strong>
      </span>
    </div>
  )
}

export default UserAvatar
