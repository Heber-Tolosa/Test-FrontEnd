import { GrBook } from "react-icons/gr";
import styled from "styled-components";
import ButtonsIndex from "../Components/ButtonsIndex";
import { GiWhiteBook } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function IndexPage() {
  const MainTitle = styled.h1`
    font-size: xxx-large;
    text-transform: uppercase;
    color: #45a049;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const FeaturesContainer = styled.ul`
    width: 50%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 10px;
  `;
  const ListFeatures = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
    margin: auto;

    li {
      font-size: 16px;
      margin-bottom: 10px;
      color: #555;
    }
    li::after {
      content: "✔";
      margin-right: 10px;
      color: #45a049;
    }
  `;
  return (
    <body>
      <MainTitle>
        <GrBook />
        Book Storage
      </MainTitle>
      <p
        style={{
          textAlign: "center",
          marginTop: "-10px",
          color: "#B0B0B0",
          fontWeight: 500,
        }}
      >
        Test front-end created by Heber Tolosa
      </p>

      <FeaturesContainer>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#555",
            textAlign: "justify",
            fontWeight: 700,
            marginBottom: "9px",
          }}
        >
          Esta página foi criada como parte de um teste técnico e oferece
          diversas funcionalidades para gerenciar livros e autores. Você pode:
        </p>
        <ListFeatures>
          <li>
            Adicionar livros: Inclua novos livros à plataforma com facilidade.
          </li>
          <li>Editar livros: Modifique os dados de livros já cadastrados.</li>
          <li>Excluir livros: Remova livros da sua lista de forma simples.</li>
          <li>
            Criar autores: Cadastre novos autores para organizar suas obras.
          </li>
          <li>
            Editar autores: Altere as informações dos autores já cadastrados.
          </li>
          <li>Excluir autores: Exclua autores que não são mais necessários.</li>
          <li>
            Adicionar aos favoritos: Marque livros e autores como favoritos para
            fácil acesso.
          </li>
        </ListFeatures>
      </FeaturesContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <ButtonsIndex title="Livros" icon={<GiWhiteBook />} />
        <ButtonsIndex title="Autores" icon={<IoPersonSharp />} />
        <ButtonsIndex title="Favoritos" icon={<FaStar />} />
      </div>
    </body>
  );
}
