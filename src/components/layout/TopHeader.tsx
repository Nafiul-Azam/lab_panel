import { Bell, CalendarDays, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../data/mockData";
import { useAppStore } from "../../store/useAppStore";
import { RoleSwitcher } from "./RoleSwitcher";

export function TopHeader() {
  const navigate = useNavigate();
  const unread = useAppStore(
    (state) => state.notifications.filter((item) => !item.read).length,
  );

  return (
    <header className="sticky top-3 z-30 mb-4 hidden items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-xl md:flex md:px-5">
      <div className="hidden items-center gap-2 text-sm text-clinic-700 md:flex">
        <CalendarDays size={16} />
        {format(new Date(), "EEEE, dd MMM yyyy")}
      </div>
      <div className="flex items-center gap-3">
        <RoleSwitcher />
        <button
          type="button"
          onClick={() => navigate("/notifications")}
          aria-label="Open notifications"
          className="relative rounded-xl bg-clinic-50 p-2 text-clinic-700"
        >
          <Bell size={18} />
          {unread ? (
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
          ) : null}
        </button>
        <button
          type="button"
          onClick={() => navigate("/profile")}
          aria-label="Open profile"
          className="flex items-center gap-2 rounded-xl bg-white px-2 py-1.5"
        >
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="h-8 w-8 rounded-lg object-cover"
          />
          <div className="hidden text-left md:block">
            <p className="text-xs font-semibold text-clinic-900">
              {currentUser.name}
            </p>
            <p className="text-[11px] text-clinic-600">
              {currentUser.designation}
            </p>
          </div>
          <ChevronDown size={14} className="text-clinic-600" />
        </button>
      </div>
    </header>
  );
}
