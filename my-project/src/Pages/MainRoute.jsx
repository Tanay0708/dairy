import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Hero, PopularProduct } from '../sections'
import Gallery from './Gallery'
import All from './All'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<All />} />
            <Route path='/pro' element={<Gallery/>} />
        </Routes>
    </div>
  )
}

export default MainRoute