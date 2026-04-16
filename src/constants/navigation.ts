import {
  Activity,
  BarChart3,
  Bell,
  ClipboardList,
  FileInput,
  FlaskConical,
  Home,
  ScanLine,
  Settings,
  ShieldCheck,
  TestTube,
  User,
  Users,
} from "lucide-react";
import type { Role } from "../types";

export interface NavItem {
  label: string;
  path: string;
  icon: typeof Home;
  roles: Role[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

const allRoles: Role[] = [
  "admin",
  "operator",
  "collector",
  "technician",
  "senior",
  "approver",
  "delivery",
  "super_admin",
];

export const desktopNav: NavGroup[] = [
  {
    title: "Overview",
    items: [{ label: "Lab Overview", path: "/", icon: Home, roles: allRoles }],
  },
  {
    title: "Laboratory",
    items: [
      {
        label: "Patient Input",
        path: "/patient-input",
        icon: FileInput,
        roles: ["admin", "operator", "super_admin"],
      },
      {
        label: "Token & Queue",
        path: "/token-queue",
        icon: ClipboardList,
        roles: ["admin", "operator", "super_admin"],
      },
      {
        label: "Patient Search",
        path: "/patient-search",
        icon: Users,
        roles: ["admin", "operator", "super_admin"],
      },
      {
        label: "Order Reception",
        path: "/order-reception",
        icon: FlaskConical,
        roles: ["admin", "operator", "super_admin"],
      },
      {
        label: "Test Selection",
        path: "/test-selection",
        icon: TestTube,
        roles: ["admin", "operator", "super_admin"],
      },
      {
        label: "Barcode & Labels",
        path: "/barcode-labels",
        icon: ScanLine,
        roles: ["admin", "operator", "collector", "super_admin"],
      },
      {
        label: "Sample Collection",
        path: "/sample-collection",
        icon: TestTube,
        roles: ["admin", "collector", "super_admin"],
      },
      {
        label: "Processing Queue",
        path: "/processing-queue",
        icon: Activity,
        roles: ["admin", "technician", "super_admin"],
      },
      {
        label: "Result Entry",
        path: "/result-entry",
        icon: FlaskConical,
        roles: ["admin", "technician", "super_admin"],
      },
      {
        label: "Senior Review",
        path: "/senior-review",
        icon: ShieldCheck,
        roles: ["admin", "senior", "super_admin"],
      },
      {
        label: "Approval / Verification",
        path: "/approval-verification",
        icon: ShieldCheck,
        roles: ["admin", "approver", "super_admin"],
      },
      {
        label: "Report Delivery",
        path: "/report-delivery",
        icon: ClipboardList,
        roles: ["admin", "delivery", "operator", "super_admin"],
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        label: "Notifications",
        path: "/notifications",
        icon: Bell,
        roles: allRoles,
      },
      {
        label: "Analytics",
        path: "/analytics",
        icon: BarChart3,
        roles: ["admin", "super_admin"],
      },
      {
        label: "Staff / Roles",
        path: "/staff-performance",
        icon: Users,
        roles: ["admin", "super_admin"],
      },
      {
        label: "Activity Timeline",
        path: "/activity-timeline",
        icon: Activity,
        roles: allRoles,
      },
    ],
  },
  {
    title: "Personal",
    items: [
      { label: "Profile", path: "/profile", icon: User, roles: allRoles },
      {
        label: "Settings",
        path: "/settings",
        icon: Settings,
        roles: ["admin", "super_admin", "operator"],
      },
    ],
  },
];

export const mobilePrimaryNav: NavItem[] = [
  { label: "Home", path: "/", icon: Home, roles: allRoles },
  {
    label: "Orders",
    path: "/order-reception",
    icon: ClipboardList,
    roles: ["admin", "operator", "super_admin"],
  },
  {
    label: "Queue",
    path: "/processing-queue",
    icon: Activity,
    roles: allRoles,
  },
  {
    label: "Reports",
    path: "/report-delivery",
    icon: BarChart3,
    roles: ["admin", "delivery", "operator", "super_admin"],
  },
];

export const mobileMoreItems: NavItem[] = [
  {
    label: "Sample Collection",
    path: "/sample-collection",
    icon: TestTube,
    roles: ["admin", "collector", "super_admin"],
  },
  {
    label: "Result Entry",
    path: "/result-entry",
    icon: FlaskConical,
    roles: ["admin", "technician", "super_admin"],
  },
  {
    label: "Approval",
    path: "/approval-verification",
    icon: ShieldCheck,
    roles: ["admin", "approver", "super_admin"],
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: Bell,
    roles: allRoles,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
    roles: ["admin", "super_admin"],
  },
  { label: "Profile", path: "/profile", icon: User, roles: allRoles },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
    roles: ["admin", "operator", "super_admin"],
  },
  {
    label: "Help",
    path: "/mobile-quick-actions",
    icon: Activity,
    roles: allRoles,
  },
];
