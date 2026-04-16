import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingQuickAction() {
  return (
    <Link
      to="/mobile-quick-actions"
      className="fixed bottom-24 right-4 z-30 rounded-2xl bg-clinic-600 p-3 text-white shadow-soft md:hidden"
      aria-label="Quick actions"
    >
      <Zap size={18} />
    </Link>
  );
}
