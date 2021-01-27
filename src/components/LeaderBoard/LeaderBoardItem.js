const LeaderboardItem = ({ user }) => {
  console.log(user)
  return (
    <div
      className='leaderboardItem container flex-row border-gray pad-1_2'
      style={{ justifyContent: 'space-around', minWidth: '30vw' }}
    >
      <div className='trofe-badge'></div>
      <div style={{ flexGrow: 2 }}>
        <img src='' />
        avatar
      </div>
      <div className='border-gray' style={{ borderRight: '2px solid', borderLeft: '2px solid', flexGrow: 5 }}>
        main
      </div>
      <div style={{ flexGrow: 2 }}>score</div>
    </div>
  )
}

export default LeaderboardItem
