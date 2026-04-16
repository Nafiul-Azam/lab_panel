import { useState } from "react";
import { SearchBar } from "../shared/SearchBar";
import { useAppStore } from "../../store/useAppStore";

export function PatientSearchPanel() {
  const [query, setQuery] = useState("");
  const searchPatient = useAppStore((state) => state.searchPatient);
  const selectedPatient = useAppStore((state) => state.selectedPatient);

  return (
    <section className="glass-card p-4">
      <h3 className="text-base font-semibold">Patient Search & Auto-Fill</h3>
      <p className="mb-3 text-xs text-clinic-700">
        Search by patient ID, token, or mobile number.
      </p>
      <SearchBar
        placeholder="P-90021 / T-1201 / 01711..."
        value={query}
        onChange={(value) => {
          setQuery(value);
          searchPatient(value);
        }}
      />
      {selectedPatient ? (
        <div className="mt-3 rounded-xl bg-clinic-50 p-3 text-sm">
          <p className="font-semibold">Auto-filled: {selectedPatient.name}</p>
          <p className="text-xs text-clinic-700">
            {selectedPatient.id} • {selectedPatient.phone} •{" "}
            {selectedPatient.gender}
          </p>
        </div>
      ) : null}
    </section>
  );
}
