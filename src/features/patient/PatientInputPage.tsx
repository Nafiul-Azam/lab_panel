import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../../components/layout/PageHeader";
import { SearchBar } from "../../components/shared/SearchBar";
import { availableTests } from "../../data/mockData";
import { useAppStore } from "../../store/useAppStore";
import type { Priority } from "../../types";

export function PatientInputPage() {
  const navigate = useNavigate();
  const searchPatient = useAppStore((state) => state.searchPatient);
  const selectedPatient = useAppStore((state) => state.selectedPatient);
  const addTokenToQueue = useAppStore((state) => state.addTokenToQueue);
  const pushToast = useAppStore((state) => state.pushToast);

  const [searchQuery, setSearchQuery] = useState("");
  const [token, setToken] = useState("T-1301");
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [priority, setPriority] = useState<Priority>("normal");
  const [selectedTests, setSelectedTests] = useState<string[]>([]);

  useEffect(() => {
    if (!selectedPatient) {
      return;
    }

    setToken(selectedPatient.token);
    setPatientId(selectedPatient.id);
    setPatientName(selectedPatient.name);
    setPriority(selectedPatient.priority);
    setSelectedTests(selectedPatient.orderedTests);
  }, [selectedPatient]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    searchPatient(value);
  };

  const handleNext = () => {
    if (!token.trim() || !patientId.trim() || !patientName.trim()) {
      pushToast("Missing info", "Token, Patient ID, and Name are required.");
      return;
    }

    if (selectedTests.length === 0) {
      pushToast("Select test", "Please select at least one test before Next.");
      return;
    }

    addTokenToQueue({
      token: token.trim(),
      patientId: patientId.trim(),
      patientName: patientName.trim(),
      waitingMins: 0,
      priority,
      status: "waiting",
    });

    pushToast(
      "Added to Token Queue",
      `${patientName.trim()} added with ${selectedTests.length} selected test(s).`,
    );
    navigate("/token-queue");
  };

  const toggleTest = (testName: string) => {
    setSelectedTests((prev) =>
      prev.includes(testName)
        ? prev.filter((item) => item !== testName)
        : [...prev, testName],
    );
  };

  return (
    <div className="space-y-4">
      <PageHeader
        title="Patient Input"
        subtitle="Input patient details or search by ID/token/mobile for auto-fill, then move to token queue."
      />

      <section className="glass-card p-4">
        <p className="mb-2 text-sm font-semibold">Patient ID / Token Search</p>
        <SearchBar
          placeholder="P-90021 / T-1201 / 01711..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <p className="mt-2 text-xs text-clinic-700">
          Search করলে patient info auto-fill হয়ে যাবে।
        </p>
      </section>

      <section className="glass-card grid gap-3 p-4 md:grid-cols-2">
        <label className="text-sm">
          Token Number
          <input
            value={token}
            onChange={(event) => setToken(event.target.value)}
            className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        </label>

        <label className="text-sm">
          Patient ID
          <input
            value={patientId}
            onChange={(event) => setPatientId(event.target.value)}
            className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        </label>

        <label className="text-sm md:col-span-2">
          Patient Name
          <input
            value={patientName}
            onChange={(event) => setPatientName(event.target.value)}
            className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        </label>

        <label className="text-sm">
          Priority
          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value as Priority)}
            className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          >
            <option value="normal">normal</option>
            <option value="urgent">urgent</option>
            <option value="critical">critical</option>
          </select>
        </label>

        <div className="text-sm md:col-span-2">
          <p className="mb-2 font-semibold">কি কি test করাবে</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {availableTests.map((test) => {
              const checked = selectedTests.includes(test.name);
              return (
                <label
                  key={test.id}
                  className={`flex cursor-pointer items-start gap-2 rounded-xl border px-3 py-2 transition ${
                    checked
                      ? "border-clinic-300 bg-clinic-50"
                      : "border-clinic-100 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTest(test.name)}
                    className="mt-1"
                  />
                  <span>
                    <p className="text-sm font-semibold text-clinic-900">
                      {test.name}
                    </p>
                    <p className="text-xs text-clinic-700">
                      {test.category} • {test.sampleType}
                    </p>
                  </span>
                </label>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-clinic-700">
            Selected:{" "}
            {selectedTests.length
              ? selectedTests.join(", ")
              : "No test selected"}
          </p>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={handleNext}
            className="w-full rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
