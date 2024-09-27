import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { userContext} from "../../Context/authContext"
import logoB from '../../assets/img/Burguer_Queen.png';

export const Register = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { registerUser } = useContext(userContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(email, password)
      swal(email + " Registrado", " correctamente, ya puedes iniciar sesión", "success")
      navigate('/')
      console.log(registerUser)
      console.log('usuario', email, 'registrado', password);
    } catch (error) {
      console.log(error.code);
    }
  };
  const styleNav = {
    color: 'black'

  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        {/* envia la informacion del formulario a handlerSubmit */}
        <img className="imglogo" src={logoB} alt="65465" />
      <br></br>

        <label className="form-label">Dirección email</label>
        <input type="email" className="input" placeholder="ejemplo@gmail.com" id="email" onChange={e => setEmail(e.target.value)} required></input>


        <label className="form-label">Contraseña:</label>
        <input type="password" className="input" placeholder="Añade mas de 6 caracteres" id="password" onChange={e => setPassword(e.target.value)} required></input>
        <button className='buttonRegister' type="submit" >Regístrate</button>
        <p>¿Ya tienes cuenta?<a href="/" style={styleNav}> Inicia sesión</a></p>
       
      </div>
    </form>
  )
};