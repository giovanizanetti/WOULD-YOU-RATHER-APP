import Card from '../utils/Card'
import { useSelector } from 'react-redux'
const LeaderBoard = () => {
  const users = useSelector((state) => state.users)

  const usersIds = Object.keys(users)
  // const sortedUsers = usersIds
  //   .map((id, index) => {
  //     const answers = Object.keys(users[id].answers).length
  //     const questions = users[id].questions.length
  //     const total = answers + questions
  //     return { id, total }
  //   })
  //   .sort((a, b) => {
  //     return b.total - a.total
  //   })
  //   .map((item) => users[item.id])

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
