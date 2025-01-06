import styled from "styled-components";

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #45a049;
    transform: scale(1.05);
    transition: 0.3s;
    font-weight: 600;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const HeaderContainer = styled.header`
  width: 100%;
  background: rgb(30 41 59 / var(--tw-bg-opacity, 1));
  height: 5vh;
  color: white;
`;
export default function Header() {
  return (
    <HeaderContainer>
      <LinksContainer>
        <Link href="/">Início</Link>
        <Link href="/books">Livros</Link>
        <Link href="/autors">Autores</Link>
        <Link href="/favorites">Favoritos</Link>
      </LinksContainer>
    </HeaderContainer>
  );
}
