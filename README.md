# Pet Picks

A React + TypeScript image gallery assignment that fetches pet data from `GET /pets`, supports persistent multi-select downloads, search, sorting, pagination, and dynamic detail routes.

## Features

- Fetches `/pets` with `fetch` through a custom `usePets` hook.
- Explicit loading, error, and empty states.
- Search by title or description.
- Sort by name A-Z, name Z-A, newest first, and oldest first.
- Select all, clear selection, selected count, and estimated total file size.
- Selection state persists across routes through React context.
- Detail route for every pet at `/pets/:id`.
- About and Selected pages using `react-router-dom`.
- Pagination via a "Load More" gallery flow.
- Selected pets are also saved to local storage, so returning to the app keeps the current download tray intact.
- Responsive gallery: 1 column mobile, 2 columns tablet, 4 columns desktop.
- UI built with `styled-components`.
- Component and page styles live in separate `*.styles.ts` modules and are imported into their matching components.

## Run

```powershell
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```powershell
npm run build
```

## Local Data

The demo data lives at `public/pets`, so Vite serves it directly from `/pets`. If a real backend is supplied, it can return the same JSON shape:

```ts
type Pet = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  fileSize?: number;
};
```
# pet-collections
