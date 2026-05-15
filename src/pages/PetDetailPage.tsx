import { ArrowLeft, Check, Download, Plus } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { EmptyState } from '../components/EmptyState';
import { usePets } from '../hooks/usePets';
import { useSelection } from '../state/SelectionContext';
import { downloadPets } from '../utils/download';
import { formatBytes, formatDate } from '../utils/formatters';
import {
  ActionRow,
  BackLink,
  Detail,
  DetailGrid,
  Fact,
  FactGrid,
  Kicker,
  PhotoPanel,
  Profile,
} from './PetDetailPage.styles';

export function PetDetailPage() {
  const { id } = useParams();
  const { pets, loading, error, refetch } = usePets();
  const { isSelected, toggleSelection } = useSelection();
  const pet = pets.find((candidate) => candidate.id === id);

  if (loading) {
    return <EmptyState title="Loading pet" message="Fetching this companion's profile..." />;
  }

  if (error) {
    return (
      <EmptyState
        title="Could not load pet"
        message={error}
        actionLabel="Try again"
        onAction={refetch}
      />
    );
  }

  if (!pet) {
    return (
      <EmptyState
        title="Pet not found"
        message="That pet is not in the current /pets response."
      />
    );
  }

  const selected = isSelected(pet.id);

  return (
    <Detail>
      <BackLink to="/">
        <ArrowLeft size={18} />
        Back to gallery
      </BackLink>

      <DetailGrid>
        <PhotoPanel>
          <img src={pet.imageUrl} alt={pet.title} />
        </PhotoPanel>

        <Profile>
          <Kicker>{formatDate(pet.createdAt)}</Kicker>
          <h1>{pet.title}</h1>
          <p>{pet.description}</p>

          <FactGrid>
            <Fact>
              <span>Estimated file size</span>
              <strong>{formatBytes(pet.fileSize)}</strong>
            </Fact>
            <Fact>
              <span>Gallery id</span>
              <strong>{pet.id}</strong>
            </Fact>
          </FactGrid>

          <ActionRow>
            <Button type="button" $variant="primary" onClick={() => toggleSelection(pet)}>
              {selected ? <Check size={18} /> : <Plus size={18} />}
              {selected ? 'Selected' : 'Select'}
            </Button>
            <Button type="button" onClick={() => downloadPets([pet])}>
              <Download size={18} />
              Download Image
            </Button>
          </ActionRow>
        </Profile>
      </DetailGrid>
    </Detail>
  );
}
