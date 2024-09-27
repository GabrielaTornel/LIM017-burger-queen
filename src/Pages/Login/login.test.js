import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Login } from "../Login/Login";
import { AuthProvider } from "../../Context/authContext";

jest.mock("../../Context/authContext.jsx");
//testeamos que un componente se ubique en una pagina

test("render ¿No tienes cuenta?", () => {
  const history = createMemoryHistory();
  render(
    <AuthProvider>
        <Router location={history.location} navigator={history}>
        <Login/>
      </Router>
    </AuthProvider> 
  );
  const linkElement = screen.getByText(/No tienes cuenta/i);
  expect(linkElement).toBeInTheDocument();
});

test("Componente login", async () => {
  const history = createMemoryHistory();
  render(
    <AuthProvider>
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    </AuthProvider>
  );
  const email = screen.getByTestId("loginemail");
  const password = screen.getByTestId("loginPassword");

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});

  test ("ingreso de usuario", async () => {
    const history = createMemoryHistory();
    render(
      <AuthProvider>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      </AuthProvider>
    );
    const email =  screen.getByTestId("loginemail");
    const password =   screen.getByTestId("loginPassword");
    const buttonLogin = await screen.findByTestId("button-login");

    fireEvent.change(email, { target: { value: "cocina@gmail.com" } });
   
    fireEvent.change(password, { target: { value: "cocina$123." } });

    fireEvent.click(buttonLogin);

    await waitFor(() => {
      expect(history.location.pathname).toBe("/home");
    });
  });