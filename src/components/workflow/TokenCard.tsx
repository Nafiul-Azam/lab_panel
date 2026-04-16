import type { TokenItem } from "../../types";
import { PriorityBadge } from "../shared/PriorityBadge";

interface TokenCardProps {
  token: TokenItem;
  position: number;
  onProceed: (token: TokenItem) => void;
}

function toOrdinal(value: number) {
  const mod10 = value % 10;
  const mod100 = value % 100;

  if (mod10 === 1 && mod100 !== 11) return `${value}st`;
  if (mod10 === 2 && mod100 !== 12) return `${value}nd`;
  if (mod10 === 3 && mod100 !== 13) return `${value}rd`;
  return `${value}th`;
}

export function TokenCard({ token, position, onProceed }: TokenCardProps) {
  return (
    <article className="mobile-card p-3 md:rounded-2xl">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="mb-1 inline-flex rounded-full bg-clinic-100 px-2 py-0.5 text-[11px] font-semibold text-clinic-700">
            {toOrdinal(position)}
          </span>
          <p className="text-sm font-bold">{token.token}</p>
          <p className="text-xs text-clinic-700">{token.patientName}</p>
        </div>
        <PriorityBadge priority={token.priority} />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-clinic-700">
        <span>Waiting: {token.waitingMins}m</span>
        <span>Status: {token.status}</span>
      </div>
      <button
        type="button"
        onClick={() => onProceed(token)}
        className="mt-3 w-full rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
      >
        Proceed To QR Code
      </button>
    </article>
  );
}
