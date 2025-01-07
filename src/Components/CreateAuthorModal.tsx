import React, { useContext } from "react";
import Modal from "./Modal";
import { AuthorsContext } from "../context/AuthorsContext";
import {
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import styled from "styled-components";
import { authorItem } from "../types";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

const FormInput = styled.input`
  width: 100%;
  height: 30px;
`;

const SubmitButton = styled.button`
  width: 40%;
  height: 40px;
  margin: auto;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  gap: 5px;
  align-items: center;
  border: 1px solid #1377d1;
  cursor: pointer;
  background: #1890ff;
  color: white;
  border-radius: 0.5rem;
  font-weight: 700;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    background: #0966cc;
  }
`;

type CreateAuthorModalProps = {
  errors: FieldErrors<authorItem>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<authorItem>;
  reset: UseFormReset<authorItem>;
};

export default function CreateAuthorModal({
  register,
  onSubmit,
  reset,
  errors,
}: CreateAuthorModalProps) {
  const { openAddAuthorModal, setOpenAddAuthorModal } =
    useContext(AuthorsContext);
  return (
    <Modal
      open={openAddAuthorModal}
      setOpen={setOpenAddAuthorModal}
      title="Criar Novo autor"
      resetForm={reset}
    >
      <FormContainer>
        <form onSubmit={onSubmit} style={{ width: "50%" }}>
          <label htmlFor="name">Nome</label>
          <FormInput
            type="text"
            {...register("name", {
              required: { value: true, message: "O nome é obrigatório" },
              minLength: {
                value: 2,
                message: "o nome deve ter pelo menos 2 caracteres",
              },
            })}
          />
          {errors.name && (
            <span className="error">
              {" "}
              {(errors.name as FieldError).message}
            </span>
          )}
          <label htmlFor="Email">Email</label>
          <FormInput
            type="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "e-mail inválido",
              },
            })}
          />
          {errors.email && (
            <span className="error">
              {" "}
              {(errors.email as FieldError).message}
            </span>
          )}
          <SubmitButton type="submit">enviar</SubmitButton>
        </form>
      </FormContainer>
    </Modal>
  );
}
