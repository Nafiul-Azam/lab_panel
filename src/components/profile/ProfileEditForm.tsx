import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppStore } from "../../store/useAppStore";

const profileSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(11),
  email: z.string().email(),
  designation: z.string().min(3),
  preference: z.enum(["compact", "comfortable"]),
});

type ProfileForm = z.infer<typeof profileSchema>;

const initialValues: ProfileForm = {
  name: "Dr. Farhana Alam",
  phone: "01711223344",
  email: "farhana.alam@lab.local",
  designation: "Laboratory Administrator",
  preference: "comfortable",
};

export function ProfileEditForm() {
  const pushToast = useAppStore((state) => state.pushToast);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (values: ProfileForm) => {
    pushToast("Profile updated", `${values.name} changes saved successfully.`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card grid gap-4 p-5 md:grid-cols-2"
    >
      <label className="space-y-1 text-sm">
        <span>Name</span>
        <input
          {...register("name")}
          className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
        />
        {errors.name ? (
          <p className="text-xs text-rose-600">Valid name required</p>
        ) : null}
      </label>
      <label className="space-y-1 text-sm">
        <span>Phone</span>
        <input
          {...register("phone")}
          className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
        />
      </label>
      <label className="space-y-1 text-sm">
        <span>Email</span>
        <input
          {...register("email")}
          className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
        />
      </label>
      <label className="space-y-1 text-sm">
        <span>Designation</span>
        <input
          {...register("designation")}
          className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
        />
      </label>
      <label className="space-y-1 text-sm">
        <span>View Preference</span>
        <select
          {...register("preference")}
          className="w-full rounded-xl border border-clinic-200 bg-white px-3 py-2"
        >
          <option value="comfortable">Comfortable</option>
          <option value="compact">Compact</option>
        </select>
      </label>
      <div className="flex items-end justify-end">
        <button
          type="submit"
          className="rounded-xl bg-clinic-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Save profile
        </button>
      </div>
    </form>
  );
}
