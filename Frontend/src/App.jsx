import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllProductPage from './pages/AllProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import DisplayOrders from './pages/DisplayOrders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import Verify from './pages/Verify'
import { ToastContainer, toast } from 'react-toastify';
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/allproduct' element={<AllProductPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<DisplayOrders/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
