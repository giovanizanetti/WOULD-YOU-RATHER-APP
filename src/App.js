import './App.css'
import SignIn from './components/SignIn'
import LoadingBar from 'react-redux-loading'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar />
        <div className='App'>
          <Route to='/signin'>
            <SignIn />
          </Route>
        </div>
      </Router>
    </>
  )
}

export default App
