import { Search, SlidersHorizontal } from 'lucide-react';
import type { SortOption } from '../types';
import { Button } from './Button';
import { Controls, SearchBox, SortBox } from './GalleryControls.styles';

type GalleryControlsProps = {
  query: string;
  sort: SortOption;
  resultCount: number;
  selectedCount: number;
  onQueryChange: (query: string) => void;
  onSortChange: (sort: SortOption) => void;
  onSelectAll: () => void;
  onClearSelection: () => void;
};

export function GalleryControls({
  query,
  sort,
  resultCount,
  selectedCount,
  onQueryChange,
  onSortChange,
  onSelectAll,
  onClearSelection,
}: GalleryControlsProps) {
  return (
    <Controls>
      <SearchBox>
        <Search size={18} />
        <input
          aria-label="Search pets"
          placeholder="Search title or description"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </SearchBox>

      <SortBox>
        <SlidersHorizontal size={18} />
        <select
          aria-label="Sort pets"
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
        >
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="date-newest">Date Newest First</option>
          <option value="date-oldest">Date Oldest First</option>
        </select>
      </SortBox>

      <Button type="button" onClick={onSelectAll} disabled={resultCount === 0}>
        Select All
      </Button>
      <Button type="button" onClick={onClearSelection} disabled={selectedCount === 0}>
        Clear Selection
      </Button>
    </Controls>
  );
}
