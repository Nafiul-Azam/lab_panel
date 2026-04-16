import type {
  AppUser,
  BarcodeLabel,
  LabTest,
  NotificationItem,
  Patient,
  PerformanceMetric,
  ProcessingItem,
  TokenItem,
} from "../types";

export const currentUser: AppUser = {
  id: "u-101",
  name: "Dr. Farhana Alam",
  role: "admin",
  avatar:
    "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=140&q=80",
  designation: "Laboratory Administrator",
  department: "Clinical Pathology",
  shift: "8:00 AM - 5:00 PM",
};

export const patients: Patient[] = [
  {
    id: "P-90021",
    token: "T-1201",
    name: "Mahfuz Rahman",
    age: 42,
    gender: "Male",
    phone: "01711223344",
    doctor: "Dr. Nabila Ahmed",
    visitDate: "2026-04-16T08:12:00Z",
    orderedTests: ["Thyroid Profile", "CBC"],
    priority: "urgent",
    previousSummary: "TSH borderline high in last 2 visits",
  },
  {
    id: "P-90022",
    token: "T-1202",
    name: "Sharmeen Akter",
    age: 33,
    gender: "Female",
    phone: "01899888777",
    doctor: "Dr. S. Hasan",
    visitDate: "2026-04-16T08:45:00Z",
    orderedTests: ["Blood Sugar", "Lipid Profile"],
    priority: "normal",
    previousSummary: "FBS elevated in Jan report",
  },
  {
    id: "P-90023",
    token: "T-1203",
    name: "Rafiq Uddin",
    age: 57,
    gender: "Male",
    phone: "01677665544",
    doctor: "Dr. Shahida Alam",
    visitDate: "2026-04-16T09:15:00Z",
    orderedTests: ["Urine R/E", "Kidney Function"],
    priority: "critical",
    previousSummary: "Chronic renal follow-up case",
  },
];

export const incomingTokens: TokenItem[] = [
  {
    token: "T-1201",
    patientId: "P-90021",
    patientName: "Mahfuz Rahman",
    waitingMins: 7,
    priority: "urgent",
    status: "waiting",
  },
  {
    token: "T-1202",
    patientId: "P-90022",
    patientName: "Sharmeen Akter",
    waitingMins: 3,
    priority: "normal",
    status: "assigned",
    assignedTo: "Operator Joy",
  },
  {
    token: "T-1203",
    patientId: "P-90023",
    patientName: "Rafiq Uddin",
    waitingMins: 14,
    priority: "critical",
    status: "waiting",
  },
];

export const availableTests: LabTest[] = [
  {
    id: "thyroid",
    shortCode: "THY",
    name: "Thyroid Profile",
    category: "Hormone Test",
    sampleType: "Serum",
    instruction: "Collect fasting sample in yellow top tube",
  },
  {
    id: "cbc",
    shortCode: "CBC",
    name: "Complete Blood Count",
    category: "Hematology",
    sampleType: "Whole Blood",
    instruction: "Use EDTA tube and mix gently",
  },
  {
    id: "rbs",
    shortCode: "RBS",
    name: "Blood Sugar Random",
    category: "Biochemistry",
    sampleType: "Plasma",
    instruction: "Avoid hemolyzed sample",
  },
  {
    id: "lipid",
    shortCode: "LIP",
    name: "Lipid Profile",
    category: "Biochemistry",
    sampleType: "Serum",
    instruction: "Prefer 10-12 hours fasting",
  },
];

export const barcodeLabels: BarcodeLabel[] = [
  {
    id: "LBL-101",
    patientId: "P-90021",
    patientName: "Mahfuz Rahman",
    token: "T-1201",
    testCode: "THY",
    sampleType: "Serum",
    createdAt: "2026-04-16T08:20:00Z",
    printed: true,
  },
  {
    id: "LBL-102",
    patientId: "P-90021",
    patientName: "Mahfuz Rahman",
    token: "T-1201",
    testCode: "CBC",
    sampleType: "Whole Blood",
    createdAt: "2026-04-16T08:22:00Z",
    printed: false,
  },
];

export const processingQueue: ProcessingItem[] = [
  {
    id: "PQ-1",
    patientName: "Mahfuz Rahman",
    patientId: "P-90021",
    testName: "Thyroid Profile",
    category: "Hormone Test",
    technician: "Rakib",
    agingMinutes: 18,
    status: "in_progress",
    priority: "urgent",
  },
  {
    id: "PQ-2",
    patientName: "Sharmeen Akter",
    patientId: "P-90022",
    testName: "Lipid Profile",
    category: "Biochemistry",
    technician: "Nusrat",
    agingMinutes: 42,
    status: "waiting_review",
    priority: "normal",
  },
  {
    id: "PQ-3",
    patientName: "Rafiq Uddin",
    patientId: "P-90023",
    testName: "Kidney Function",
    category: "Biochemistry",
    technician: "Imran",
    agingMinutes: 55,
    status: "pending",
    priority: "critical",
  },
];

export const notifications: NotificationItem[] = [
  {
    id: "N-1",
    role: "delivery",
    title: "Report Ready",
    message: "P-90021 Thyroid report is ready for delivery desk.",
    time: "5m ago",
    read: false,
    type: "ready",
  },
  {
    id: "N-2",
    role: "operator",
    title: "Urgent Sample Pending",
    message: "Token T-1203 urgent sample collection is pending.",
    time: "8m ago",
    read: false,
    type: "urgent",
  },
  {
    id: "N-3",
    role: "senior",
    title: "Abnormal Value Flagged",
    message: "TSH critical value needs senior review for P-90021.",
    time: "14m ago",
    read: true,
    type: "abnormal",
  },
];

export const performanceMetrics: PerformanceMetric[] = [
  {
    id: "PM-1",
    staffName: "Rakib Hasan",
    role: "technician",
    completed: 41,
    pending: 6,
    tatAverageMins: 52,
  },
  {
    id: "PM-2",
    staffName: "Nusrat Jahan",
    role: "technician",
    completed: 37,
    pending: 4,
    tatAverageMins: 48,
  },
  {
    id: "PM-3",
    staffName: "Dr. Saba Noor",
    role: "senior",
    completed: 58,
    pending: 3,
    tatAverageMins: 39,
  },
];

export const trendSeries = [
  { day: "Mon", today: 82, yesterday: 74, delivery: 56 },
  { day: "Tue", today: 89, yesterday: 77, delivery: 61 },
  { day: "Wed", today: 93, yesterday: 85, delivery: 64 },
  { day: "Thu", today: 88, yesterday: 81, delivery: 60 },
  { day: "Fri", today: 97, yesterday: 84, delivery: 71 },
  { day: "Sat", today: 77, yesterday: 70, delivery: 53 },
  { day: "Sun", today: 69, yesterday: 66, delivery: 47 },
];

export const workloadSeries = [
  { section: "Hematology", value: 34 },
  { section: "Biochemistry", value: 26 },
  { section: "Thyroid", value: 18 },
  { section: "Urine", value: 12 },
  { section: "Others", value: 10 },
];
