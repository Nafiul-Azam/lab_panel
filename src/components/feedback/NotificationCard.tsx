import { BellRing } from "lucide-react";
import type { NotificationItem } from "../../types";
import { cn } from "../../utils/cn";

interface NotificationCardProps {
  item: NotificationItem;
  onMarkRead: (id: string) => void;
}

export function NotificationCard({ item, onMarkRead }: NotificationCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border p-4 transition",
        item.read
          ? "border-clinic-100 bg-white/80"
          : "border-clinic-200 bg-clinic-50/80",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-3">
          <span className="rounded-xl bg-white p-2 text-clinic-700">
            <BellRing size={16} />
          </span>
          <div>
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="text-xs text-clinic-700">{item.message}</p>
            <p className="mt-1 text-xs text-clinic-600">
              Role: {item.role} • {item.time}
            </p>
          </div>
        </div>
        {!item.read ? (
          <button
            type="button"
            onClick={() => onMarkRead(item.id)}
            className="rounded-lg bg-clinic-100 px-2 py-1 text-xs font-semibold"
          >
            Mark read
          </button>
        ) : null}
      </div>
    </article>
  );
}
