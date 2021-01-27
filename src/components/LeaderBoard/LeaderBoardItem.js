import { useScreenSize } from '../../hooks/useScreenSize'
import Card from '../utils/Card'
import TrophyBadge from './TrophyBadge'

const LeaderboardItem = ({ user }) => {
  const [isSmallScreen] = useScreenSize(600)
  const { avatar, name, answers, questions, score, position } = user || {}

  return (
    <div className='leaderboardItem container flex-row border-gray'>
      <TrophyBadge position={position} />

      {!isSmallScreen && (
        <div style={{ margin: '0 1rem 0 0' }}>
          <img className='pad-TB-1' style={{ width: '6rem' }} src={avatar} alt={`${name}'s avatar`} />
        </div>
      )}

      <div className='border-gray lb-main'>
        <h2>{name}</h2>
        <div>
          <div className='leaderResult'>
            <span>Answered Questions</span>
            <span>{answers}</span>
          </div>
          <hr />
          <div className='leaderResult'>
            <span>Created Questions</span>
            <span>{questions}</span>
          </div>
        </div>
      </div>

      {!isSmallScreen && (
        <div>
          <Card headerText='Score'>
            <div className='score-badge'>{score}</div>
          </Card>
        </div>
      )}

      {isSmallScreen && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ margin: '0 1rem 0 0' }}>
            <img
              className='pad-TB-1'
              style={{ width: '7rem', marginLeft: '1rem' }}
              src={avatar}
              alt={`${name}'s avatar`}
            />
          </div>
          <div id='score-mobile'>
            <Card headerText='Score'>
              <div className='score-badge'>{score}</div>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default LeaderboardItem
