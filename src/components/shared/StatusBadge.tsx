import type { WorkflowStatus } from "../../types";
import { cn } from "../../utils/cn";

const labelMap: Record<WorkflowStatus, string> = {
  pending: "Pending",
  in_progress: "In Progress",
  waiting_review: "Waiting Review",
  reviewed: "Reviewed",
  approved: "Approved",
  delivered: "Delivered",
};

const styleMap: Record<WorkflowStatus, string> = {
  pending: "bg-slate-100 text-slate-700",
  in_progress: "bg-sky-100 text-sky-700",
  waiting_review: "bg-amber-100 text-amber-700",
  reviewed: "bg-purple-100 text-purple-700",
  approved: "bg-emerald-100 text-emerald-700",
  delivered: "bg-clinic-100 text-clinic-700",
};

export function StatusBadge({ status }: { status: WorkflowStatus }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-xs font-semibold",
        styleMap[status],
      )}
    >
      {labelMap[status]}
    </span>
  );
}
