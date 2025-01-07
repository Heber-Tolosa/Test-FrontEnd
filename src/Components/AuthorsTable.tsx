import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { authorItem } from "../types";
import styled from "styled-components";

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

export default function AuthorsTable({ data }: { data: authorItem[] }) {
  const columnHelper = createColumnHelper<authorItem>();

  const columns = [
    columnHelper.accessor("id", {
      header: () => "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Nome",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.getValue(),
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
            {headerGroup.headers.map((header) => (
              <AuthorsTableHeader
                style={header.id === "id" ? { width: "30%" } : {}}
                key={header.id}
              >
                <div>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              </AuthorsTableHeader>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <AuthorsTableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </AuthorsTableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </MainAuthorsTable>
  );
}
