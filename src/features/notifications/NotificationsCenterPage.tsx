import { NotificationCard } from "../../components/feedback/NotificationCard";
import { PageHeader } from "../../components/layout/PageHeader";
import { useAppStore } from "../../store/useAppStore";

export function NotificationsCenterPage() {
  const items = useAppStore((state) => state.notifications);
  const markRead = useAppStore((state) => state.markNotificationRead);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Notifications Center"
        subtitle="Role-wise alerts for report-ready, urgent tests, pending samples and abnormalities."
      />
      <section className="glass-card space-y-2 p-4">
        {items.map((item) => (
          <NotificationCard key={item.id} item={item} onMarkRead={markRead} />
        ))}
      </section>
    </div>
  );
}
