import { create } from "zustand";
import {
  currentUser,
  incomingTokens,
  notifications,
  patients,
} from "../data/mockData";
import type { NotificationItem, Patient, Role, TokenItem } from "../types";

interface AppState {
  role: Role;
  sidebarCollapsed: boolean;
  mobileMoreOpen: boolean;
  toasts: { id: string; title: string; message: string }[];
  selectedPatient?: Patient;
  notifications: NotificationItem[];
  tokenQueue: TokenItem[];
  setRole: (role: Role) => void;
  toggleSidebar: () => void;
  openMobileMore: () => void;
  closeMobileMore: () => void;
  pushToast: (title: string, message: string) => void;
  removeToast: (id: string) => void;
  markNotificationRead: (id: string) => void;
  setSelectedPatient: (patient: Patient | undefined) => void;
  searchPatient: (query: string) => Patient | undefined;
  addTokenToQueue: (token: TokenItem) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  role: currentUser.role,
  sidebarCollapsed: false,
  mobileMoreOpen: false,
  toasts: [],
  notifications,
  tokenQueue: incomingTokens,
  selectedPatient: patients[0],
  setRole: (role) => set({ role }),
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  openMobileMore: () => set({ mobileMoreOpen: true }),
  closeMobileMore: () => set({ mobileMoreOpen: false }),
  pushToast: (title, message) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        {
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          title,
          message,
        },
      ],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((item) =>
        item.id === id ? { ...item, read: true } : item,
      ),
    })),
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  searchPatient: (query) => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return undefined;
    }
    const patient = patients.find(
      (item) =>
        item.id.toLowerCase() === normalized ||
        item.token.toLowerCase() === normalized ||
        item.phone.includes(normalized),
    );
    get().setSelectedPatient(patient);
    return patient;
  },
  addTokenToQueue: (token) =>
    set((state) => {
      const exists = state.tokenQueue.some(
        (item) =>
          item.token.toLowerCase() === token.token.toLowerCase() ||
          item.patientId.toLowerCase() === token.patientId.toLowerCase(),
      );

      if (exists) {
        return state;
      }

      return { tokenQueue: [token, ...state.tokenQueue] };
    }),
}));
