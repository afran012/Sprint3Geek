import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import { loginGoogle } from '../../action/iniciarSesion'
import { userFormHook } from '../../hooks/userFormHook'
import { useDispatch } from "react-redux"
import { loginEmailAndPassword, loginGoogle } from '../../action/actionLogin'


const LoginUser = () => {
    const dispatch = useDispatch()

    
    // eslint-disable-next-line no-unused-vars
    const {handleInputChange, FormHook, reset} = userFormHook({
        password:"",
        email:""
    })

    const {password,email}=FormHook

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(loginEmailAndPassword(email,password))
    }
    
    const handleGoogle =()=>{
        dispatch(loginGoogle())
    }


  return (
    <div>
    <h1>Formulario</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={handleInputChange} name="email" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={handleInputChange} name="password" />
        </Form.Group>
        <Button variant="primary" type="submit" >
            Enviar
        </Button>
        <Button variant="primary" type="button" onClick={()=>handleGoogle()}>
        Iniciar sesion con google
        </Button>
    </Form>

    <Link className="registrate" to="/newuser">
              Registrate
    </Link>
</div>
  )
}

export default LoginUser