// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home.tsx'
import Detail from './screens/Detail.tsx'
import List from './screens/List.tsx'
import Shop from './screens/List.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
\        <Route path="/furniture/list" element={<List />} />
        <Route path="/furniture/list/:name" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App
