import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'
import About from '../pages/About'
import App from '../../App'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router