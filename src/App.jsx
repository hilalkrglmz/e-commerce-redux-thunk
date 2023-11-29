import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'


const App = () => {
  return (
   <BrowserRouter>
   
    <Header/>

   <Routes>

    <Route path='/' element={<MainPage/>} />
    <Route path='/sepet' element={<ProductPage/>} />


   </Routes>
   
   
   
   </BrowserRouter>
  )
}

export default App