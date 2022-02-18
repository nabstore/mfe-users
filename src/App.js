import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CreateColaborador from "./screens/CreateColaborador";

const App = ({ name, store, loginAction, logoutAction }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/users/login"
          element={<Login loginAction={loginAction} />}
        />
        <Route exact path="/users/signup" element={<Signup />} />
        <Route exact path="/users/create-colaborador" element={<CreateColaborador />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
