import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

// Components
import Header from './components/Header'



export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='SignIn' element={<SignIn></SignIn>}></Route>
        <Route path='SignUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
