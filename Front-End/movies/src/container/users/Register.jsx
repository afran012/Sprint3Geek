import { Link } from 'react-router-dom'
import { userFormHook } from '../../hooks/userFormHook'
import { useDispatch } from "react-redux"
import { registroEmailPasswordNombre } from '../../action/actionRegister'


const Register = () => {
  const  dispatch = useDispatch()
    
    const {handleInputChange, FormHook} = userFormHook({
        username:"",
        email:"",
        password:""
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(registroEmailPasswordNombre(email, password, username));
    }
    const {password,email,username}=FormHook

  return (
    <div>
    <h1>Registro</h1>
    <form className="centrarSesion" onSubmit={handleSubmit}>
        <h2>Crear cuenta</h2>
        <div className="itemlogin">
          <input
            id="username"
            name="username"
            type="text"
            required
            value={username}
            onChange={handleInputChange}
            placeholder="Nombre"
            className="itemcajas"
            autoComplete="off"
          />
        </div>

        <div className="itemlogin">
          <input
            id="email"
            name="email"
            type="text"
            required
            value={email}
            onChange={handleInputChange}
            placeholder="Correo electronico"
            className="itemcajas"
            autoComplete="off"
          />
        </div>

        <div className="itemlogin">
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={handleInputChange}
            placeholder="Contraseña"
            className="itemcajas"
            autoComplete="off"
          />
        </div>

        <div className="itemlogin">
          <button className="btnlogin" type="submit" >
            Registrar
          </button>
        </div>

        <p className="itemlogin coloritemlogin">
          ¿Ya tienes una cuenta?
          <span className="contenedorRegistro">
            <Link className="registrate" to="/login">
              Iniciar sesión
            </Link>
          </span>
        </p>
      </form>
</div>
  )
}

export default Register