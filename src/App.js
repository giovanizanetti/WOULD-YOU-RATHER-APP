import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css'
import SignIn from './components/SignIn'
import LoadingBar from 'react-redux-loading'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import NewQuestion from './components/NewQuestion'
import QuestionDetails from './components/QuestionDetails'

const App = (props) => {
  const authedUser = useSelector((state) => {
    const { name } = state.users[state.auth.authedUser] || {}
    return name
  })

  const isAuthenticated = authedUser === undefined && <Redirect to='/signin' />

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar />
        <div className='App'>
          <Route path='/' exact>
            {isAuthenticated}
            <Home />
          </Route>
          <Route path='/questions/:id'>
            {isAuthenticated}
            <QuestionDetails />
          </Route>

          <Route path='/leaderboard' exact>
            {isAuthenticated}
            <LeaderBoard />
          </Route>
          <Route path='/add' exact>
            {isAuthenticated}
            <NewQuestion />
          </Route>
          <Route path='/signin' exact>
            <SignIn />
          </Route>
        </div>
      </Router>
    </>
  )
}

export default App
