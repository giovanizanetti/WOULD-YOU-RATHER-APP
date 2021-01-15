import './App.css'
import SignIn from './components/SignIn'
import LoadingBar from 'react-redux-loading'

function App() {
  return (
    <>
      <LoadingBar />
      <div className='App'>
        <SignIn />
      </div>
    </>
  )
}

export default App
