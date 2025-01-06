import { IoMdAddCircle } from "react-icons/io";
import styled from "styled-components";
import Modal from "../Components/Modal";
import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";

const CreateButton = styled.button`
  margin: auto;
  width: 10%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  gap: 5px;
  align-items: center;
  height: 35px;
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

const SubmitButton = styled(CreateButton)`
  width: 40%;
  height: 40px;
`;

export default function AutorsPage() {
  const [openAddModal, setOpenAddModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <CreateButton onClick={() => setOpenAddModal(true)}>
        Criar Novo autor{" "}
        <IoMdAddCircle style={{ height: "20px", width: "20px" }} />
      </CreateButton>
      <Modal
        open={openAddModal}
        setOpen={setOpenAddModal}
        title="Criar Novo autor"
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
    </>
  );
}
