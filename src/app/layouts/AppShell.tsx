import type { ReactNode } from "react";
import { DesktopSidebar } from "../../components/navigation/DesktopSidebar";
import { FloatingQuickAction } from "../../components/navigation/FloatingQuickAction";
import { MobileBottomNav } from "../../components/navigation/MobileBottomNav";
import { MobileMoreSheet } from "../../components/navigation/MobileMoreSheet";
import { TopHeader } from "../../components/layout/TopHeader";
import { ToastViewport } from "../../components/feedback/ToastViewport";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen p-3 md:p-4">
      <div className="mx-auto grid max-w-[1500px] gap-3 md:grid-cols-[auto_1fr]">
        <DesktopSidebar />
        <main className="pb-32 md:pb-4">
          <TopHeader />
          <div className="space-y-4">{children}</div>
        </main>
      </div>
      <FloatingQuickAction />
      <MobileBottomNav />
      <MobileMoreSheet />
      <ToastViewport />
    </div>
  );
}
