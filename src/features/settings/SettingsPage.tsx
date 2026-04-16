import { PageHeader } from "../../components/layout/PageHeader";

const settingsRows = [
  "Test category setup",
  "Sample type setup",
  "Barcode label preferences",
  "Role color theme",
  "Notification preferences",
  "Compact / comfortable view",
  "Print layout preferences",
  "Language placeholder (Bangla / English)",
];

export function SettingsPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Settings"
        subtitle="Operational configuration placeholders ready for backend-driven controls."
      />
      <section className="glass-card p-4">
        <div className="grid gap-2 md:grid-cols-2">
          {settingsRows.map((row) => (
            <label
              key={row}
              className="flex items-center justify-between rounded-xl border border-clinic-100 bg-white p-3 text-sm"
            >
              <span>{row}</span>
              <input type="checkbox" defaultChecked />
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
