import Barcode from "react-barcode";
import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BarcodeLabelCard } from "../../components/workflow/BarcodeLabelCard";
import { BarcodePrintSheet } from "../../components/workflow/BarcodePrintSheet";
import { PageHeader } from "../../components/layout/PageHeader";
import { barcodeLabels } from "../../data/mockData";
import { useAppStore } from "../../store/useAppStore";

export function BarcodeLabelsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pushToast = useAppStore((state) => state.pushToast);
  const tokenQueue = useAppStore((state) => state.tokenQueue);
  const selectedToken = searchParams.get("token");

  const selectedTokenItem = useMemo(
    () =>
      selectedToken
        ? tokenQueue.find((item) => item.token === selectedToken)
        : undefined,
    [selectedToken, tokenQueue],
  );

  return (
    <div className="space-y-4">
      <PageHeader
        title="Barcode & Label Management"
        subtitle="Generate, preview, print, and reprint compact patient-test labels."
      />

      {selectedTokenItem ? (
        <section className="glass-card p-4">
          <h3 className="text-base font-semibold">QR / Barcode Preview</h3>
          <p className="text-sm text-clinic-700">
            Token: {selectedTokenItem.token} • {selectedTokenItem.patientName}
          </p>

          <div className="mt-3 inline-flex rounded-2xl border border-clinic-100 bg-white p-3">
            <Barcode
              value={`${selectedTokenItem.patientId}-${selectedTokenItem.token}`}
              height={60}
              width={1.4}
              displayValue={false}
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                pushToast(
                  "Print started",
                  `${selectedTokenItem.token} label sent to print queue.`,
                )
              }
              className="rounded-xl bg-clinic-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Print
            </button>
            <button
              type="button"
              onClick={() => navigate("/token-queue")}
              className="rounded-xl border border-clinic-200 bg-white px-4 py-2 text-sm font-semibold text-clinic-800"
            >
              Cancel
            </button>
          </div>
        </section>
      ) : null}

      <BarcodePrintSheet />
      <section className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {barcodeLabels.map((label) => (
          <BarcodeLabelCard key={label.id} label={label} />
        ))}
      </section>
    </div>
  );
}
