import type { Priority } from "../../types";
import { cn } from "../../utils/cn";

const styleMap: Record<Priority, string> = {
  normal: "bg-clinic-50 text-clinic-700 border border-clinic-200",
  urgent: "bg-amber-100 text-amber-700 border border-amber-200",
  critical: "bg-rose-100 text-rose-700 border border-rose-200",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide",
        styleMap[priority],
      )}
    >
      {priority}
    </span>
  );
}
