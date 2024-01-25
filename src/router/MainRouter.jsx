import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from '../pages/Home'
import Category from '../pages/Category'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import NavBar from '../components/NavBar'
import { Cart } from '../pages/Cart'

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<Category/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
