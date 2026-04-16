import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function ChartCard({ title, subtitle, children }: ChartCardProps) {
  return (
    <section className="glass-card overflow-hidden p-3 md:p-5">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mb-3 text-xs text-clinic-700 md:text-sm">{subtitle}</p>
      <div className="h-56 w-full md:h-64">{children}</div>
    </section>
  );
}
