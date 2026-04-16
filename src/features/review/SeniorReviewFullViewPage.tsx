import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHeader } from "../../components/layout/PageHeader";
import { patients } from "../../data/mockData";

export function SeniorReviewFullViewPage() {
  const [searchParams] = useSearchParams();
  const patientId = searchParams.get("patientId") ?? "P-90021";
  const testName = searchParams.get("test") ?? "Thyroid Profile";

  const patient = useMemo(
    () => patients.find((item) => item.id === patientId),
    [patientId],
  );

  return (
    <div className="space-y-4">
      <PageHeader
        title="Senior Review Full View"
        subtitle={`Complete result detail for ${patientId} • ${testName}`}
      />

      <section className="glass-card p-4">
        <h3 className="text-base font-semibold">Patient Summary</h3>
        <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
          <Info label="Patient ID" value={patientId} />
          <Info
            label="Patient Name"
            value={patient?.name ?? "Unknown Patient"}
          />
          <Info
            label="Age/Gender"
            value={patient ? `${patient.age} / ${patient.gender}` : "N/A"}
          />
          <Info label="Phone" value={patient?.phone ?? "N/A"} />
          <Info label="Doctor" value={patient?.doctor ?? "N/A"} />
          <Info label="Priority" value={patient?.priority ?? "normal"} />
        </div>
      </section>

      <section className="glass-card p-4">
        <h3 className="text-base font-semibold">Result Detail ({testName})</h3>
        <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
          <Info label="T3 (ng/mL)" value="3.1" />
          <Info label="T4 (ug/dL)" value="9.5" />
          <Info label="TSH (uIU/mL)" value="6.7 (High)" highlight />
          <Info
            label="Reference Range"
            value="T3: 0.8-2.0, T4: 5-12, TSH: 0.4-5.5"
          />
        </div>
        <div className="mt-3 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          Critical flag: TSH value is above upper limit, senior review required.
        </div>
        <div className="mt-3 rounded-xl border border-clinic-100 bg-white p-3 text-sm">
          <p className="font-semibold">Technician Remarks</p>
          <p className="text-clinic-700">
            Possible hypothyroid trend. Suggested clinical correlation and
            follow-up.
          </p>
        </div>
      </section>
    </div>
  );
}

function Info({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-2.5 ${
        highlight
          ? "border-rose-200 bg-rose-50 text-rose-700"
          : "border-clinic-100 bg-white text-clinic-800"
      }`}
    >
      <p className="text-[11px] uppercase tracking-wide text-clinic-600">
        {label}
      </p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}
