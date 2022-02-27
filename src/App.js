import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CreateColaborador from "./screens/CreateColaborador";
import Enderecos from "./screens/Enderecos";

const App = ({ name, store, loginAction, selectEnderecoAction }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-sm mt-5">
        <Routes>
          <Route
            exact
            path="/users/login"
            element={<Login loginAction={loginAction} />}
          />
          <Route exact path="/users/signup" element={<Signup />} />
          <Route
            exact
            path="/users/create-colaborador"
            element={<CreateColaborador />}
          />
          <Route
            exact
            path="/users/enderecos"
            element={<Enderecos selectEnderecoAction={selectEnderecoAction} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
