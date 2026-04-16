import type { Role } from "../types";

export const roleLabels: Record<Role, string> = {
  admin: "Lab Admin",
  operator: "Lab Operator",
  collector: "Sample Collector",
  technician: "Technician",
  senior: "Senior Technician",
  approver: "Verifier / Approver",
  delivery: "Report Delivery Desk",
  super_admin: "Super Admin",
};
