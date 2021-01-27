import { useSelector } from 'react-redux'
import LeaderboardItem from './LeaderBoardItem'

const LeaderBoard = () => {
  const users = useSelector((state) => state.users)

  //transform users obj in an array of ids
  const usersIds = Object.keys(users)

  const calculateAnswers = (users, userID) => Object.keys(users[userID].answers).length

  const calculateScore = (users, userID) => {
    const answers = calculateAnswers(users, userID)
    const questions = users[userID].questions.length
    return answers + questions
  }

  // sort user leader (descending)
  const sortedUsersByScore = usersIds.sort((a, b) => {
    const scoreA = calculateScore(users, a)
    const scoreB = calculateScore(users, b)
    return scoreB - scoreA
  })

  return (
    <>
      {sortedUsersByScore &&
        sortedUsersByScore.map((id) => {
          const userID = users[id].id
          const formatedUser = {
            id,
            answers: calculateAnswers(users, userID),
            score: calculateScore(users, userID),
            avatar: users[id].avatarURL,
            questions: users[userID].questions.length,
          }
          return <LeaderboardItem key={userID} user={formatedUser} />
        })}
    </>
  )
}

export default LeaderBoard
