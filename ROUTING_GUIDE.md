# Routing Guide

## Route Map

- `/` -> Lab Overview Dashboard
- `/token-queue` -> Token Queue Page
- `/patient-search` -> Patient Search & Auto-Fill
- `/order-reception` -> Order Reception
- `/test-selection` -> Test Selection
- `/barcode-labels` -> Barcode Generation & Labels
- `/sample-collection` -> Sample Collection
- `/processing-queue` -> Processing Queue
- `/result-entry` -> Result Entry
- `/senior-review` -> Senior Technician Review
- `/approval-verification` -> Approval / Verification
- `/report-delivery` -> Report Delivery
- `/notifications` -> Notifications Center
- `/analytics` -> Lab Analytics & Reports
- `/staff-performance` -> Staff / Role Performance
- `/profile` -> Profile
- `/profile/edit` -> Profile Edit
- `/settings` -> Settings
- `/activity-timeline` -> Activity Timeline
- `/mobile-quick-actions` -> Mobile Quick Action View

## Routing Architecture

- BrowserRouter wraps entire app.
- AppShell stays persistent across all routes.
- `Routes` are nested inside shell for stable sidebar/header/nav.
- Unknown paths redirect to `/`.

## Role-aware Navigation

Route definitions are public in frontend demo mode, but sidebar/mobile items are filtered by current role from Zustand store.
