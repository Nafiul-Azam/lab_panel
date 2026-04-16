import { Bell } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../data/mockData";
import { useAppStore } from "../../store/useAppStore";
import { BackButton } from "../shared/BackButton";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  showBack?: boolean;
}

export function PageHeader({
  title,
  subtitle,
  actions,
  showBack = true,
}: PageHeaderProps) {
  const navigate = useNavigate();
  const unread = useAppStore(
    (state) => state.notifications.filter((item) => !item.read).length,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-4 md:p-6"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div
            className={`flex items-center gap-3 md:hidden ${showBack ? "justify-between" : "justify-end"}`}
          >
            {showBack ? <BackButton /> : null}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => navigate("/notifications")}
                aria-label="Open notifications"
                className="relative rounded-xl bg-clinic-50 p-2 text-clinic-700"
              >
                <Bell size={16} />
                {unread ? (
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-rose-500" />
                ) : null}
              </button>
              <button
                type="button"
                onClick={() => navigate("/profile")}
                aria-label="Open profile"
                className="rounded-xl border border-clinic-100 bg-white p-1"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="h-8 w-8 rounded-lg object-cover"
                />
              </button>
            </div>
          </div>

          {showBack ? (
            <div className="hidden md:block">
              <BackButton />
            </div>
          ) : null}
          <div>
            <h1 className="text-xl font-bold tracking-tight md:text-3xl">
              {title}
            </h1>
            <p className="mt-1 text-xs text-clinic-700 md:text-base">
              {subtitle}
            </p>
          </div>
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
    </motion.div>
  );
}
