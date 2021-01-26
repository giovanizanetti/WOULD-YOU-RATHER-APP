import Card from '../utils/Card'
import { useSelector } from 'react-redux'
const LeaderBoard = () => {
  const users = useSelector((state) => state.users)

  //transform users obj in an array of ids
  const usersIds = Object.keys(users)

  // sort user leader (descending)
  const sortedUsers = usersIds
    .sort((a, b) => {
      const answersA = Object.keys(users[a].answers).length
      const questionsA = users[a].questions.length
      const totalA = answersA + questionsA

      const answersB = Object.keys(users[b].answers).length
      const questionsB = users[b].questions.length
      const totalB = answersB + questionsB

      return totalB - totalA
    })
    .map((id) => users[id])

  return (
    <div className='leaderboard'>
      {console.log(sortedUsers)}
      {/* {console.log(usersIds)} */}
      {/* {console.log(answersLeader)} */}
      {/* <Card name={name} avatar={avatar}></Card> */}
    </div>
  )
}

export default LeaderBoard
