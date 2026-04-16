export type Role =
  | "admin"
  | "operator"
  | "collector"
  | "technician"
  | "senior"
  | "approver"
  | "delivery"
  | "super_admin";

export type WorkflowStatus =
  | "pending"
  | "in_progress"
  | "waiting_review"
  | "reviewed"
  | "approved"
  | "delivered";

export type Priority = "normal" | "urgent" | "critical";

export interface Patient {
  id: string;
  token: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  phone: string;
  doctor: string;
  visitDate: string;
  orderedTests: string[];
  priority: Priority;
  previousSummary: string;
}

export interface TokenItem {
  token: string;
  patientId: string;
  patientName: string;
  waitingMins: number;
  priority: Priority;
  status: "waiting" | "assigned" | "in_process";
  assignedTo?: string;
}

export interface LabTest {
  id: string;
  shortCode: string;
  name: string;
  category: string;
  sampleType: string;
  instruction: string;
}

export interface BarcodeLabel {
  id: string;
  patientId: string;
  patientName: string;
  token: string;
  testCode: string;
  sampleType: string;
  createdAt: string;
  printed: boolean;
}

export interface ProcessingItem {
  id: string;
  patientName: string;
  patientId: string;
  testName: string;
  category: string;
  technician: string;
  agingMinutes: number;
  status: WorkflowStatus;
  priority: Priority;
}

export interface NotificationItem {
  id: string;
  role: Role;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "ready" | "pending" | "urgent" | "abnormal" | "system";
}

export interface AppUser {
  id: string;
  name: string;
  role: Role;
  avatar: string;
  designation: string;
  department: string;
  shift: string;
}

export interface PerformanceMetric {
  id: string;
  staffName: string;
  role: Role;
  completed: number;
  pending: number;
  tatAverageMins: number;
}
