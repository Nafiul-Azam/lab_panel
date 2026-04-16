import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import type { ReactNode } from "react";
import { patients } from "../../data/mockData";
import { useAppStore } from "../../store/useAppStore";

const resultSchema = z.object({
  patientName: z.string().min(2),
  patientId: z.string().min(3),
  phone: z.string().min(6),
  doctor: z.string().min(2),
  history: z.string().min(2),
  t3: z.number(),
  t4: z.number(),
  tsh: z.number(),
  remarks: z.string().min(3),
});

type ResultForm = z.infer<typeof resultSchema>;

const defaults: ResultForm = {
  patientName: "",
  patientId: "",
  phone: "",
  doctor: "",
  history: "No previous history available.",
  t3: 3.1,
  t4: 9.5,
  tsh: 6.7,
  remarks: "Possible hypothyroid trend, suggest follow-up.",
};

export function ResultEntryForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pushToast = useAppStore((state) => state.pushToast);
  const selectedPatient = useAppStore((state) => state.selectedPatient);
  const { register, handleSubmit, watch, reset } = useForm<ResultForm>({
    resolver: zodResolver(resultSchema),
    defaultValues: defaults,
  });

  const patientFromQuery = patients.find(
    (item) => item.id === searchParams.get("patientId"),
  );
  const patient = patientFromQuery ?? selectedPatient;

  useEffect(() => {
    if (!patient) {
      return;
    }

    reset({
      patientName: patient.name,
      patientId: patient.id,
      phone: patient.phone,
      doctor: patient.doctor,
      history: patient.previousSummary,
      t3: 3.1,
      t4: 9.5,
      tsh: 6.7,
      remarks: "Possible hypothyroid trend, suggest follow-up.",
    });
  }, [patient, reset]);

  const tsh = watch("tsh");
  const critical = tsh > 5.5;

  const onSubmit = (values: ResultForm) => {
    const patientId = values.patientId || "P-90021";
    const testName = "Thyroid Profile";
    pushToast("Draft saved", `TSH ${values.tsh} submitted to senior review.`);
    navigate(
      `/senior-review?patientId=${patientId}&test=${encodeURIComponent(testName)}`,
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card grid gap-3 p-4 md:grid-cols-2"
    >
      <div className="md:col-span-2 rounded-2xl border border-clinic-100 bg-clinic-50 p-3">
        <h3 className="text-base font-semibold">
          Current Patient Result Context
        </h3>
        <p className="text-xs text-clinic-700">
          উপরে patient part editable, কিন্তু past history read-only থাকবে।
        </p>
      </div>

      <Field
        label="Patient Name"
        input={
          <input
            type="text"
            {...register("patientName")}
            className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        }
      />
      <Field
        label="Patient ID"
        input={
          <input
            type="text"
            {...register("patientId")}
            className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        }
      />
      <Field
        label="Phone"
        input={
          <input
            type="text"
            {...register("phone")}
            className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        }
      />
      <Field
        label="Ref. Doctor"
        input={
          <input
            type="text"
            {...register("doctor")}
            className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        }
      />

      <label className="md:col-span-2 text-sm">
        Past History (Read Only)
        <textarea
          {...register("history")}
          readOnly
          className="mt-1 w-full rounded-xl border border-clinic-100 bg-slate-50 px-3 py-2 text-clinic-700"
        />
      </label>

      <div className="md:col-span-2 mt-1 rounded-2xl border border-clinic-100 bg-white/70 p-3">
        <h3 className="text-base font-semibold">
          Result Entry (Thyroid Example)
        </h3>
      </div>

      <Field
        label="T3 (ng/mL)"
        input={
          <input
            type="number"
            step="0.1"
            {...register("t3", { valueAsNumber: true })}
            className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        }
      />
      <Field
        label="T4 (ug/dL)"
        input={
          <input
            type="number"
            step="0.1"
            {...register("t4", { valueAsNumber: true })}
            className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        }
      />
      <Field
        label="TSH (uIU/mL)"
        input={
          <input
            type="number"
            step="0.1"
            {...register("tsh", { valueAsNumber: true })}
            className={`w-full rounded-xl border border-clinic-200 bg-white px-3 py-2 ${critical ? "border-rose-300 bg-rose-50" : ""}`}
          />
        }
      />
      <div className="rounded-xl bg-clinic-50 p-3 text-sm">
        <p className="font-semibold">Reference Range</p>
        <p>T3: 0.8 - 2.0 | T4: 5 - 12 | TSH: 0.4 - 5.5</p>
        {critical ? (
          <p className="mt-1 font-semibold text-rose-600">
            Critical value badge: TSH high
          </p>
        ) : null}
      </div>
      <label className="md:col-span-2 text-sm">
        Remarks
        <textarea
          {...register("remarks")}
          className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
        />
      </label>
      <div className="md:col-span-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            pushToast(
              "Draft saved",
              "Result draft has been saved successfully.",
            )
          }
          className="rounded-xl border border-clinic-200 bg-white px-3 py-2 text-sm font-semibold"
        >
          Save Draft
        </button>
        <button
          type="submit"
          className="rounded-xl bg-clinic-600 px-3 py-2 text-sm font-semibold text-white"
        >
          Submit to Senior Review
        </button>
      </div>
    </form>
  );
}

function Field({ label, input }: { label: string; input: ReactNode }) {
  return (
    <label className="text-sm">
      {label}
      <div className="mt-1">{input}</div>
    </label>
  );
}
