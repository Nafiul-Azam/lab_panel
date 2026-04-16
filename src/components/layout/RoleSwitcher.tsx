import { roleLabels } from "../../constants/roles";
import { useAppStore } from "../../store/useAppStore";
import type { Role } from "../../types";

const roles: Role[] = [
  "admin",
  "operator",
  "collector",
  "technician",
  "senior",
  "approver",
  "delivery",
  "super_admin",
];

export function RoleSwitcher() {
  const role = useAppStore((state) => state.role);
  const setRole = useAppStore((state) => state.setRole);

  return (
    <label className="hidden rounded-xl border border-clinic-200 bg-white px-2 py-1 md:flex md:items-center md:gap-2">
      <span className="text-xs font-semibold text-clinic-700">Role</span>
      <select
        value={role}
        onChange={(event) => setRole(event.target.value as Role)}
        className="bg-transparent text-xs font-semibold text-clinic-900"
      >
        {roles.map((value) => (
          <option key={value} value={value}>
            {roleLabels[value]}
          </option>
        ))}
      </select>
    </label>
  );
}
