import { useState } from "react";
import { PageHeader } from "../../components/layout/PageHeader";
import { QueueTable } from "../../components/tables/QueueTable";
import { FilterTabs } from "../../components/workflow/FilterTabs";
import { processingQueue } from "../../data/mockData";
import type { ProcessingItem } from "../../types";

const tabs = [
  "All",
  "Hematology",
  "Biochemistry",
  "Thyroid",
  "Urine",
  "Others",
];

export function ProcessingQueuePage() {
  const [active, setActive] = useState("All");

  const filteredQueue = processingQueue.filter((item) =>
    matchesCategory(item, active),
  );

  return (
    <div className="space-y-4 pb-4 md:pb-0">
      <PageHeader
        title="Processing Queue"
        subtitle="Segmented queue by category with technician assignment and aging indicators."
      />
      <section className="glass-card space-y-3 p-3 md:p-4">
        <FilterTabs tabs={tabs} active={active} onChange={setActive} />
        <QueueTable data={filteredQueue} />
      </section>
    </div>
  );
}

function matchesCategory(item: ProcessingItem, activeTab: string) {
  const category = item.category.toLowerCase();
  const testName = item.testName.toLowerCase();

  if (activeTab === "All") {
    return true;
  }

  if (activeTab === "Hematology") {
    return category.includes("hematology") || testName.includes("cbc");
  }

  if (activeTab === "Biochemistry") {
    return category.includes("biochemistry");
  }

  if (activeTab === "Thyroid") {
    return testName.includes("thyroid") || category.includes("hormone");
  }

  if (activeTab === "Urine") {
    return testName.includes("urine") || category.includes("urine");
  }

  const knownMatch =
    category.includes("hematology") ||
    category.includes("biochemistry") ||
    category.includes("hormone") ||
    category.includes("urine") ||
    testName.includes("thyroid") ||
    testName.includes("cbc") ||
    testName.includes("urine");

  return activeTab === "Others" ? !knownMatch : true;
}
