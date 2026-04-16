import { AutoFillPatientForm } from "../../components/forms/AutoFillPatientForm";
import { PageHeader } from "../../components/layout/PageHeader";
import { PatientSearchPanel } from "../../components/workflow/PatientSearchPanel";
import { useAppStore } from "../../store/useAppStore";

export function PatientSearchPage() {
  const patient = useAppStore((state) => state.selectedPatient);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Patient Search & Auto-Fill"
        subtitle="Find by patient ID, token, or mobile and load complete details."
      />
      <div className="grid gap-3 lg:grid-cols-[1.25fr_1fr]">
        <PatientSearchPanel />
        <section className="glass-card p-4">
          <h3 className="text-base font-semibold">
            Previous Lab History Snippet
          </h3>
          <p className="mt-2 text-sm text-clinic-700">
            {patient?.previousSummary ?? "Search a patient to view history."}
          </p>
          <div className="mt-3 rounded-xl bg-clinic-50 p-3 text-xs text-clinic-700">
            Recent lookup: P-90021, P-90022, T-1203
          </div>
        </section>
      </div>
      <AutoFillPatientForm />
    </div>
  );
}
