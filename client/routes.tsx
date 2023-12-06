import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './App.tsx'
import Home from './screens/Home.tsx'
import Detail from './screens/Detail.tsx'
import MainCategory from './screens/MainCategory.tsx'
import SubCategory from './screens/SubCategory.tsx'
// import Shop from './screens/Shop.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/:mainCategory" element={<MainCategory />} />
    <Route path="/:mainCategory/:subCategory" element={<SubCategory />} />
    <Route path="/:mainCategory/:subCategory/:name" element={<Detail />} />
  </Route>
)
