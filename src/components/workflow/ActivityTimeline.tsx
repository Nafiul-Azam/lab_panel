const timeline = [
  {
    time: "08:22 AM",
    event: "Token T-1201 received by Front Desk",
    role: "Operator",
  },
  {
    time: "08:29 AM",
    event: "Barcode labels generated for THY + CBC",
    role: "Operator",
  },
  {
    time: "08:36 AM",
    event: "Sample collected and sent to processing",
    role: "Collector",
  },
  {
    time: "09:10 AM",
    event: "Result draft submitted to senior review",
    role: "Technician",
  },
  {
    time: "09:32 AM",
    event: "Report approved and marked delivery-ready",
    role: "Approver",
  },
];

export function ActivityTimeline() {
  return (
    <section className="glass-card p-4">
      <h3 className="text-base font-semibold">Activity Timeline</h3>
      <div className="mt-3 space-y-3">
        {timeline.map((item) => (
          <div key={`${item.time}-${item.event}`} className="flex gap-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-clinic-500" />
            <div>
              <p className="text-xs font-semibold text-clinic-700">
                {item.time} • {item.role}
              </p>
              <p className="text-sm">{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
