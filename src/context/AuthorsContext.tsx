import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { authorItem } from "../types";

type AuthorsContextProps = {
  authorsList: authorItem[];
  setAuthorList: Dispatch<SetStateAction<authorItem[]>>;
  openAddAuthorModal: boolean;
  setOpenAddAuthorModal: Dispatch<SetStateAction<boolean>>;
  openDeleteModal: string | undefined;
  setOpenDeleteModal: Dispatch<SetStateAction<string | undefined>>;
  openAuthorDetailsModal: authorItem | undefined;
  setOpenAuthorDetailsModal: Dispatch<SetStateAction<authorItem | undefined>>;
};

export const AuthorsContext = createContext<AuthorsContextProps>(
  {} as AuthorsContextProps
);

type AuthorsProviderProps = {
  children: ReactNode;
};
export const AuthorsProvider = ({ children }: AuthorsProviderProps) => {
  const initialAuthorsList = (): authorItem[] => {
    const localStorageList = localStorage.getItem("authors");
    return localStorageList ? JSON.parse(localStorageList) : [];
  };
  const [authorsList, setAuthorList] = useState(initialAuthorsList);
  const [openAddAuthorModal, setOpenAddAuthorModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<string | undefined>(
    undefined
  );
  const [openAuthorDetailsModal, setOpenAuthorDetailsModal] = useState<
    authorItem | undefined
  >(undefined);

  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authorsList));
  }, [authorsList]);

  return (
    <AuthorsContext.Provider
      value={{
        authorsList,
        setAuthorList,
        openAddAuthorModal,
        setOpenAddAuthorModal,
        openDeleteModal,
        setOpenDeleteModal,
        openAuthorDetailsModal,
        setOpenAuthorDetailsModal,
      }}
    >
      {children}
    </AuthorsContext.Provider>
  );
};
