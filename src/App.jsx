import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/general/home/Home'
import SignIn from './pages/general/SignIn'
import UserProvider from './components/context/UserProvider'
import SignUp from './pages/general/SignUp'

function App() {

  return (
    // <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path='/sign_in' element={ <SignIn /> } />
            <Route path='/sign_up' element={ <SignUp /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    // </UserProvider>
  )
}

export default App
