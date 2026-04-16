import { PageHeader } from "../../components/layout/PageHeader";
import { SampleCollectionForm } from "../../components/forms/SampleCollectionForm";

export function SampleCollectionPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Sample Collection"
        subtitle="Barcode scan/search, collection confirmation and processing handover."
      />
      <SampleCollectionForm />
    </div>
  );
}
