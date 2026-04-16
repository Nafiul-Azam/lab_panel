import { PageHeader } from "../../components/layout/PageHeader";
import { SearchBar } from "../../components/shared/SearchBar";
import { TokenCard } from "../../components/workflow/TokenCard";
import { useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { useNavigate } from "react-router-dom";

export function TokenQueuePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const tokenQueue = useAppStore((state) => state.tokenQueue);

  const filtered = tokenQueue.filter(
    (item) =>
      item.token.toLowerCase().includes(query.toLowerCase()) ||
      item.patientName.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <PageHeader
        title="Token Queue"
        subtitle="Incoming token reception with priority and assignment controls."
      />
      <section className="glass-card p-4">
        <SearchBar
          placeholder="Search token or patient"
          value={query}
          onChange={setQuery}
        />
      </section>
      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((token, index) => (
          <TokenCard
            key={token.token}
            token={token}
            position={index + 1}
            onProceed={(item) =>
              navigate(`/barcode-labels?token=${item.token}`)
            }
          />
        ))}
      </section>
    </div>
  );
}
