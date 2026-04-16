# Laboratory Management Panel - Project Guide

## Overview

This project is a production-style React + TypeScript frontend for a diagnostic center workflow. It includes role-aware operations across reception, sample collection, processing, result entry, senior review, verification, and report delivery.

## Stack

- React 19 + TypeScript + Vite
- React Router DOM (route-based panel navigation)
- Tailwind CSS (design tokens + premium clinical look)
- Framer Motion (subtle motion)
- Recharts (analytics and dashboard trends)
- React Hook Form + Zod (validated forms)
- TanStack Table (queue table)
- Zustand (local role, toast, patient workflow state)
- date-fns (date formatting)
- react-barcode (label generation preview)

## Product Scope

- Desktop sidebar layout with role-aware menu visibility
- Mobile bottom navigation with More sheet and floating quick action
- 20 primary pages with separate routes
- Practical Bangladesh clinic/lab workflow simulation with realistic mock data
- Notifications and toast flow

## Run

```bash
npm install
npm run dev
npm run build
```

## Folder Strategy

- `src/app`: app shell, providers, route wiring
- `src/components`: reusable UI and workflow components
- `src/features`: route pages, grouped by domain
- `src/data`: mock dataset for operational workflows
- `src/store`: global local state (role, patient search, toasts)
- `src/types`: domain models
- `src/constants`: role labels and navigation contracts
- `src/utils`: helpers for class merge and date formatting

## Backend Integration Notes

- Replace `src/data/mockData.ts` with API adapters in `src/mock-api`.
- Keep present types in `src/types` as API DTO contracts.
- Add TanStack Query for remote cache and mutations.
- Persist auth + role in secure token storage.
- Replace placeholder actions (buttons) with mutation calls and optimistic UI.
