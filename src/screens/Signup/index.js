import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@nabstore/styleguide";

const SignUp = () => {
  return (
    <>
      <Typography.Title>SignUp</Typography.Title>
      <Link to="/login">Já possui conta? Fala login aqui.</Link>
    </>
  );
};

export default SignUp;
