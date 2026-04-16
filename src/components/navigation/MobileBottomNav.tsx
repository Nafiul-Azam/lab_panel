import { MoreHorizontal } from "lucide-react";
import { NavLink } from "react-router-dom";
import { getRoleOrderedDesktopNavItems } from "../../constants/navigation";
import { useAppStore } from "../../store/useAppStore";
import { cn } from "../../utils/cn";

function formatMobileLabel(label: string, path: string) {
  if (path === "/") {
    return "Home";
  }

  const labelMap: Record<string, string> = {
    "Patient Input": "Input",
    "Token & Queue": "Token",
    "Patient Search": "Search",
    "Order Reception": "Orders",
    "Test Selection": "Tests",
    "Barcode & Labels": "Barcode",
    "Sample Collection": "Sample",
    "Processing Queue": "Queue",
    "Result Entry": "Result",
    "Senior Review": "Review",
    "Approval / Verification": "Approve",
    "Report Delivery": "Delivery",
  };

  return labelMap[label] ?? label;
}

export function MobileBottomNav() {
  const role = useAppStore((state) => state.role);
  const openMore = useAppStore((state) => state.openMobileMore);
  const desktopOrderedItems = getRoleOrderedDesktopNavItems(role);
  const homeItem = desktopOrderedItems.find((item) => item.path === "/");
  const visibleItems = desktopOrderedItems
    .filter((item) => item.path !== "/")
    .slice(0, 3);
  const primaryItems = homeItem ? [homeItem, ...visibleItems] : visibleItems;

  return (
    <nav className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 rounded-2xl border border-white/70 bg-white/80 p-2 shadow-glass backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {primaryItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center",
                isActive ? "bg-clinic-600 text-white" : "text-clinic-700",
              )
            }
          >
            <item.icon size={16} />
            <span className="w-full truncate px-0.5 text-[9px] font-semibold leading-none">
              {formatMobileLabel(item.label, item.path)}
            </span>
          </NavLink>
        ))}
        <button
          type="button"
          onClick={openMore}
          className="flex h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center text-clinic-700"
        >
          <MoreHorizontal size={16} />
          <span className="w-full truncate px-0.5 text-[9px] font-semibold leading-none">
            More
          </span>
        </button>
      </div>
    </nav>
  );
}
