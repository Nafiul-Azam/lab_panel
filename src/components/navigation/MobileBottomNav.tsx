import { MoreHorizontal } from "lucide-react";
import { NavLink } from "react-router-dom";
import { mobilePrimaryNav } from "../../constants/navigation";
import { useAppStore } from "../../store/useAppStore";
import { cn } from "../../utils/cn";

export function MobileBottomNav() {
  const role = useAppStore((state) => state.role);
  const openMore = useAppStore((state) => state.openMobileMore);

  return (
    <nav className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 rounded-2xl border border-white/70 bg-white/80 p-2 shadow-glass backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {mobilePrimaryNav
          .filter((item) => item.roles.includes(role))
          .map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[11px] font-semibold",
                  isActive ? "bg-clinic-600 text-white" : "text-clinic-700",
                )
              }
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        <button
          type="button"
          onClick={openMore}
          className="flex flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[11px] font-semibold text-clinic-700"
        >
          <MoreHorizontal size={16} />
          More
        </button>
      </div>
    </nav>
  );
}
