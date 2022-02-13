import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginUser from '../container/users/LoginUser'
import Register from '../container/users/Register'


const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/login' element = {<LoginUser/>} />
            <Route path='/newuser' element = {<Register/>} />
        </Routes>
      </BrowserRouter>

  )
}

export default AppRouter