import { PageHeader } from "../../components/layout/PageHeader";
import { ActivityTimeline } from "../../components/workflow/ActivityTimeline";

export function ActivityTimelinePage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Activity Timeline"
        subtitle="Chronological visibility of token, sample, review, approval and delivery actions."
      />
      <ActivityTimeline />
    </div>
  );
}
