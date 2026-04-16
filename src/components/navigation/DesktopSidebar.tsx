import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { desktopNav } from "../../constants/navigation";
import { useAppStore } from "../../store/useAppStore";
import { cn } from "../../utils/cn";

export function DesktopSidebar() {
  const role = useAppStore((state) => state.role);
  const collapsed = useAppStore((state) => state.sidebarCollapsed);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);

  return (
    <aside
      className={cn(
        "hidden h-[calc(100vh-24px)] shrink-0 rounded-3xl border border-white/70 bg-white/80 p-3 shadow-glass backdrop-blur-xl md:flex md:flex-col",
        collapsed ? "w-20" : "w-72",
      )}
    >
      <div className="mb-4 flex items-center justify-between rounded-2xl bg-clinic-50 p-2">
        {!collapsed ? (
          <div>
            <p className="text-lg font-bold">Lab Panel</p>
            <p className="text-xs text-clinic-700">Diagnostic Operations</p>
          </div>
        ) : null}
        <button
          onClick={toggleSidebar}
          type="button"
          className="rounded-lg bg-white p-2"
        >
          {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
      </div>
      <div className="space-y-3 overflow-y-auto pr-1">
        {desktopNav.map((group) => {
          const items = group.items.filter((item) => item.roles.includes(role));
          if (!items.length) {
            return null;
          }
          return (
            <div key={group.title}>
              {!collapsed ? (
                <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wider text-clinic-600">
                  {group.title}
                </p>
              ) : null}
              <div className="space-y-1">
                {items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm font-medium transition",
                        isActive
                          ? "bg-clinic-600 text-white shadow-soft"
                          : "text-clinic-800 hover:bg-clinic-50",
                      )
                    }
                  >
                    <item.icon size={16} />
                    {!collapsed ? <span>{item.label}</span> : null}
                  </NavLink>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
