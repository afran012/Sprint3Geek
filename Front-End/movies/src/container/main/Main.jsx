import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from '../../action/actionLogin'

const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = ()=>{
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div>Main
      <button onClick={()=> {handleLogout()}}> Cerrar sesion</button>
    </div>
  )
}

export default Main