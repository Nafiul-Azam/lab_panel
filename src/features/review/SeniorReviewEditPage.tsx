import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { PageHeader } from "../../components/layout/PageHeader";
import { useAppStore } from "../../store/useAppStore";

const editSchema = z.object({
  t3: z.number(),
  t4: z.number(),
  tsh: z.number(),
  remarks: z.string().min(3),
});

type EditForm = z.infer<typeof editSchema>;

const defaultValues: EditForm = {
  t3: 3.2,
  t4: 9.2,
  tsh: 5.9,
  remarks: "Adjusted after senior review and cross-check.",
};

export function SeniorReviewEditPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pushToast = useAppStore((state) => state.pushToast);

  const patientId = searchParams.get("patientId") ?? "P-90021";
  const testName = searchParams.get("test") ?? "Thyroid Profile";

  const { register, handleSubmit } = useForm<EditForm>({
    resolver: zodResolver(editSchema),
    defaultValues,
  });

  const onSubmit = (values: EditForm) => {
    pushToast(
      "Edited and submitted",
      `${testName} (${patientId}) updated with TSH ${values.tsh} and sent for verification.`,
    );
    navigate(
      `/approval-verification?patientId=${patientId}&test=${encodeURIComponent(testName)}`,
    );
  };

  return (
    <div className="space-y-4">
      <PageHeader
        title="Senior Review Edit"
        subtitle={`Editing result for ${patientId} • ${testName}`}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="glass-card grid gap-3 p-4 md:grid-cols-2"
      >
        <label className="text-sm">
          T3 (ng/mL)
          <input
            type="number"
            step="0.1"
            {...register("t3", { valueAsNumber: true })}
            className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        </label>
        <label className="text-sm">
          T4 (ug/dL)
          <input
            type="number"
            step="0.1"
            {...register("t4", { valueAsNumber: true })}
            className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        </label>
        <label className="text-sm md:col-span-2">
          TSH (uIU/mL)
          <input
            type="number"
            step="0.1"
            {...register("tsh", { valueAsNumber: true })}
            className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        </label>
        <label className="text-sm md:col-span-2">
          Review Remarks
          <textarea
            {...register("remarks")}
            className="mt-1 w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
          />
        </label>

        <div className="md:col-span-2 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-xl border border-clinic-200 bg-white px-4 py-2 text-sm font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-xl bg-clinic-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Submit to Approval
          </button>
        </div>
      </form>
    </div>
  );
}
