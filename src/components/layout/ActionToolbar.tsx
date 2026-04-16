import type { ReactNode } from "react";

export function ActionToolbar({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-clinic-100 bg-white/75 p-2">
      {children}
    </div>
  );
}
