import { PageHeader } from "../../components/layout/PageHeader";
import { availableTests } from "../../data/mockData";

export function TestSelectionPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Test Selection"
        subtitle="Multi-select ordered tests with side summary and sample requirements."
      />
      <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
        <section className="glass-card p-4">
          <h3 className="text-base font-semibold">Test Drawer</h3>
          <div className="mt-3 space-y-2">
            {availableTests.map((test) => (
              <div
                key={test.id}
                className="rounded-xl border border-clinic-100 bg-white p-3 text-sm"
              >
                <p className="font-semibold">{test.name}</p>
                <p className="text-xs text-clinic-700">
                  Category: {test.category} • Sample: {test.sampleType}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="glass-card p-4">
          <h3 className="text-base font-semibold">Selected Tests Summary</h3>
          <ul className="mt-3 space-y-2 text-sm text-clinic-800">
            <li className="rounded-xl bg-clinic-50 p-2">Thyroid Profile</li>
            <li className="rounded-xl bg-clinic-50 p-2">CBC</li>
          </ul>
          <p className="mt-3 text-xs text-clinic-700">
            Instruction: Keep serum upright, avoid delay over 45 mins.
          </p>
        </section>
      </div>
    </div>
  );
}
