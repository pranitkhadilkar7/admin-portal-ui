import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table"
import { User } from "./users-type"
import moment from "moment"

type Props = {
  data: User[]
}

const columnHelper = createColumnHelper<User>()

const defaultColumns = [
  columnHelper.accessor("id", {
    header: "#",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("isEmailVerified", {
    header: "Email Verified",
    cell: (info) => {
      if (info.getValue()) return "Yes"
      return "No"
    },
  }),
  columnHelper.accessor((row) => row.type, {
    id: "type",
    header: "Type",
    cell: (info) => {
      if (info.getValue() === "COMPANY") return "Fintech"
      return "Regulator"
    },
  }),
  columnHelper.accessor("createdAt", {
    header: "Created At",
    cell: (info) => {
      if (info.getValue()) {
        return moment(info.getValue()).format("MMM do YY")
      }
      return "---"
    },
  }),
]

export function UsersTable({ data }: Props) {
  const table = useReactTable({
    data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="">
      <table className="w-100">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-2 d-flex align-items-center"></div>
    </div>
  )
}
