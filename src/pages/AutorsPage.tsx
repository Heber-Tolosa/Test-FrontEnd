import { IoMdAddCircle } from "react-icons/io";
import styled from "styled-components";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { authorItem } from "../types";
import AuthorsTable from "../Components/AuthorsTable";
import { AuthorsContext } from "../context/AuthorsContext";
import CreateAuthorModal from "../Components/CreateAuthorModal";
import DeleteModal from "../Components/DeleteModal";
import AuthorDetails from "../Components/AuthorDetails";

const CreateButton = styled.button`
  margin: auto;
  width: 10%;
  display: flex;
  margin-top: 10px;
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

export default function AuthorsPage() {
  const {
    authorsList,
    setAuthorList,
    setOpenAddAuthorModal,
    setOpenDeleteModal,
    openDeleteModal,
  } = useContext(AuthorsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<authorItem>();

  const onSubmit = handleSubmit((data) => {
    const newAuthorData: authorItem = { ...data, id: uuidv4() };
    setAuthorList([...authorsList, newAuthorData]);
    reset();
    setOpenAddAuthorModal(false);
    alert("Autor cadastrado");
  });

  const onDelete = (id: string) => {
    setOpenDeleteModal(id);
  };

  const handleDelete = (id: string) => {
    const authorsFiltered = authorsList.filter((item) => item.id !== id);
    setAuthorList(authorsFiltered);
    setOpenDeleteModal(undefined);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Autores</h1>
      <CreateButton onClick={() => setOpenAddAuthorModal(true)}>
        Criar Novo autor{" "}
        <IoMdAddCircle style={{ height: "20px", width: "20px" }} />
      </CreateButton>

      <AuthorsTable data={authorsList} onDelete={onDelete} />
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        handleDelete={handleDelete}
      />
      <AuthorDetails />
      <CreateAuthorModal
        errors={errors}
        onSubmit={onSubmit}
        register={register}
        reset={reset}
      />
    </>
  );
}
