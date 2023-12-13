import Footer from './components/Footer.tsx'
import { Outlet } from 'react-router'
import Login from './components/Login.tsx'

function App() {
  return (
    <>
      <Login />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
