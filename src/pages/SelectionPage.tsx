import { EmptyState } from '../components/EmptyState';
import { PageIntro } from '../components/PageIntro';
import { PetGrid } from '../components/PetGrid';
import { SelectionSummary } from '../components/SelectionSummary';
import { useSelection } from '../state/SelectionContext';
import { Page } from './SelectionPage.styles';

export function SelectionPage() {
  const { selectedPets, selectedCount } = useSelection();

  return (
    <Page>
      <PageIntro eyebrow="Saved across routes" title="Your selected pets" />

      <SelectionSummary />

      {selectedCount === 0 ? (
        <EmptyState
          title="Nothing selected"
          message="Select pets from the gallery and they will stay here while you browse detail pages."
        />
      ) : (
        <PetGrid pets={selectedPets} />
      )}
    </Page>
  );
}
