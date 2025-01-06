import { Link } from "react-router-dom";
import styled from "styled-components";

type ButtonsIndexProps = {
  title: string;
  icon: JSX.Element;
  url: string;
};

export default function ButtonsIndex({ title, icon, url }: ButtonsIndexProps) {
  const Button = styled.button`
    height: 150px;
    width: 150px;
    border-radius: 0.5rem;
    border: 1px solid #1377d1;
    cursor: pointer;
    background: #1890ff;
    color: white;

    &:hover {
      transform: scale(1.05);
      transition: 0.3s;

      background: #0966cc;
    }
  `;

  const Title = styled.p`
    margin-top: 10px;
    font-weith: 700;
  `;
  return (
    <Link to={url}>
      <Button>
        {icon}
        <Title>{title}</Title>
      </Button>
    </Link>
  );
}
