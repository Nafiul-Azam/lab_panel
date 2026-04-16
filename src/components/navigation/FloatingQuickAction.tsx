import { Zap } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";

export function FloatingQuickAction() {
  const navigate = useNavigate();
  const location = useLocation();
  const openMobileRole = useAppStore((state) => state.openMobileRole);
  const isQuickActionOpen = location.pathname === "/mobile-quick-actions";

  return (
    <div className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-2 md:hidden">
      <button
        type="button"
        onClick={openMobileRole}
        className="rounded-xl bg-clinic-700 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-soft"
        aria-label="Open role selector"
      >
        Role
      </button>
      <button
        type="button"
        onClick={() =>
          isQuickActionOpen ? navigate(-1) : navigate("/mobile-quick-actions")
        }
        className="rounded-2xl bg-clinic-600 p-3 text-white shadow-soft"
        aria-label={
          isQuickActionOpen ? "Close quick actions" : "Open quick actions"
        }
      >
        <Zap size={18} />
      </button>
    </div>
  );
}
