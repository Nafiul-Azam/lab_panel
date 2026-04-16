import { PageHeader } from "../../components/layout/PageHeader";
import { performanceMetrics } from "../../data/mockData";

export function StaffPerformancePage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Staff / Role Performance"
        subtitle="Technician and reviewer productivity with average TAT and pending count."
      />
      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {performanceMetrics.map((metric) => (
          <article key={metric.id} className="glass-card p-4">
            <p className="text-sm font-semibold">{metric.staffName}</p>
            <p className="text-xs uppercase tracking-wide text-clinic-700">
              {metric.role}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-xl bg-clinic-50 p-2 text-center">
                <p className="font-bold">{metric.completed}</p>
                <p>Done</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-2 text-center">
                <p className="font-bold">{metric.pending}</p>
                <p>Pending</p>
              </div>
              <div className="rounded-xl bg-sky-50 p-2 text-center">
                <p className="font-bold">{metric.tatAverageMins}</p>
                <p>TAT min</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
