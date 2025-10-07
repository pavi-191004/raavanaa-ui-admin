import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, useReactTable, type SortingState } from "@tanstack/react-table";
import { useMemo, useState} from "react";
import { Table } from "react-bootstrap";
import { FaEdit, FaSort, FaSortDown, FaSortUp, FaTrash } from "react-icons/fa";


type Recruiter = {
  id: number;
  companyName: string;
  hrName: string;
  hrContact: {
    email: string;
    primaryEmail: string;
    secondaryEmail?: string;
  }
  contactNumber: {
    number: any;
    phoneNumber: string,
    mobileNumber: string,
  }
  jobRoles: string,
  industry: string;
  location: string;
};


const columnHelper = createColumnHelper<Recruiter>();

export const RecruiterTable = ({
  recruiters,
  onEdit,
  onDelete,
}: {
  recruiters: Recruiter[];
  onEdit: (r: Recruiter) => void;
  onDelete: (id: number) => void;
}) => {
  const columns = useMemo(
    () => [
      columnHelper.accessor("companyName", {
        header: "Company Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("hrName", {
        header: "Hr Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("hrContact", {
        header: "HR Email",
        cell: (info) => {
          const contact = info.getValue() as Recruiter["hrContact"];
          return (
            <div className="d-flex flex-column">
              <span>{contact.email}</span>
              <span>{contact.primaryEmail}</span>
              <span>{contact.secondaryEmail || ""}</span>
            </div>
          );
        },
      }),
      columnHelper.accessor("contactNumber", {
        header: "Contact Number",
        cell: (info) => {
          const contact = info.getValue();
          return (
            <div className="d-flex flex-column">
              <span>{contact.number}</span>
              <span>{contact.phoneNumber}</span>
              <span>{contact.mobileNumber || ""}</span>
            </div>
          );
        },
      }),
      columnHelper.accessor("industry", {
        header: "Industry",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("location", {
        header: "Location",
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
    <div className="d-flex gap-3">
      <button
        className="btn btn-outline-primary d-flex align-items-center gap-2 px-3 py-1"
        style={{fontWeight: 500,fontSize: "0.9rem",borderWidth: "1px",}}
        onClick={() => onEdit(row.original)}
      >
        <FaEdit />
        <span>Edit</span>
      </button>

      <button
        className="btn btn-outline-danger d-flex align-items-center gap-2 px-3 py-1"
        style={{fontWeight: 500,fontSize: "0.9rem",borderWidth: "1px",}}
        onClick={() => onDelete(row.original.id)}
      >
        <FaTrash />
        <span>Delete</span>
      </button>
    </div>
        ),
      }),
    ],
    [onEdit, onDelete]
  );

  const [searchValue, setSearchValue] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const filteredData = useMemo(() => {
    if (!searchValue.trim()) return recruiters;
    const lowerSearch = searchValue.toLowerCase();
    return recruiters.filter(r =>
      r.companyName.toLowerCase().includes(lowerSearch) ||
      r.hrName.toLowerCase().includes(lowerSearch) ||
      r.industry.toLowerCase().includes(lowerSearch) ||
      r.location.toLowerCase().includes(lowerSearch)
    );
  }, [recruiters, searchValue]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <div className=" d-flex flex-column mb-5 table-responsive">
      <Table hover>
        <thead className="border-bottom" style={{ backgroundColor: "#141010ff" }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div
                    className={header.column.getCanSort() ? "cursor-pointer select-none d-flex align-items-center" : ""}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() && (
                      <span className="ms-2">
                        {header.column.getIsSorted() === "asc" ? (
                          <FaSortUp className="text-primary" />
                        ) : header.column.getIsSorted() === "desc" ? (
                          <FaSortDown className="text-primary" />
                        ) : (
                          <FaSort className="text-muted opacity-50" />
                        )}
                      </span>
                    )}
                  </div>
                </th>

              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
