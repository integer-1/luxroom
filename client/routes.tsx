import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './App.tsx'
import Home from './screens/Home.tsx'
import List from './screens/List.tsx'
import Detail from './screens/Detail.tsx'
// import Shop from './screens/Shop.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route path="/" element={<Home />} />
    <Route path="/chairs" element={<List />} />
    <Route path="/chairs/:name" element={<Detail />} />
    {/* <Route path="/shop" element={<Shop />} /> */}
    {/* <Route path="/living-room/chairs" element={<Shop />} /> */}
  </Route>
)
