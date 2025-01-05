import styled from "styled-components";

type ButtonsIndexProps = {
  title: string;
  icon: JSX.Element;
};

export default function ButtonsIndex({ title, icon }: ButtonsIndexProps) {
  const Button = styled.button`
    height: 150px;
    width: 150px;
    background: none;
    border-radius: 0.5rem;
    border: 1px solid black;
    cursor: pointer;
  `;
  return (
    <Button>
      {icon}
      <p>{title}</p>
    </Button>
  );
}
