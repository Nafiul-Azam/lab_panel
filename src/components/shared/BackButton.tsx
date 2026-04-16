import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 rounded-xl border border-clinic-200 bg-white/85 px-3 py-2 text-sm font-medium text-clinic-800 transition hover:bg-clinic-50"
    >
      <ArrowLeft size={16} />
      Back
    </button>
  );
}
