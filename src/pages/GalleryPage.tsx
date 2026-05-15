import { LoaderCircle } from "lucide-react";
import { Button } from "../components/Button";
import { EmptyState } from "../components/EmptyState";
import { GalleryControls } from "../components/GalleryControls";
import { PetCard } from "../components/PetCard";
import { SelectionSummary } from "../components/SelectionSummary";
import { usePetCollection } from "../hooks/usePetCollection";
import { usePets } from "../hooks/usePets";
import { useSelection } from "../state/SelectionContext";
import {
  Centered,
  Grid,
  Hero,
  HeroText,
  LoadMore,
  ResultLine,
} from "./GalleryPage.styles";

export function GalleryPage() {
  const { pets, loading, error, empty, refetch } = usePets();
  const collection = usePetCollection(pets);
  const {
    isSelected,
    selectedCount,
    toggleSelection,
    selectMany,
    clearSelection,
  } = useSelection();

  if (loading) {
    return (
      <Centered>
        <LoaderCircle size={32} />
        <span>Loading pets...</span>
      </Centered>
    );
  }

  if (error) {
    return (
      <EmptyState
        title="Could not load pets"
        message={error}
        actionLabel="Try again"
        onAction={refetch}
      />
    );
  }

  if (empty) {
    return (
      <EmptyState
        title="No pets yet"
        message="The /pets endpoint returned an empty array. Add a few pets and the gallery will come alive."
      />
    );
  }

  return (
    <>
      <Hero>
        <HeroText>
          <span>Interactive pet library</span>
          <h1>Choose the companions worth downloading.</h1>
          <p>
            Browse, search, sort, select, and keep your picks while moving
            through detail pages.
          </p>
        </HeroText>
      </Hero>
      <SelectionSummary />

      <GalleryControls
        query={collection.query}
        sort={collection.sort}
        resultCount={collection.filteredPets.length}
        selectedCount={selectedCount}
        onQueryChange={collection.setQuery}
        onSortChange={collection.setSort}
        onSelectAll={() => selectMany(collection.filteredPets)}
        onClearSelection={clearSelection}
      />

      <ResultLine>
        Showing <strong>{collection.visiblePets.length}</strong> of{" "}
        <strong>{collection.filteredPets.length}</strong> pets
      </ResultLine>

      {collection.filteredPets.length === 0 ? (
        <EmptyState
          title="No matches"
          message="Try a different search term or clear the search field to see every pet."
        />
      ) : (
        <>
          <Grid>
            {collection.visiblePets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                selected={isSelected(pet.id)}
                onToggle={toggleSelection}
              />
            ))}
          </Grid>

          <LoadMore>
            {collection.hasMore ? (
              <Button
                type="button"
                $variant="primary"
                onClick={() => collection.setPage(collection.page + 1)}
              >
                Load More Pets
              </Button>
            ) : null}
          </LoadMore>
        </>
      )}
    </>
  );
}
