import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { authorItem, BookItem } from "../types";

type DataContextProps = {
  authorsList: authorItem[];
  setAuthorList: Dispatch<SetStateAction<authorItem[]>>;
  openAddAuthorModal: boolean;
  setOpenAddAuthorModal: Dispatch<SetStateAction<boolean>>;
  openAddBookModal: boolean;
  setOpenAddBookModal: Dispatch<SetStateAction<boolean>>;
  openDeleteModal: string | undefined;
  setOpenDeleteModal: Dispatch<SetStateAction<string | undefined>>;
  openAuthorDetailsModal: authorItem | undefined;
  setOpenAuthorDetailsModal: Dispatch<SetStateAction<authorItem | undefined>>;
  booksList: BookItem[];
  setBooksList: Dispatch<SetStateAction<BookItem[]>>;
  openBooksDetailsModal: BookItem | undefined;
  setOpenBooksDetailsModal: Dispatch<SetStateAction<BookItem | undefined>>;
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

type DataProviderProps = {
  children: ReactNode;
};
export const DataProvider = ({ children }: DataProviderProps) => {
  const initialAuthorsList = (): authorItem[] => {
    const localStorageList = localStorage.getItem("authors");
    return localStorageList ? JSON.parse(localStorageList) : [];
  };
  const initialBooksList = (): BookItem[] => {
    const localStorageList = localStorage.getItem("books");
    return localStorageList ? JSON.parse(localStorageList) : [];
  };
  const [authorsList, setAuthorList] = useState(initialAuthorsList);
  const [booksList, setBooksList] = useState(initialBooksList);

  const [openAddAuthorModal, setOpenAddAuthorModal] = useState(false);
  const [openAddBookModal, setOpenAddBookModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<string | undefined>(
    undefined
  );
  const [openAuthorDetailsModal, setOpenAuthorDetailsModal] = useState<
    authorItem | undefined
  >(undefined);
  const [openBooksDetailsModal, setOpenBooksDetailsModal] = useState<
    BookItem | undefined
  >(undefined);

  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authorsList));
  }, [authorsList]);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(booksList));
  }, [booksList]);

  return (
    <DataContext.Provider
      value={{
        authorsList,
        setAuthorList,
        openAddAuthorModal,
        setOpenAddAuthorModal,
        openDeleteModal,
        setOpenDeleteModal,
        openAuthorDetailsModal,
        setOpenAuthorDetailsModal,
        openAddBookModal,
        setOpenAddBookModal,
        booksList,
        setBooksList,
        openBooksDetailsModal,
        setOpenBooksDetailsModal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
