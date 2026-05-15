import { EmptyState } from '../components/EmptyState';
import { PetCard } from '../components/PetCard';
import { SelectionSummary } from '../components/SelectionSummary';
import { useSelection } from '../state/SelectionContext';
import { Grid, Header, Page } from './SelectionPage.styles';

export function SelectionPage() {
  const { selectedPets, selectedCount, isSelected, toggleSelection } = useSelection();

  return (
    <Page>
      <Header>
        <span>Saved across routes</span>
        <h1>Your selected pets</h1>
      </Header>

      <SelectionSummary />

      {selectedCount === 0 ? (
        <EmptyState
          title="Nothing selected"
          message="Select pets from the gallery and they will stay here while you browse detail pages."
        />
      ) : (
        <Grid>
          {selectedPets.map((pet) => (
            <PetCard
              key={pet.id}
              pet={pet}
              selected={isSelected(pet.id)}
              onToggle={toggleSelection}
            />
          ))}
        </Grid>
      )}
    </Page>
  );
}
