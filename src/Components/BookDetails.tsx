import { MouseEvent, useContext } from "react";
import { DataContext } from "../context/DataContext";
import styled from "styled-components";
import { authorItem } from "../types";

const ModalOverlay = styled.div<{ open: authorItem | undefined }>`
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
  width: 30%;
  height: 30%;
  background: #3a3f44;
  border-radius: 0.5rem;
`;

const ModalHeader = styled.div`
  display: flex;
  background: #1890ff;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 20%;
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

const ItemLabel = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const DataContent = styled.div`
  width: fit-content;
  margin: auto;
  margin-top: 20px;
`;

export default function BookDetails() {
  const { openBooksDetailsModal, setOpenBooksDetailsModal, authorsList } =
    useContext(DataContext);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenBooksDetailsModal(undefined);
    }
  };

  const authorData = authorsList.find(
    (item) => item.id === openBooksDetailsModal?.author_id
  );

  return (
    <ModalOverlay onClick={handleOverlayClick} open={openBooksDetailsModal}>
      <ModalContainer>
        <ModalHeader>
          <p style={{ width: "100%", textAlign: "center" }}>
            Livro {openBooksDetailsModal?.name}
          </p>
          <ModalCloseButton
            onClick={() => {
              setOpenBooksDetailsModal(undefined);
            }}
          >
            X
          </ModalCloseButton>
        </ModalHeader>
        <DataContent>
          <p>
            <ItemLabel>Nome:</ItemLabel> {openBooksDetailsModal?.name}
          </p>
          <p>
            <ItemLabel>Paginas:</ItemLabel> {openBooksDetailsModal?.pages}
          </p>
          <p>
            <ItemLabel>ID:</ItemLabel> {openBooksDetailsModal?.id}
          </p>
          <p>
            <ItemLabel>Autor:</ItemLabel> {authorData?.name}
          </p>
          <p>
            <ItemLabel>Autor email:</ItemLabel> {authorData?.email}
          </p>
          <p>
            <ItemLabel>Autor ID:</ItemLabel> {authorData?.id}
          </p>
        </DataContent>
      </ModalContainer>
    </ModalOverlay>
  );
}
