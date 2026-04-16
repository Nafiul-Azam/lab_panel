import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  delta?: string;
}

export function StatCard({ title, value, icon: Icon, delta }: StatCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mobile-card p-4 md:rounded-3xl md:p-5"
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-clinic-700">
          {title}
        </p>
        <span className="rounded-xl bg-clinic-100 p-2 text-clinic-700">
          <Icon size={16} />
        </span>
      </div>
      <p className="mt-3 text-xl font-bold md:text-2xl">{value}</p>
      {delta ? <p className="mt-1 text-xs text-clinic-700">{delta}</p> : null}
    </motion.article>
  );
}
