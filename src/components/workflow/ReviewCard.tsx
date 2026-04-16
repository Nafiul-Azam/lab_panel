import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { patients } from "../../data/mockData";
import { useAppStore } from "../../store/useAppStore";

export function ReviewCard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pushToast = useAppStore((state) => state.pushToast);

  const patientId = searchParams.get("patientId") ?? "P-90021";
  const testName = searchParams.get("test") ?? "Thyroid Profile";

  const patient = useMemo(
    () => patients.find((item) => item.id === patientId),
    [patientId],
  );

  return (
    <article className="glass-card p-4">
      <h3 className="text-base font-semibold">Senior Technician Review</h3>
      <div className="mt-2 rounded-xl border border-clinic-100 bg-clinic-50 p-3 text-sm">
        <p className="font-semibold">Reviewing Result</p>
        <p className="text-clinic-800">
          {patientId} • {patient?.name ?? "Unknown Patient"}
        </p>
        <p className="text-clinic-700">Test: {testName}</p>
      </div>

      <p className="mt-3 text-sm text-clinic-700">
        TSH abnormal flag detected. Compare with previous history.
      </p>
      <textarea
        placeholder="Review note"
        className="mt-3 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm"
      />
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() =>
            navigate(
              `/senior-review/full-view?patientId=${patientId}&test=${encodeURIComponent(testName)}`,
            )
          }
          className="rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm font-semibold"
        >
          Full View
        </button>
        <button
          type="button"
          onClick={() =>
            navigate(
              `/approval-verification?patientId=${patientId}&test=${encodeURIComponent(testName)}`,
            )
          }
          className="rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
        >
          Approve Forward
        </button>
        <button
          type="button"
          onClick={() =>
            navigate(
              `/senior-review/edit?patientId=${patientId}&test=${encodeURIComponent(testName)}`,
            )
          }
          className="rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm font-semibold"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            pushToast(
              "Review canceled",
              "Returned to result entry for update.",
            );
            navigate(`/result-entry?patientId=${patientId}`);
          }}
          className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700"
        >
          Cancel
        </button>
      </div>
    </article>
  );
}
