import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { roleLabels, roleOptions } from "../../constants/roles";
import { useAppStore } from "../../store/useAppStore";
import type { Role } from "../../types";

export function MobileRoleSheet() {
  const role = useAppStore((state) => state.role);
  const setRole = useAppStore((state) => state.setRole);
  const open = useAppStore((state) => state.mobileRoleOpen);
  const close = useAppStore((state) => state.closeMobileRole);

  const handleRoleSelect = (nextRole: Role) => {
    setRole(nextRole);
    close();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-clinic-900/55 backdrop-blur-lg md:hidden"
          onClick={close}
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl border border-white/50 bg-white/85 p-4 shadow-2xl backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-clinic-900">
                  Select Your Role
                </h3>
                <p className="text-xs text-clinic-600">
                  Current: {roleLabels[role]}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-lg bg-clinic-100 p-2 text-clinic-700"
                aria-label="Close role selector"
              >
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 pb-6">
              {roleOptions.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleRoleSelect(value)}
                  className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition ${
                    value === role
                      ? "border-clinic-700 bg-clinic-700 text-white"
                      : "border-clinic-200 bg-white text-clinic-800"
                  }`}
                >
                  {roleLabels[value]}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
