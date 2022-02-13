import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { userFormHook } from '../../hooks/userFormHook'


const LoginUser = () => {
    const {handleInputChange, FormHook} = userFormHook({
        password:"",
        email:""
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const {password,email}=FormHook

    const loginBtn =()=>{

    }
  return (
    <div>
    <h1>Formulario</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formulario">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={handleInputChange} name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formulario">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={handleInputChange} name="password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loginBtn}>
            Enviar
        </Button>
    </Form>

    <Link className="registrate" to="/newuser">
              Registrate
    </Link>
</div>
  )
}

export default LoginUser