import { ResultEntryForm } from "../../components/forms/ResultEntryForm";
import { PageHeader } from "../../components/layout/PageHeader";

export function ResultEntryPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Result Entry"
        subtitle="Dynamic result form with abnormal highlight and draft/submit workflow."
      />
      <ResultEntryForm />
    </div>
  );
}
