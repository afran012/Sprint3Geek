import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginUser from '../container/users/LoginUser'
import Register from '../container/users/Register'
import DashboardRoutes from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth(); onAuthStateChanged(auth, (user) => {
    if (user?.uid) { setIsLoggedIn(true);
    } else {
    setIsLoggedIn(false);
        }
        setChecking(false);
      });
    }, []);


  return (
      <BrowserRouter>
        <Routes>
            <Route path='/login' element = {
              <PublicRoute isAuthenticated={isLoggedIn}>
                <LoginUser/>
              </PublicRoute>
            
            }/>
            <Route path='/newuser' element = {
              <PublicRoute isAuthenticated={isLoggedIn}>
                <Register/>
              </PublicRoute>
            }/>
            <Route path="/*" element={
              <PrivateRoute isAuthenticated ={isLoggedIn}>
                <DashboardRoutes />
              </PrivateRoute>
            } />
        </Routes>
      </BrowserRouter>

  )
}

export default AppRouter