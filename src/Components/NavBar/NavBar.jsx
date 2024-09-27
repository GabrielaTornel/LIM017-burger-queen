import React from "react";
import "./navbar.css";
import { singOutUser } from "../../Context/authContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import logoBQ from "../../assets/img/logoBQ.png";


function Navbar() {
  const navigate = useNavigate();

  const handleKitchen = () => {

    navigate("/kitchen");
  };
  const handleHome = () => {
    navigate("/home");
  };

  const handleSinOff = (e) => {
    e.preventDefault();
    singOutUser();
    swal({
      title: "Estás seguro de cerrar sesión",
      text: "Si cierras sesión no podrás seguir tomando pedidos",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((logout) => {
      if (logout) {
        swal({ text: "Cerrando sesión con éxito", icon: "success" });
        navigate("/");
      }
    });
  };

  return (
    <nav className="navbarItems">
      <section className="logoBquenn">
        {" "}
        <img src={logoBQ} alt="logobQ" width="70%"></img>
      </section>
      <h1> BurguerQueen</h1>
      <button type="button" className="logout" onClick={handleKitchen}>
        Cocina
      </button>
      <button type="button" className="logout" onClick={handleHome}>
        Home
      </button>
      <button type="button" onClick={handleSinOff} className="logout">
        Cerrar Cesión
      </button>
    </nav>
  );
}

export default Navbar;
