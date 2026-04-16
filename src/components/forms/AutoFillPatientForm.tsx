import { useAppStore } from "../../store/useAppStore";
import { formatDateTime } from "../../utils/format";

export function AutoFillPatientForm() {
  const patient = useAppStore((state) => state.selectedPatient);

  return (
    <section className="glass-card p-4">
      <h3 className="text-base font-semibold">Patient Info (Auto Fill)</h3>
      {patient ? (
        <div className="mt-3 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
          <Field label="Patient Name" value={patient.name} />
          <Field label="Patient ID" value={patient.id} />
          <Field label="Age" value={String(patient.age)} />
          <Field label="Gender" value={patient.gender} />
          <Field label="Phone" value={patient.phone} />
          <Field label="Ref Doctor" value={patient.doctor} />
          <Field label="Visit Date" value={formatDateTime(patient.visitDate)} />
          <Field label="Priority" value={patient.priority} />
          <Field
            label="Ordered Tests"
            value={patient.orderedTests.join(", ")}
          />
          <Field label="History" value={patient.previousSummary} />
        </div>
      ) : (
        <p className="mt-3 text-sm text-clinic-700">No patient selected yet.</p>
      )}
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-clinic-100 bg-white p-2.5">
      <p className="text-[11px] uppercase tracking-wide text-clinic-600">
        {label}
      </p>
      <p className="text-sm font-semibold text-clinic-900">{value}</p>
    </div>
  );
}
