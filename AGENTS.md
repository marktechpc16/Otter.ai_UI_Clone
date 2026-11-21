# AGENTS.md

Front-end only UI clone of a meeting-transcription dashboard. No backend, no API calls, all data is mocked.

## Stack
- React 19 + Vite 6, plain JSX (no TypeScript)
- Tailwind CSS 3 (+ `tailwind-scrollbar`) for all styling
- Redux Toolkit for UI state (popups, sidebars, imported files)
- `react-icons` for icons, `react-calendar`, `react-toastify`

## Commands
- `npm ci` install
- `npm run dev` dev server
- `npm run lint` ESLint (must pass, currently clean)
- `npm run build` production build (must pass)

There are no tests. Verify UI changes by running the app (or a Playwright screenshot), not just by building.

## Layout
- `src/main.jsx` mounts `<App>` inside Redux `Provider` and `BrowserRouter`
- `src/App.jsx` renders `components/layout/MainLayout.jsx`, which composes everything
- `src/components/` grouped by screen area: `navBarDashboard/`, `mainContain/`, `rightSideBar/`, `trueRightSideBar/`, `notifaction/`, `profile/`, `recording/`, `meetingToRecord/`, `files/`
- `src/redux/store.jsx` registers slices from `src/redux/slice/`
- Mock data lives at the repo root: `meetingData.js`, `meetingMyConversation.js` (imported by `mainContain/` components)

## Conventions
- Styling is Tailwind utility classes. Don't introduce new styling systems.
- New global UI state goes in a new slice under `src/redux/slice/` and is registered in `store.jsx`. Local-only state stays in `useState`.
- Existing names are misspelled (`notifaction`, `calander`, `profule`). Match them when importing. Only rename as a dedicated change that updates every import, never as a drive-by.
- Keep components as `.jsx` function components with a default export, matching existing files.

## Known quirks (don't "fix" silently, flag them)
- `BrowserRouter` is mounted but no `<Routes>` exist yet. Navigation is driven by Redux/state.
- `@mui/*`, `@emotion/*` and `styled-components` are installed but unused.
- Two Tailwind configs exist. `tailwind.config.js` is the one loaded. `tailwind.config.mjs` uses `require` in an ES module and is dead.
- `README.md` is the stock Vite template.
