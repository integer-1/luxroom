import Footer from './components/Footer.tsx'
import { Outlet } from 'react-router'
function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
