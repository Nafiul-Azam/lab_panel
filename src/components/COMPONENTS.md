# Components Folder Guide

`src/components` holds reusable UI and workflow primitives.

- layout: headers, section titles, action bars
- navigation: desktop sidebar, mobile bottom nav, more sheet, quick action
- shared: badges, cards, search, back button
- charts: chart wrappers and mini trend card
- tables: TanStack queue table
- forms: auto-fill, sample collection, result entry forms
- workflow: barcode/review/approval/activity reusable blocks
- feedback: notification cards, loading, empty state, toast viewport
- profile: profile summary and edit form

State flow:

- Most components consume Zustand selectors from `useAppStore`
- Page components orchestrate data and actions

Customization:

- Change color tokens in `tailwind.config.js` and `src/index.css`
- Swap chart internals in `components/charts`
- Add more state slices in `src/store/useAppStore.ts`
