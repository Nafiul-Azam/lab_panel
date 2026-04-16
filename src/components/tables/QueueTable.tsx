import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import type { ProcessingItem } from "../../types";
import { PriorityBadge } from "../shared/PriorityBadge";
import { StatusBadge } from "../shared/StatusBadge";

const helper = createColumnHelper<ProcessingItem>();

const columns = [
  helper.accessor("patientId", {
    header: "Patient ID",
    cell: (info) => info.getValue(),
  }),
  helper.accessor("testName", {
    header: "Test",
    cell: (info) => info.getValue(),
  }),
  helper.accessor("technician", {
    header: "Technician",
    cell: (info) => info.getValue(),
  }),
  helper.accessor("priority", {
    header: "Priority",
    cell: (info) => <PriorityBadge priority={info.getValue()} />,
  }),
  helper.accessor("status", {
    header: "Status",
    cell: (info) => <StatusBadge status={info.getValue()} />,
  }),
  helper.display({
    id: "action",
    header: "Action",
    cell: (info) => {
      const row = info.row.original;
      return (
        <Link
          to={`/result-entry?patientId=${row.patientId}`}
          className="inline-flex rounded-lg bg-clinic-600 px-2.5 py-1.5 text-xs font-semibold text-white"
        >
          Result Entry
        </Link>
      );
    },
  }),
];

interface QueueTableProps {
  data: ProcessingItem[];
}

export function QueueTable({ data }: QueueTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="grid gap-2 md:hidden">
        {data.map((item) => (
          <article
            key={item.id}
            className="mobile-card rounded-xl border border-clinic-100 p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-clinic-900">
                  {item.patientId}
                </p>
                <p className="text-xs text-clinic-700">{item.testName}</p>
              </div>
              <PriorityBadge priority={item.priority} />
            </div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <p className="text-xs text-clinic-700">Tech: {item.technician}</p>
              <StatusBadge status={item.status} />
            </div>
            <Link
              to={`/result-entry?patientId=${item.patientId}`}
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-clinic-600 px-3 py-2 text-xs font-semibold text-white"
            >
              Result Entry
            </Link>
          </article>
        ))}
      </div>

      <div className="hidden max-w-full overflow-x-auto rounded-2xl border border-clinic-100 bg-white/85 md:block">
        <table className="w-full min-w-[680px] text-left text-xs md:min-w-full md:text-sm">
          <thead className="bg-clinic-50 text-clinic-700">
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers.map((header) => (
                  <th
                    key={header.id}
                    className="whitespace-nowrap px-3 py-2 font-semibold"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t border-clinic-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="whitespace-nowrap px-3 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
