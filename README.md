lab-panel.vercel.app


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # Laboratory Management Panel

  Premium, scalable, role-based laboratory operations frontend built with React + TypeScript + Vite.

  ## Quick Start
  ```bash
  npm install
  npm run dev
````

## Production Build

```bash
npm run build
npm run preview
```

## Included

- Desktop sidebar + mobile bottom navigation + More sheet
- 20 route pages for full lab workflow
- Role-based menu visibility
- Workflow mock data: token -> patient search -> barcode -> sample -> result -> review -> approval -> delivery
- Charts, status badges, queue table, notifications, profile/edit, settings
- Documentation files:
  - PROJECT_GUIDE.md
  - ROUTING_GUIDE.md
  - UI_SYSTEM.md
  - LAB_WORKFLOW.md

## Notes

This project is frontend-only with realistic mock flows. Integrate backend services via `src/mock-api` and migrate data from `src/data/mockData.ts`.
import reactX from 'eslint-plugin-react-x'
