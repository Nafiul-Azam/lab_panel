import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

interface MiniAreaChartCardProps {
  title: string;
  value: string;
  data: { name: string; value: number }[];
}

export function MiniAreaChartCard({
  title,
  value,
  data,
}: MiniAreaChartCardProps) {
  return (
    <div className="mobile-card p-4 md:rounded-3xl">
      <p className="text-xs text-clinic-700">{title}</p>
      <p className="mb-2 text-lg font-bold">{value}</p>
      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2ea89a"
              fill="#afeae1"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
