import { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";
import CreateBookModal from "../Components/CreateBookModal";
import { useForm } from "react-hook-form";
import { BookItem } from "../types";
import { v4 as uuidv4 } from "uuid";
import BooksTable from "../Components/BooksTable";
import DeleteModal from "../Components/DeleteModal";
import BookDetails from "../Components/BookDetails";

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

export default function BooksPage() {
  const {
    setOpenAddBookModal,
    setBooksList,
    booksList,
    setOpenDeleteModal,
    openDeleteModal,
  } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookItem>();

  const onSubmit = handleSubmit((data) => {
    const newBooksData: BookItem = { ...data, id: uuidv4() };
    setBooksList([...booksList, newBooksData]);
    reset();
    setOpenAddBookModal(false);
    alert("Livro cadastrado");
  });

  const onDelete = (id: string) => {
    setOpenDeleteModal(id);
  };

  const handleDelete = (id: string) => {
    const booksFiltered = booksList.filter((item) => item.id !== id);
    setBooksList(booksFiltered);
    setOpenDeleteModal(undefined);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Livros</h1>
      <CreateButton onClick={() => setOpenAddBookModal(true)}>
        Criar novo livro{" "}
        <IoMdAddCircle style={{ height: "20px", width: "20px" }} />
      </CreateButton>
      <BooksTable data={booksList} onDelete={onDelete} />
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        handleDelete={handleDelete}
      />
      <BookDetails />
      <CreateBookModal
        errors={errors}
        onSubmit={onSubmit}
        register={register}
        reset={reset}
      />
    </>
  );
}
