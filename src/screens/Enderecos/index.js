import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Data, Label, CardTitle, Card } from "./styles";
import { Anchor, Button, LoadingIcon, Typography } from "@nabstore/styleguide";
import CreateEnderecoModal from "../../components/CreateEnderecoModal";
import useGetEnderecos from "../../hooks/useGetEnderecos";

const Enderecos = ({ selectEnderecoAction }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: enderecos, isLoading, error } = useGetEnderecos();
  const [isCreateEnderecoModalOpen, setIsCreateEnderecoModalOpen] =
    useState(false);

  const handleSelect = (endereco) => {
    dispatch(selectEnderecoAction(endereco));
    navigate("/checkout");
  };

  if (isLoading) {
    return (
      <div className="container pb-5">
        <Anchor.GoBack path="/cartoes" text="Voltar aos cartões" />

        <div className="d-flex justify-content-center mt-4">
          <Typography.Title>Endereços</Typography.Title>
        </div>
        <div className="d-flex flex-column align-items-center mt-5">
          <LoadingIcon.Oval stroke="#2f2f2f" />
        </div>
      </div>
    );
  }

  return (
    <div className="container pb-5">
      <CreateEnderecoModal
        handleClose={() => setIsCreateEnderecoModalOpen(false)}
        showModal={isCreateEnderecoModalOpen}
      />

      <Anchor.GoBack path="/cartoes" text="Voltar aos cartões" />

      <div className="float-end">
        <Button.Primary onClick={() => setIsCreateEnderecoModalOpen(true)}>
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
