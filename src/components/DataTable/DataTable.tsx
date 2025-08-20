import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: number | string }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // handle sorting
  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    const order = sortKey === col.key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(col.key);
    setSortOrder(order);
  };

  // sorted data
  const sortedData = sortKey
    ? [...data].sort((a, b) => {
        const valA = a[sortKey as keyof T];
        const valB = b[sortKey as keyof T];
        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : data;

  // handle row selection
  const toggleRow = (row: T) => {
    let updated: T[];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  // loading + empty state
  if (loading)
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-4 text-center text-gray-500"
      >
        Loading data...
      </div>
    );
  if (data.length === 0)
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-4 text-center text-gray-400"
      >
        No data available
      </div>
    );

  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
      <table role="table" className="min-w-full bg-white">
        <thead className="bg-gray-100 text-gray-700">
          <tr role="row">
            {selectable && (
              <th role="columnheader" className="p-3 text-left">
                Select
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                role="columnheader"
                aria-sort={
                  sortKey === col.key
                    ? sortOrder === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
                onClick={() => handleSort(col)}
                className={`p-3 text-left font-semibold cursor-pointer ${
                  col.sortable ? "hover:text-blue-600" : ""
                }`}
              >
                <span className="inline-flex items-center gap-1">
                  {col.title}
                  {col.sortable && (
                    <>
                      {sortKey === col.key ? (
                        sortOrder === "asc" ? (
                          <ChevronUpIcon className="w-4 h-4 text-gray-600" />
                        ) : (
                          <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                        )
                      ) : (
                        <ChevronUpIcon className="w-4 h-4 text-gray-300" />
                      )}
                    </>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={idx}
              role="row"
              aria-selected={selectedRows.includes(row) ? "true" : "false"}
              className="border-t hover:bg-gray-50 transition"
            >
              {selectable && (
                <td role="cell" className="p-3">
                  <input
                    type="checkbox"
                    aria-label={`Select row ${idx + 1}`}
                    checked={selectedRows.includes(row)}
                    onChange={() => toggleRow(row)}
                    className="h-4 w-4"
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} role="cell" className="p-3 text-gray-800">
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
