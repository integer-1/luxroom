import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './App.tsx'
import Shop from './screens/Shop.tsx'
import Home from './screens/Home.tsx'
import List from './screens/List.tsx'
import Detail from './screens/Detail.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route path="/" element={<Home />} />
    <Route path="/furniture/list" element={<List />} />
    <Route path="/furniture/list/:name" element={<Detail />} />
    <Route path="/shop" element={<Shop />} />
    {/* <Route path="/living-room/chairs" element={<Shop />} /> */}
  </Route>
)
