import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Kitchen } from "./Pages/Kitchen/Kitchen";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { AuthProvider } from "./Context/authContext";
import { CartContextProvider } from "./Context/CartContext";

function Navigation() {
  return (
    <Router>
      <AuthProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </CartContextProvider>
      </AuthProvider>
    </Router>
  );
}

export default Navigation;
