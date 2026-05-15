import { Route, Routes } from 'react-router-dom';
import { EmptyState } from './components/EmptyState';
import { Shell } from './components/Shell';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { PetDetailPage } from './pages/PetDetailPage';
import { SelectionPage } from './pages/SelectionPage';

export function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/pets/:id" element={<PetDetailPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="*"
          element={
            <EmptyState
              title="Page not found"
              message="That route is not part of the pet gallery."
              actionLabel="Back to gallery"
              actionHref="/"
            />
          }
        />
      </Routes>
    </Shell>
  );
}
