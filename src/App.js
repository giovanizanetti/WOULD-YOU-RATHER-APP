import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css'
import SignIn from './components/SignIn'
import LoadingBar from 'react-redux-loading'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import AddQuestion from './components/AddQuestion'
import QuestionDetails from './components/QuestionDetails'
import NotFound from './components/utils/404'

const App = (props) => {
  const authedUser = useSelector((state) => {
    const { name } = state.users[state.auth.authedUser] || {}
    return name
  })

  const isAuthenticated = authedUser !== undefined && true

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar />

        <div className='App'>
          <Switch>
            <Route path='/' exact>
              {isAuthenticated ? <Home /> : <Redirect to='/signin' />}
            </Route>
            <Route path='/questions/:question_id' exact>
              {isAuthenticated ? <QuestionDetails /> : <Redirect to='/signin' />}
            </Route>
            <Route path='/leaderboard' exact>
              {isAuthenticated ? <LeaderBoard /> : <Redirect to='/signin' />}
            </Route>
            <Route path='/add' exact>
              {isAuthenticated ? <AddQuestion /> : <Redirect to='/signin' />}
            </Route>
            <Route path='/signin' exact>
              <SignIn />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
