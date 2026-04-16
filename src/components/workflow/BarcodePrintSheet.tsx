import { barcodeLabels } from "../../data/mockData";
import { useAppStore } from "../../store/useAppStore";

export function BarcodePrintSheet() {
  const pushToast = useAppStore((state) => state.pushToast);

  return (
    <section className="glass-card p-4">
      <h3 className="text-base font-semibold">Barcode Print Controls</h3>
      <p className="text-xs text-clinic-700">
        Batch print and reprint with compact label format.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            pushToast(
              "Batch print queued",
              `${barcodeLabels.length} labels added to print queue.`,
            )
          }
          className="rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
        >
          Print All
        </button>
        <button
          type="button"
          onClick={() =>
            pushToast(
              "Reprint processed",
              "Last printed batch has been reissued.",
            )
          }
          className="rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm font-semibold"
        >
          Reprint
        </button>
      </div>
    </section>
  );
}
