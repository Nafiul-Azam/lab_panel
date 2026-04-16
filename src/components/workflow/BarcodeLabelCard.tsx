import Barcode from "react-barcode";
import type { BarcodeLabel } from "../../types";

export function BarcodeLabelCard({ label }: { label: BarcodeLabel }) {
  return (
    <article className="mobile-card p-3">
      <div className="flex items-start justify-between text-xs text-clinic-700">
        <span>{label.patientId}</span>
        <span>{label.testCode}</span>
      </div>
      <p className="text-sm font-semibold">{label.patientName}</p>
      <div className="mt-2 overflow-hidden rounded-xl bg-white p-2">
        <Barcode
          value={`${label.patientId}-${label.testCode}-${label.token}`}
          height={40}
          width={1.2}
          displayValue={false}
        />
      </div>
      <p className="mt-1 text-[11px] text-clinic-700">
        Sample: {label.sampleType}
      </p>
    </article>
  );
}
