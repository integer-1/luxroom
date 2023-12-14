import Footer from './components/Footer.tsx'
import { Outlet } from 'react-router'
import Login from './components/Login.tsx'
import NavBar from './components/NavBar.tsx'

function App() {
  return (
    <>
      <Login />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
