import {
  Bell,
  FlaskConical,
  Settings,
  ShieldCheck,
  TestTube,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PageHeader } from "../../components/layout/PageHeader";
import { useAppStore } from "../../store/useAppStore";

const links = [
  {
    label: "Sample Collection",
    path: "/sample-collection",
    subtitle: "Scan and confirm sample",
    icon: TestTube,
  },
  {
    label: "Result Entry",
    path: "/result-entry",
    subtitle: "Enter or update results",
    icon: FlaskConical,
  },
  {
    label: "Approval / Verification",
    path: "/approval-verification",
    subtitle: "Final check and publish",
    icon: ShieldCheck,
  },
  {
    label: "Notifications",
    path: "/notifications",
    subtitle: "View recent alerts",
    icon: Bell,
  },
  {
    label: "Profile",
    path: "/profile",
    subtitle: "Personal settings",
    icon: User,
  },
  {
    label: "Settings",
    path: "/settings",
    subtitle: "System preferences",
    icon: Settings,
  },
];

export function MobileQuickActionsPage() {
  const navigate = useNavigate();
  const pushToast = useAppStore((state) => state.pushToast);

  return (
    <div className="space-y-4">
      <div className="hidden md:block">
        <PageHeader
          title="Mobile Quick Action View"
          subtitle="Thumb-friendly quick launcher for role-based operational tasks."
        />
      </div>
      <div
        className="fixed inset-0 z-40 overflow-hidden bg-clinic-900/45 p-3 pb-28 pt-20 backdrop-blur-xl md:hidden"
        onClick={() => navigate(-1)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            navigate(-1);
          }
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-clinic-950/20" />
        <section
          className="relative grid max-h-[72vh] grid-cols-2 gap-2 overflow-y-auto rounded-3xl border border-white/40 bg-white/30 p-3 shadow-2xl backdrop-blur-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => pushToast("Quick Action", `${item.label} opened.`)}
              className="group rounded-2xl border border-white/60 bg-white/80 px-3 py-3 text-left shadow-soft transition active:scale-[0.98]"
            >
              <div className="mb-2 inline-flex rounded-xl bg-clinic-50 p-2 text-clinic-700">
                <item.icon size={16} />
              </div>
              <p className="text-sm font-semibold text-clinic-900">
                {item.label}
              </p>
              <p className="mt-1 text-[11px] text-clinic-700">
                {item.subtitle}
              </p>
            </Link>
          ))}
        </section>
      </div>

      <section className="hidden glass-card p-4 md:block">
        <div className="grid grid-cols-3 gap-3">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => pushToast("Quick Action", `${item.label} opened.`)}
              className="rounded-2xl border border-clinic-100 bg-white p-4 shadow-soft transition hover:bg-clinic-50"
            >
              <div className="mb-2 inline-flex rounded-xl bg-clinic-50 p-2 text-clinic-700">
                <item.icon size={16} />
              </div>
              <p className="text-sm font-semibold text-clinic-900">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-clinic-700">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
