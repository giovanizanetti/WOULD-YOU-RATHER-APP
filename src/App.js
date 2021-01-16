import './App.css'
import SignIn from './components/SignIn'
import LoadingBar from 'react-redux-loading'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import NewQuestion from './components/NewQuestion'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar />
        <div className='App'>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/leaderboard' exact>
            <LeaderBoard />
          </Route>
          <Route path='/newQuestion' exact>
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
