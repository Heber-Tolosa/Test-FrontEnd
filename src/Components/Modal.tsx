import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import styled from "styled-components";
import { authorItem } from "../types";

type ModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
  resetForm: UseFormReset<authorItem>;
};

const ModalOverlay = styled.div<{ open: boolean }>`
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
  width: 50%;
  height: 75%;
  background: #3a3f44;
  border-radius: 0.5rem;
`;

const ModalHeader = styled.div`
  display: flex;
  background: #1890ff;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 6%;
  align-items: center;
  position: relative;
  color: white;
  font-weight: 700;
  font-size: 25px;
`;
const ModalCloseButton = styled.button`
  position: absolute;
  right: 3%;
  background: #ff4d4f;
  color: white;
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 0.2rem;
  font-size: 22px;
  font-weight: 700;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    background: #d9363e;
  }
`;

export default function Modal({
  open,
  setOpen,
  title,
  children,
  resetForm,
}: ModalProps) {
  console.log("OPEn", open);

  const handleOverlayClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
      resetForm();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick} open={open}>
      <ModalContainer>
        <ModalHeader>
          <p style={{ width: "100%", textAlign: "center" }}>{title}</p>
          <ModalCloseButton
            onClick={() => {
              setOpen(false);
              resetForm();
            }}
          >
            X
          </ModalCloseButton>
        </ModalHeader>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
}
