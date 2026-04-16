# Module Notes

## Purpose
This folder contains module-specific files for the lab panel operational frontend.

## Used In
- Used by route-level pages and/or app shell
- Wired through `src/app/routes/AppRouter.tsx`

## State Flow
- Reads from Zustand app store (`src/store/useAppStore.ts`) where needed
- Uses shared mock data contracts from `src/data/mockData.ts` and `src/types`

## Customize
- Add or replace component/page logic in this folder
- Keep exports typed and route-safe

## Dependencies
- React + TypeScript
- Tailwind utility classes
- Optional: Recharts / React Hook Form / TanStack Table based on module needs
