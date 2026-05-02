# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (clears .parcel-cache and dist first)
npm run build        # Production build
npm run new-component [ComponentName]  # Scaffold a new component with boilerplate
```

No test runner is configured in this project.

## Architecture

This is a **Joy of React** course project — a `Toast` notification UI component built with React 19 and Parcel.

**Component hierarchy:**
- `App` renders `ToastPlayground` + `Footer`
- `ToastPlayground` owns toast state (array of `{ id, variant, msg, destroy }` objects), renders a form for creating toasts and a `ToastShelf` to display them
- `ToastShelf` renders an `<ol>` and maps each toast to a `<Toast>` wrapped in `<li>`
- `Toast` accepts `variant`, `msg`, and `destroy` props; variants are `notice | warning | success | error`

**Key patterns:**
- Each component lives in `src/components/[Name]/[Name].js` with a co-located CSS Module (`[Name].module.css`) and an `index.js` re-export
- Toast IDs are generated with `crypto.randomUUID()`; never use array index as key
- `VisuallyHidden` is a utility component for screen-reader-only text

**Planned but not yet implemented** (per README exercises):
- `ToastProvider` context component to lift toast state out of `ToastPlayground`
- `src/hooks/` directory with a `useEscapeKey` custom hook
- Accessibility attributes on `ToastShelf` (`role="region"`, `aria-live="polite"`, `aria-label="Notification"`) and on the close button (`aria-label="Dismiss message"`, `aria-live="off"`)

## Troubleshooting

If the dev server behaves oddly, delete `.parcel-cache` (the `predev` script does this automatically, but you may need to do it manually mid-session).

A `TypeError: Cannot destructure property ... of useContext(...)` error on save is a known Parcel HMR bug — refreshing the page resolves it.
