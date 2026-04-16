import {
  Bell,
  FlaskConical,
  Settings,
  ShieldCheck,
  TestTube,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
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
  const pushToast = useAppStore((state) => state.pushToast);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Mobile Quick Action View"
        subtitle="Thumb-friendly quick launcher for role-based operational tasks."
      />
      <section className="glass-card grid grid-cols-2 gap-2 p-3 md:hidden">
        {links.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => pushToast("Quick Action", `${item.label} opened.`)}
            className="group rounded-2xl border border-clinic-100 bg-white px-3 py-3 text-left shadow-soft transition active:scale-[0.98]"
          >
            <div className="mb-2 inline-flex rounded-xl bg-clinic-50 p-2 text-clinic-700">
              <item.icon size={16} />
            </div>
            <p className="text-sm font-semibold text-clinic-900">
              {item.label}
            </p>
            <p className="mt-1 text-[11px] text-clinic-700">{item.subtitle}</p>
          </Link>
        ))}
      </section>

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
