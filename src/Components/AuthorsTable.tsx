import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { authorItem } from "../types";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const MainAuthorsTable = styled.table`
  width: 60%;
  margin: auto;
  margin-top: 24px;
  border: 3px solid;
  border-collapse: collapse;
`;

const AuthorsTableHeader = styled.th`
  text-align: left;
  padding: 8px;
  border: 1px solid;
`;

const AuthorsTableCell = styled.td`
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

type AuthorsTableProps = {
  data: authorItem[];
  onDelete: (id: string) => void;
};

export default function AuthorsTable({ data, onDelete }: AuthorsTableProps) {
  const columnHelper = createColumnHelper<authorItem>();

  const columns = [
    /*  columnHelper.accessor("id", {
      header: () => "ID",
      cell: (info) => info.getValue(),
    }), */
    columnHelper.accessor("name", {
      header: () => "Nome",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.getValue(),
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
  return (
    <MainAuthorsTable>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              console.log("HEADER", header);
              return (
                <AuthorsTableHeader
                  style={header.index === 0 ? { width: "30%" } : {}}
                  key={header.index}
                >
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                </AuthorsTableHeader>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <AuthorsTableCell key={cell.id + Math.random()}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </AuthorsTableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </MainAuthorsTable>
  );
}
