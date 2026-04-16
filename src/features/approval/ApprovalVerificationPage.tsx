import { PageHeader } from "../../components/layout/PageHeader";
import { ApprovalCard } from "../../components/workflow/ApprovalCard";

export function ApprovalVerificationPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Approval / Verification"
        subtitle="Final verifier action list with signature placeholder and publish control."
      />
      <ApprovalCard />
    </div>
  );
}
