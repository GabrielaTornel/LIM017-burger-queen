import './Login.css';
import { useContext, useState } from 'react';
import { userContext } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import logoB from '../../assets/img/Burguer_Queen.png'

export const Login = () => {
  const {loginUser} = useContext(userContext);

  const navigate = useNavigate();
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginUser(email, password)
      navigate('/home')
      //------------AGREGAR CONDICION QUE SI SE EJECUTA EL LOGIN PASE A LA PAGINA HOME-------------------|
      swal("Bienvenido!", email + " Ya puede realizar tu pedido", "success")
      // alert('Bienvenido ' + email + 'ya puedes hacer el pedido');
    //   console.log('usuario', email, 'logueado');
    } catch (
      error) {
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
        <input type="email" className="input" placeholder="ingresar email" id="email" onChange={e=>setEmail(e.target.value)} required></input>

      
        <label className="form-label">Contraseña:</label>
        <input type="password" className="input" placeholder="ingresar contraseña" id="password" onChange={e=> setPassword(e.target.value)} required></input>
      
           <p>¿No tienes cuenta?<a href="/register" style={styleNav}> Regístrate</a></p>
           <button className='buttonLogin' type="submit" >Login</button>
         </div>
        </form>
  )
}
