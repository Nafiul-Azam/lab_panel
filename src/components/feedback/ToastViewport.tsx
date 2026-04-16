import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppStore } from "../../store/useAppStore";

export function ToastViewport() {
  const toasts = useAppStore((state) => state.toasts);
  const removeToast = useAppStore((state) => state.removeToast);

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            className="pointer-events-auto w-80 rounded-2xl border border-clinic-100 bg-white p-3 shadow-soft"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold">{toast.title}</p>
                <p className="text-xs text-clinic-700">{toast.message}</p>
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="rounded bg-clinic-50 p-1"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
