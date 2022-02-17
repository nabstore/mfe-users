import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from '@nabstore/styleguide';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Input,
  Title,
  Label,
  Line,
  SignUpLink,
} from "./styles";
import apiMethods from "../../services/api";

const Login = ({ loginAction }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiMethods
      .login({ email, password })
      .then((resp) => {
        dispatch(loginAction(resp));
        setError(false);
        if (cart.produtos.length > 0) navigate("/enderecos");
        else navigate("/");
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          setError(true);
        }
      });
  };

  return (
    <Container className="container">
      <Title>Login</Title>

      <Line />

      <form onSubmit={handleSubmit}>
        <div className="ms-3">
          <FontAwesomeIcon icon={faUser} />
          <Label htmlFor="email">E-mail</Label>
        </div>
        <Input
          autoFocus
          type="email"
          id="email"
          className={error ? "form-control is-invalid" : "form-control"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="ms-3">
          <FontAwesomeIcon icon={faKey} />
          <Label htmlFor="password">Senha</Label>
        </div>

        <Input
          type="password"
          id="password"
          className={error ? "form-control is-invalid" : "form-control"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button.Secondary margin="50px 0">Entrar</Button.Secondary>

        <div className="d-flex justify-content-center">
          <SignUpLink to="/users/signup">
            Não possuo uma conta <FontAwesomeIcon icon={faArrowRight} />
          </SignUpLink>
        </div>
      </form>
    </Container>
  );
};

export default Login;
