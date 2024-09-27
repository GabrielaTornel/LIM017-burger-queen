import "./Login.css";
import { useContext, useState } from "react";
import { userContext } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import logoB from "../../assets/img/Burguer_Queen.png";

export const Login = () => {
  const { loginUser } = useContext(userContext);

  const navigate = useNavigate();

  const [loginemail, setEmail] = useState();
  const [loginpassword, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(loginemail, loginpassword);
      localStorage.setItem("userEmail", loginemail);
      navigate("/home");
      //------------AGREGAR CONDICION QUE SI SE EJECUTA EL LOGIN PASE A LA PAGINA HOME-------------------|
      swal(
        "Bienvenido!",
        loginemail + " Ya puede realizar tu pedido",
        "success"
      );

    } catch (error) {
     
    }
  };
  const styleNav = {
    color: "black",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        {/* envia la informacion del formulario a handlerSubmit */}
        <img className="imglogo" src={logoB} alt="65465" />
        <br></br>
        <label className="form-label">Dirección email</label>
        <input
          type="email"
          data-testid="loginemail"
          className="input"
          placeholder="ingresar email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>

        <label className="form-label">Clave privada</label>
        <input
          type="password"
          data-testid="loginPassword"
          className="input"
          placeholder="ingresar contraseña"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button
          className="buttonLogin"
          data-testid="button-login"
          type="submit"
        >
          Iniciar sesión
        </button>

        <p>
          ¿No tienes cuenta?
          <a href="/register" style={styleNav}>
            {" "}
            Regístrate
          </a>
        </p>
      </div>
    </form>
  );
};
