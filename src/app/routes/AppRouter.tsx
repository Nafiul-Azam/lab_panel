import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "../layouts/AppShell";
import { ActivityTimelinePage } from "../../features/activity/ActivityTimelinePage";
import { ApprovalVerificationPage } from "../../features/approval/ApprovalVerificationPage";
import { AnalyticsReportsPage } from "../../features/analytics/AnalyticsReportsPage";
import { BarcodeLabelsPage } from "../../features/barcode/BarcodeLabelsPage";
import { LabOverviewPage } from "../../features/dashboard/LabOverviewPage";
import { MobileQuickActionsPage } from "../../features/mobile-quick-actions/MobileQuickActionsPage";
import { NotificationsCenterPage } from "../../features/notifications/NotificationsCenterPage";
import { OrderReceptionPage } from "../../features/orders/OrderReceptionPage";
import { TestSelectionPage } from "../../features/orders/TestSelectionPage";
import { PatientInputPage } from "../../features/patient/PatientInputPage";
import { PatientSearchPage } from "../../features/patient/PatientSearchPage";
import { ProcessingQueuePage } from "../../features/processing/ProcessingQueuePage";
import { ProfileEditPage } from "../../features/profile/ProfileEditPage";
import { ProfilePage } from "../../features/profile/ProfilePage";
import { ReportDeliveryPage } from "../../features/delivery/ReportDeliveryPage";
import { ResultEntryPage } from "../../features/results/ResultEntryPage";
import { SampleCollectionPage } from "../../features/sample/SampleCollectionPage";
import { SeniorReviewEditPage } from "../../features/review/SeniorReviewEditPage";
import { SeniorReviewFullViewPage } from "../../features/review/SeniorReviewFullViewPage";
import { SeniorReviewPage } from "../../features/review/SeniorReviewPage";
import { SettingsPage } from "../../features/settings/SettingsPage";
import { StaffPerformancePage } from "../../features/staff/StaffPerformancePage";
import { TokenQueuePage } from "../../features/queue/TokenQueuePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<LabOverviewPage />} />
          <Route path="/patient-input" element={<PatientInputPage />} />
          <Route path="/token-queue" element={<TokenQueuePage />} />
          <Route path="/patient-search" element={<PatientSearchPage />} />
          <Route path="/order-reception" element={<OrderReceptionPage />} />
          <Route path="/test-selection" element={<TestSelectionPage />} />
          <Route path="/barcode-labels" element={<BarcodeLabelsPage />} />
          <Route path="/sample-collection" element={<SampleCollectionPage />} />
          <Route path="/processing-queue" element={<ProcessingQueuePage />} />
          <Route path="/result-entry" element={<ResultEntryPage />} />
          <Route path="/senior-review" element={<SeniorReviewPage />} />
          <Route
            path="/senior-review/edit"
            element={<SeniorReviewEditPage />}
          />
          <Route
            path="/senior-review/full-view"
            element={<SeniorReviewFullViewPage />}
          />
          <Route
            path="/approval-verification"
            element={<ApprovalVerificationPage />}
          />
          <Route path="/report-delivery" element={<ReportDeliveryPage />} />
          <Route path="/notifications" element={<NotificationsCenterPage />} />
          <Route path="/analytics" element={<AnalyticsReportsPage />} />
          <Route path="/staff-performance" element={<StaffPerformancePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/activity-timeline" element={<ActivityTimelinePage />} />
          <Route
            path="/mobile-quick-actions"
            element={<MobileQuickActionsPage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
