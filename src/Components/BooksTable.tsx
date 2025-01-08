import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BookItem } from "../types";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { MouseEvent, useContext } from "react";
import { DataContext } from "../context/DataContext";

const MainBooksTable = styled.table`
  width: 60%;
  margin: auto;
  margin-top: 24px;
  border: 3px solid;
  border-collapse: collapse;
`;

const BooksTableHeader = styled.th`
  text-align: left;
  padding: 8px;
  border: 1px solid;
`;

const BooksTableCell = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 11px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin: auto;
  display: flex;
  &:hover {
    background-color: #c0392b;
  }
`;
const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background: #696969;
  }
`;

type BooksTableProps = {
  data: BookItem[];
  onDelete: (id: string) => void;
};

export default function BooksTable({ data, onDelete }: BooksTableProps) {
  const { setOpenBooksDetailsModal, authorsList } = useContext(DataContext);
  const columnHelper = createColumnHelper<BookItem>();
  const columns = [
    columnHelper.accessor("name", {
      header: () => "Nome",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("pages", {
      header: () => "Páginas",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("author_id", {
      header: () => "Autor",
      cell: (info) => {
        const author = authorsList.find((item) => item.id === info.getValue());
        return <p>{author?.name}</p>;
      },
    }),
    columnHelper.accessor("id", {
      header: () => "",
      cell: (info) => (
        <DeleteButton onClick={() => onDelete(info.getValue())}>
          <FaTrashAlt />
        </DeleteButton>
      ),
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (e: MouseEvent<HTMLDivElement>, data: BookItem) => {
    if (e.target === e.currentTarget) {
      setOpenBooksDetailsModal(data);
    }
  };
  return (
    <MainBooksTable>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <BooksTableHeader
                  style={header.index === 0 ? { width: "30%" } : {}}
                  key={header.index}
                >
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                </BooksTableHeader>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <BooksTableCell
                onClick={(e) =>
                  handleRowClick(e, cell.getContext().row.original)
                }
                key={cell.id + Math.random()}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </BooksTableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </MainBooksTable>
  );
}
