import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './App.tsx'
import Home from './screens/Home.tsx'
import MainCategory from './screens/MainCategory.tsx'
import SubCategory from './screens/SubCategory.tsx'
import Detail from './screens/Detail.tsx'
import Shipping from './components/info/Shipping.tsx'
import Refund from './components/info/Refund.tsx'
import AboutUs from './components/info/AboutUs.tsx'
import Contact from './components/info/Contact.tsx'
import Location from './components/info/Location.tsx'
import MyCart from './components/info/MyCart.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/:mainCategory" element={<MainCategory />} />
    <Route path="/:mainCategory/:subCategory" element={<SubCategory />} />
    <Route path="/:mainCategory/:subCategory/:name" element={<Detail />} />
    <Route path="/support/shipping" element={<Shipping />} />
    <Route path="/support/refund" element={<Refund />} />
    <Route path="/luxloom/us" element={<AboutUs />} />
    <Route path="/luxloom/contact" element={<Contact />} />
    <Route path="/luxloom/location" element={<Location />} />
    <Route path="/my/cart" element={<MyCart />} />
  </Route>
)
