import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@nabstore/styleguide";

const Login = () => {
  return (
    <>
      <Typography.Title>Login</Typography.Title>
      <Link to="/signup">Não tem conta? Cadastre-se aqui.</Link>
    </>
  );
};

export default Login;
