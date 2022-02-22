import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carrousel, { ControlledCarousel } from '../componentes/carrousel/Carrousel'
import { MoviesCRUD } from '../componentes/moviesCRUD/MoviesCRUD'
import { NavbarMain } from '../componentes/navbar/Navbar'
import LoginUser from '../container/users/LoginUser'
import Register from '../container/users/Register'
import DashboardRoutes from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'



const AppRouter = () => {
  // eslint-disable-next-line no-unused-vars
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {
    const auth = getAuth(); onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <h1>Espere...</h1>;
    }


  return (
    <BrowserRouter>
      <NavbarMain/>
      <ControlledCarousel/>
      
      <Routes>
        <Route path='/login' element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <LoginUser />
          </PublicRoute>
        } />
        <Route path='/newuser' element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <Register />
          </PublicRoute>
        } />
        <Route path='/movies' element={
          <PrivateRoute isAuthenticated={isLoggedIn}>
            <MoviesCRUD />
          </PrivateRoute>
        } />
        <Route path="/*" element={
          <PrivateRoute isAuthenticated={isLoggedIn}>
            <DashboardRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>

  )
}

export default AppRouter