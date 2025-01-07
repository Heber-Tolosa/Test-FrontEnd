import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div<{ open: string | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${(props) => (props.open ? 1 : 0)}; /* Cambia la opacidad */
  visibility: ${(props) =>
    props.open ? "visible" : "hidden"}; /* Controla la visibilidad */
  transition: opacity 0.3s ease, visibility 0.3s ease; /* Transición suave */
`;

const ModalContainer = styled.div`
  width: 23%;
  height: 15%;
  background: white;
  border-radius: 0.5rem;
  color: #e74c3c;
  padding: 1%;
  text-align: center;
  border: 2px solid #e74c3c;
`;
const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 20px;
`;
const ModalButton = styled.button`
  color: white;
  border: none;
  padding: 5px 11px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin: auto;
  display: flex;
`;

const DeleteButton = styled(ModalButton)`
  background-color: #2ecc71;
  &:hover {
    background-color: #27ae60;
  }
`;
const CancelButton = styled(ModalButton)`
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`;

type DeleteModalProps = {
  open: string | undefined;
  setOpen: Dispatch<SetStateAction<string | undefined>>;
  handleDelete: (id: string) => void;
};

export default function DeleteModal({
  open,
  setOpen,
  handleDelete,
}: DeleteModalProps) {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpen(undefined);
    }
  };
  return (
    <ModalOverlay onClick={handleOverlayClick} open={open}>
      <ModalContainer>
        <h1>Eliminar?</h1>
        <ButtonsContainer>
          <CancelButton onClick={() => setOpen(undefined)}>
            Cancelar
          </CancelButton>
          <DeleteButton onClick={() => handleDelete(open as string)}>
            Eliminar
          </DeleteButton>
        </ButtonsContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}
