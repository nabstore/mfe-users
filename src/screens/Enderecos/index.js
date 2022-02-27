import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import apiMethods from "../../services/api";
import { Data, Label, CardTitle, Card } from "./styles";
import { Anchor, Button, Typography } from "@nabstore/styleguide";

const Enderecos = ({ selectEnderecoAction }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [enderecos, setEnderecos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    apiMethods
      .fetchEnderecos()
      .then((resp) => setEnderecos(resp))
      .catch((err) => console.error("Erro ao carregar endereços", err));
  }, []);

  const handleSelect = (endereco) => {
    dispatch(selectEnderecoAction(endereco));
    navigate("/checkout");
  };

  return (
    <div className="container-sm">
      {/* <AddEndereco
        handleClose={() => setShowModal(false)}
        showModal={showModal}
      /> */}

      <Anchor.GoBack path="/cartoes" text="Voltar aos cartões" />

      <div className="float-end">
        <Button.Primary onClick={() => setShowModal(true)}>
          <FontAwesomeIcon className="me-2" icon={faPlusCircle} /> Novo Endereço
        </Button.Primary>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Typography.Title>Endereços</Typography.Title>
      </div>

      <div className="d-flex flex-column align-items-center mb-5">
        {enderecos.map((endereco) => (
          <Card
            key={endereco.id}
            className="card"
            onClick={() => handleSelect(endereco)}
            style={{ cursor: "pointer" }}
          >
            <CardTitle>Endereço {endereco.id}</CardTitle>
            <div className="d-flex flex-row justify-content-around">
              <div className="d-flex flex-column">
                <Data>
                  <Label>Logradouro:</Label> {endereco.logradouro}
                </Data>
                <Data>
                  <Label>Bairro:</Label> {endereco.bairro}
                </Data>
                <Data>
                  <Label>Numero:</Label> {endereco.numero}
                </Data>
              </div>
              <div className="d-flex flex-column">
                <Data>
                  <Label>Cidade:</Label> {endereco.cidade}
                </Data>
                <Data>
                  <Label>UF:</Label> {endereco.uf}
                </Data>
                <Data>
                  <Label>CEP:</Label> {endereco.cep}
                </Data>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Enderecos;
