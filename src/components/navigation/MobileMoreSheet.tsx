import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { getRoleOrderedDesktopNavItems } from "../../constants/navigation";
import { useAppStore } from "../../store/useAppStore";
import { SearchBar } from "../shared/SearchBar";

export function MobileMoreSheet() {
  const role = useAppStore((state) => state.role);
  const open = useAppStore((state) => state.mobileMoreOpen);
  const close = useAppStore((state) => state.closeMobileMore);
  const [query, setQuery] = useState("");
  const desktopOrderedItems = getRoleOrderedDesktopNavItems(role);
  const moreBaseItems = desktopOrderedItems.filter((item) => item.path !== "/");
  const moreItems = moreBaseItems.slice(3);

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return moreItems.filter((item) => {
      if (!normalized) {
        return true;
      }
      return (
        item.label.toLowerCase().includes(normalized) ||
        item.path.toLowerCase().includes(normalized)
      );
    });
  }, [moreItems, query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-clinic-900/40 p-4 md:hidden"
          onClick={close}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl border border-white/60 bg-white p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">More Actions</h3>
              <button
                type="button"
                onClick={close}
                className="rounded-lg bg-clinic-50 p-2"
              >
                <X size={16} />
              </button>
            </div>
            <div className="mb-3">
              <SearchBar
                placeholder="Find action on phone..."
                value={query}
                onChange={setQuery}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 pb-6">
              {filteredItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={close}
                  className="flex items-center gap-2 rounded-xl border border-clinic-100 px-3 py-2.5 text-sm font-medium text-clinic-800"
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              ))}
              {!filteredItems.length ? (
                <p className="col-span-2 rounded-xl border border-clinic-100 bg-clinic-50 px-3 py-2 text-xs font-medium text-clinic-700">
                  No matching action found for this role.
                </p>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
