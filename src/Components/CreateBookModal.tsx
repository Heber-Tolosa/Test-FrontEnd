import React, { useContext } from "react";
import Modal from "./Modal";
import { DataContext } from "../context/DataContext";
import {
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import styled from "styled-components";
import { BookItem } from "../types";

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
const FormSelect = styled.select`
  width: 100%;
  height: 30px;
  text-align: center;
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

type CreateBookModalProps = {
  errors: FieldErrors<BookItem>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<BookItem>;
  reset: UseFormReset<BookItem>;
};

export default function CreateBookModal({
  register,
  onSubmit,
  reset,
  errors,
}: CreateBookModalProps) {
  const { openAddBookModal, setOpenAddBookModal, authorsList } =
    useContext(DataContext);
  return (
    <Modal
      open={openAddBookModal}
      setOpen={setOpenAddBookModal}
      title="Criar novo livro"
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
          <label htmlFor="author_id">Autor</label>
          <FormSelect
            {...register("author_id", {
              required: { value: true, message: "Selecione um autor" },
              minLength: {
                value: 2,
                message: "Selecione um autor",
              },
            })}
          >
            <option value="">
              --------------Selecione um autor--------------
            </option>
            {authorsList.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </FormSelect>
          {errors.author_id && (
            <span className="error">
              {" "}
              {(errors.author_id as FieldError).message}
            </span>
          )}
          <label htmlFor="pages">Páginas</label>
          <FormInput type="number" {...register("pages")} />

          <SubmitButton type="submit">enviar</SubmitButton>
        </form>
      </FormContainer>
    </Modal>
  );
}
