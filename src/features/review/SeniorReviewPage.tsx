import { PageHeader } from "../../components/layout/PageHeader";
import { ReviewCard } from "../../components/workflow/ReviewCard";

export function SeniorReviewPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Senior Technician Review"
        subtitle="Review submitted results, request corrections, and forward for verification."
      />
      <ReviewCard />
    </div>
  );
}
