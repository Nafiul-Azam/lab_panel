import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";

export function ApprovalCard() {
  const navigate = useNavigate();
  const pushToast = useAppStore((state) => state.pushToast);
  return (
    <article className="glass-card p-4">
      <h3 className="text-base font-semibold">Final Approval / Verification</h3>
      <p className="text-sm text-clinic-700">
        Digital signature placeholder with verifier timestamp.
      </p>
      <div className="mt-2 rounded-xl border border-dashed border-clinic-300 bg-white/70 p-3 text-sm">
        <p className="font-semibold">Verified by: Dr. Sanjida Hossain</p>
        <p>Timestamp: 16 Apr 2026, 10:48 AM</p>
        <p>Signature Placeholder: _____________</p>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700"
        >
          Return / Reject
        </button>
        <button
          type="button"
          onClick={() => {
            pushToast(
              "Report published",
              "Report status updated to Ready for Delivery.",
            );
            navigate("/report-delivery");
          }}
          className="rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
        >
          Verify & Publish
        </button>
      </div>
    </article>
  );
}
