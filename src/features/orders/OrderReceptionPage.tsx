import { availableTests } from "../../data/mockData";
import { PageHeader } from "../../components/layout/PageHeader";
import { useAppStore } from "../../store/useAppStore";

export function OrderReceptionPage() {
  const pushToast = useAppStore((state) => state.pushToast);
  return (
    <div className="space-y-4">
      <PageHeader
        title="Order Reception"
        subtitle="Select ordered tests, urgency and sample instructions before label generation."
      />
      <section className="glass-card p-4">
        <h3 className="text-base font-semibold">
          Ordered Tests Popup / Drawer Preview
        </h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {availableTests.map((test) => (
            <label
              key={test.id}
              className="flex items-start gap-2 rounded-xl border border-clinic-100 bg-white p-3"
            >
              <input
                type="checkbox"
                defaultChecked={test.id === "thyroid"}
                className="mt-1"
              />
              <span>
                <p className="text-sm font-semibold">{test.name}</p>
                <p className="text-xs text-clinic-700">
                  {test.sampleType} • {test.instruction}
                </p>
              </span>
            </label>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() =>
              pushToast("Urgent marked", "Selected tests moved to urgent lane.")
            }
            className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700"
          >
            Mark Urgent
          </button>
          <button
            type="button"
            onClick={() =>
              pushToast(
                "Barcode generated",
                "Label cards prepared for selected tests.",
              )
            }
            className="rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Generate Barcode
          </button>
        </div>
      </section>
    </div>
  );
}
