import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { mobileMoreItems } from "../../constants/navigation";
import { useAppStore } from "../../store/useAppStore";

export function MobileMoreSheet() {
  const role = useAppStore((state) => state.role);
  const open = useAppStore((state) => state.mobileMoreOpen);
  const close = useAppStore((state) => state.closeMobileMore);

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
            <div className="grid grid-cols-2 gap-2 pb-6">
              {mobileMoreItems
                .filter((item) => item.roles.includes(role))
                .map((item) => (
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
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
