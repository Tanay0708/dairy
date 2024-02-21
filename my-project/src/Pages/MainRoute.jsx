import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Hero } from '../sections'
import Gallery from './Gallery'
import All from './All'
import About from './About'
import ShowProduct from './ShowProduct'
import ContactUs from './ContactUs'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<All />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/products' element={<ShowProduct /> } />
            <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
    </div>
  )
}

export default MainRoute