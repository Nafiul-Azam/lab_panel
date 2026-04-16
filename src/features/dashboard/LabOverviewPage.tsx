import {
  Activity,
  AlertTriangle,
  ClipboardList,
  CheckCircle2,
  Clock3,
  FlaskConical,
  ScanLine,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "../../components/charts/ChartCard";
import { MiniAreaChartCard } from "../../components/charts/MiniAreaChartCard";
import { PageHeader } from "../../components/layout/PageHeader";
import { StatCard } from "../../components/shared/StatCard";
import { ActivityTimeline } from "../../components/workflow/ActivityTimeline";
import { trendSeries, workloadSeries } from "../../data/mockData";
import { useAppStore } from "../../store/useAppStore";
import type { Role } from "../../types";
import { roleLabels } from "../../constants/roles";

const mini = [
  { name: "08", value: 8 },
  { name: "09", value: 12 },
  { name: "10", value: 18 },
  { name: "11", value: 16 },
  { name: "12", value: 22 },
];

export function LabOverviewPage() {
  const navigate = useNavigate();
  const role = useAppStore((state) => state.role);
  const pushToast = useAppStore((state) => state.pushToast);

  const roleActions: Record<
    Role,
    {
      label: string;
      icon: typeof ClipboardList;
      path: string;
      tone: "solid" | "soft";
    }[]
  > = {
    admin: [
      {
        label: "Assign Token",
        icon: ClipboardList,
        path: "/token-queue",
        tone: "solid",
      },
      {
        label: "Generate Barcode",
        icon: ScanLine,
        path: "/barcode-labels",
        tone: "soft",
      },
      {
        label: "Send For Review",
        icon: ShieldCheck,
        path: "/senior-review",
        tone: "soft",
      },
      {
        label: "Dispatch Report",
        icon: Truck,
        path: "/report-delivery",
        tone: "soft",
      },
    ],
    operator: [
      {
        label: "Patient Input",
        icon: ClipboardList,
        path: "/patient-input",
        tone: "solid",
      },
      {
        label: "Token Queue",
        icon: ClipboardList,
        path: "/token-queue",
        tone: "soft",
      },
      {
        label: "Generate Barcode",
        icon: ScanLine,
        path: "/barcode-labels",
        tone: "soft",
      },
      {
        label: "Report Delivery",
        icon: Truck,
        path: "/report-delivery",
        tone: "soft",
      },
    ],
    collector: [
      {
        label: "Sample Collection",
        icon: FlaskConical,
        path: "/sample-collection",
        tone: "solid",
      },
      {
        label: "Barcode Labels",
        icon: ScanLine,
        path: "/barcode-labels",
        tone: "soft",
      },
      {
        label: "Processing Queue",
        icon: Activity,
        path: "/processing-queue",
        tone: "soft",
      },
      {
        label: "Notifications",
        icon: AlertTriangle,
        path: "/notifications",
        tone: "soft",
      },
    ],
    technician: [
      {
        label: "Processing Queue",
        icon: Activity,
        path: "/processing-queue",
        tone: "solid",
      },
      {
        label: "Result Entry",
        icon: FlaskConical,
        path: "/result-entry",
        tone: "soft",
      },
      {
        label: "Senior Review",
        icon: ShieldCheck,
        path: "/senior-review",
        tone: "soft",
      },
      {
        label: "Notifications",
        icon: AlertTriangle,
        path: "/notifications",
        tone: "soft",
      },
    ],
    senior: [
      {
        label: "Senior Review",
        icon: ShieldCheck,
        path: "/senior-review",
        tone: "solid",
      },
      {
        label: "Result Entry",
        icon: FlaskConical,
        path: "/result-entry",
        tone: "soft",
      },
      {
        label: "Approval Queue",
        icon: ShieldCheck,
        path: "/approval-verification",
        tone: "soft",
      },
      {
        label: "Notifications",
        icon: AlertTriangle,
        path: "/notifications",
        tone: "soft",
      },
    ],
    approver: [
      {
        label: "Verify Reports",
        icon: ShieldCheck,
        path: "/approval-verification",
        tone: "solid",
      },
      {
        label: "Senior Review",
        icon: ShieldCheck,
        path: "/senior-review",
        tone: "soft",
      },
      {
        label: "Dispatch Desk",
        icon: Truck,
        path: "/report-delivery",
        tone: "soft",
      },
      {
        label: "Notifications",
        icon: AlertTriangle,
        path: "/notifications",
        tone: "soft",
      },
    ],
    delivery: [
      {
        label: "Report Delivery",
        icon: Truck,
        path: "/report-delivery",
        tone: "solid",
      },
      {
        label: "Token Queue",
        icon: ClipboardList,
        path: "/token-queue",
        tone: "soft",
      },
      {
        label: "Notifications",
        icon: AlertTriangle,
        path: "/notifications",
        tone: "soft",
      },
      {
        label: "Analytics",
        icon: Activity,
        path: "/analytics",
        tone: "soft",
      },
    ],
    super_admin: [
      {
        label: "Assign Token",
        icon: ClipboardList,
        path: "/token-queue",
        tone: "solid",
      },
      {
        label: "Generate Barcode",
        icon: ScanLine,
        path: "/barcode-labels",
        tone: "soft",
      },
      {
        label: "Verify Reports",
        icon: ShieldCheck,
        path: "/approval-verification",
        tone: "soft",
      },
      {
        label: "Dispatch Report",
        icon: Truck,
        path: "/report-delivery",
        tone: "soft",
      },
    ],
  };

  const actions = roleActions[role];

  return (
    <div className="space-y-4">
      <PageHeader
        showBack={false}
        title="Lab Overview Dashboard"
        subtitle="Live laboratory operations snapshot with role-aware quick actions."
        actions={
          <>
            <button className="rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white">
              Quick Reception
            </button>
            <button className="rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm font-semibold">
              Urgent Queue
            </button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-5">
        <StatCard
          title="Today's Samples"
          value="186"
          icon={FlaskConical}
          delta="+14 vs yesterday"
        />
        <StatCard
          title="Pending Tests"
          value="34"
          icon={Clock3}
          delta="9 urgent"
        />
        <StatCard
          title="In Progress"
          value="49"
          icon={Activity}
          delta="12 thyroid"
        />
        <StatCard
          title="Ready Reports"
          value="71"
          icon={CheckCircle2}
          delta="58 delivered"
        />
        <StatCard
          title="Recollect / Reject"
          value="6"
          icon={AlertTriangle}
          delta="2 critical"
        />
      </div>

      <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
        <ChartCard
          title="Today vs Yesterday Test Count"
          subtitle="Hourly trend across active lab sections."
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={trendSeries}
              margin={{ top: 8, right: 8, left: -14, bottom: 0 }}
            >
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis width={28} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="today"
                stroke="#2ea89a"
                fill="#afeae1"
              />
              <Area
                type="monotone"
                dataKey="yesterday"
                stroke="#7cc0df"
                fill="#d6f0fd"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard
          title="Section Workload"
          subtitle="Pending sample distribution by lab section."
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={workloadSeries}
                dataKey="value"
                nameKey="section"
                cx="50%"
                cy="50%"
                innerRadius="36%"
                outerRadius="68%"
                fill="#2ea89a"
                paddingAngle={2}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
        <ChartCard
          title="Report Delivery Trend"
          subtitle="Delivery desk throughput over the week."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={trendSeries}
              margin={{ top: 8, right: 8, left: -14, bottom: 0 }}
            >
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis width={28} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="delivery" fill="#5fb8a9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <div className="grid gap-3">
          <MiniAreaChartCard
            title="Active Technicians"
            value="14"
            data={mini}
          />
          <MiniAreaChartCard title="Urgent Cases" value="09" data={mini} />
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
        <ActivityTimeline />
        <section className="glass-card p-4">
          <h3 className="text-base font-semibold">Role-Based Quick Actions</h3>
          <p className="mt-1 text-xs text-clinic-700">
            Active Role: {roleLabels[role]}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {actions.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={() => {
                  pushToast("Quick Action", `${action.label} opened.`);
                  navigate(action.path);
                }}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 font-semibold transition ${
                  action.tone === "solid"
                    ? "bg-clinic-600 text-white shadow-soft"
                    : "border border-clinic-200 bg-white text-clinic-900 hover:bg-clinic-50"
                }`}
              >
                <action.icon size={15} />
                {action.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-clinic-700">
            Live activity and queue health can be filtered by Admin, Operator,
            Technician, and Delivery role.
          </p>
        </section>
      </div>
    </div>
  );
}
