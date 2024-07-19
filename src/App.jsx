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
import User from './pages/signed_in/User'
import Overview from './pages/signed_in/overview/Overview'
import Conduits from './pages/signed_in/conduits/Conduits'
import Cables from './pages/signed_in/cables/Cables'
import Projects from './pages/signed_in/projects/Projects'

function App() {

  return (
    // <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path='/sign_in' element={ <SignIn /> } />
            <Route path='/sign_up' element={ <SignUp /> } />
            <Route path='/user' element={ <User /> } />
            <Route path='/overview' element={ <Overview /> } />
            <Route path='/conduits' element={ <Conduits /> } />
            <Route path='/cables' element={ <Cables /> } />
            <Route path='/projects' element={ <Projects /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    // </UserProvider>
  )
}

export default App
