import { useState } from "react";
import { PageHeader } from "../../components/layout/PageHeader";
import { SearchBar } from "../../components/shared/SearchBar";
import { useAppStore } from "../../store/useAppStore";

export function ReportDeliveryPage() {
  const [query, setQuery] = useState("");
  const pushToast = useAppStore((state) => state.pushToast);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Report Delivery / Dispatch"
        subtitle="Search by token, patient ID, or mobile and mark report handover."
      />
      <section className="glass-card space-y-3 p-4">
        <SearchBar
          placeholder="Search patient/token/mobile"
          value={query}
          onChange={setQuery}
        />
        <div className="rounded-2xl border border-clinic-100 bg-white p-3">
          <p className="text-sm font-semibold">
            Ready Report: P-90021 • Thyroid Profile
          </p>
          <p className="text-xs text-clinic-700">
            Collected by: Self • Ready for SMS/WhatsApp notification
            placeholder.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button className="rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm font-semibold">
              Print Report
            </button>
            <button className="rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm font-semibold">
              Download PDF
            </button>
            <button
              onClick={() =>
                pushToast(
                  "Delivered",
                  "Report handover history updated with timestamp.",
                )
              }
              className="rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
            >
              Mark Delivered
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
