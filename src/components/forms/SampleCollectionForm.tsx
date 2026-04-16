import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";

export function SampleCollectionForm() {
  const [barcode, setBarcode] = useState("P-90021-THY-T-1201");
  const [remarks, setRemarks] = useState("Serum sample clear");
  const navigate = useNavigate();
  const pushToast = useAppStore((state) => state.pushToast);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        pushToast(
          "Sample collected",
          `Barcode ${barcode} marked and sent to processing queue.`,
        );
        navigate("/processing-queue");
      }}
      className="glass-card grid gap-3 p-4"
    >
      <h3 className="text-base font-semibold">
        Sample Collection Confirmation
      </h3>
      <label className="text-sm">
        Barcode Scan / Search
        <input
          value={barcode}
          onChange={(event) => setBarcode(event.target.value)}
          className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
        />
      </label>
      <label className="text-sm">
        Sample Condition & Remarks
        <textarea
          value={remarks}
          onChange={(event) => setRemarks(event.target.value)}
          className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
        />
      </label>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <button
          type="button"
          className="rounded-xl border border-clinic-200 bg-white px-3 py-2 font-semibold"
        >
          Mark Recollect
        </button>
        <button
          type="submit"
          className="rounded-xl bg-clinic-600 px-3 py-2 font-semibold text-white"
        >
          Send To Processing
        </button>
      </div>
      <button
        type="button"
        onClick={() => navigate("/processing-queue")}
        className="rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm font-semibold text-clinic-800"
      >
        Processing Queue
      </button>
    </form>
  );
}
