import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Kitchen } from "./Components/Kitchen/Kitchen";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { AuthProvider } from "./FirebaseConfig/authContext";


export function Navigation() {
  return (
    <Router>
      <div className="Navigation">
      <AuthProvider>
     
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/" element={<Login />} />
          
        </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}


export default Navigation;
