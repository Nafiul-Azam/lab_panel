import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "../../components/charts/ChartCard";
import { PageHeader } from "../../components/layout/PageHeader";
import { trendSeries } from "../../data/mockData";

export function AnalyticsReportsPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Lab Analytics & Reports"
        subtitle="Turnaround time, top tests, workload and delivery trend visual analytics."
      />
      <div className="grid gap-3 lg:grid-cols-2">
        <ChartCard
          title="Daily Volume & Backlog"
          subtitle="Pending vs completed test volume."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={trendSeries}
              margin={{ top: 8, right: 8, left: -14, bottom: 0 }}
            >
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis width={28} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="today" fill="#2ea89a" radius={[8, 8, 0, 0]} />
              <Bar dataKey="yesterday" fill="#7cc0df" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard
          title="Report Delivery Trend"
          subtitle="Dispatch flow and operator readiness."
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={trendSeries}
              margin={{ top: 8, right: 8, left: -14, bottom: 0 }}
            >
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis width={28} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="delivery"
                stroke="#2ea89a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
