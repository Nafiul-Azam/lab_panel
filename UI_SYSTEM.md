# UI System

## Visual Direction

- Light clinical palette: teal/cyan/mint + white + soft gray
- Glassmorphism-lite cards with soft blur and shadows
- Premium but operationally practical dashboard density

## Design Tokens

Defined in:

- Tailwind extension: `tailwind.config.js`
- Base CSS variables + utility components: `src/index.css`

## Typography

- Heading: Sora
- Body: Manrope

## Reusable Building Blocks

- Layout: AppShell, DesktopSidebar, MobileBottomNav, TopHeader, PageHeader
- Data display: StatCard, ChartCard, MiniAreaChartCard, QueueTable, StatusBadge, PriorityBadge
- Workflow: PatientSearchPanel, AutoFillPatientForm, SampleCollectionForm, ResultEntryForm, ReviewCard, ApprovalCard, BarcodeLabelCard
- Feedback: NotificationCard, EmptyState, LoadingSkeleton, ToastViewport

## Responsive Rules Implemented

- Desktop: left sidebar with collapse mode
- Mobile: bottom nav + More sheet + floating quick action
- Cards: 2-column on small screens for key metrics where possible
- Mobile cards use smaller radius (`rounded-2xl`) vs desktop (`rounded-3xl`)
