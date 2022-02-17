import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const App = ({ name }) => (
  <BrowserRouter basename="users">
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);

export default App;
