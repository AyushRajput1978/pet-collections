import { Check, Download, Eye, Plus } from 'lucide-react';
import type { Pet } from '../types';
import { formatBytes, formatDate } from '../utils/formatters';
import {
  ActionAnchor,
  ActionLink,
  Actions,
  Card,
  CardBody,
  ImageWrap,
  Meta,
  SelectButton,
} from './PetCard.styles';

type PetCardProps = {
  pet: Pet;
  selected: boolean;
  onToggle: (pet: Pet) => void;
};

export function PetCard({ pet, selected, onToggle }: PetCardProps) {
  return (
    <Card $selected={selected}>
      <ImageWrap>
        <img src={pet.imageUrl} alt={pet.title} loading="lazy" />
        <SelectButton
          type="button"
          aria-pressed={selected}
          aria-label={selected ? `Remove ${pet.title} from selection` : `Select ${pet.title}`}
          onClick={() => onToggle(pet)}
        >
          {selected ? <Check size={18} /> : <Plus size={18} />}
        </SelectButton>
      </ImageWrap>

      <CardBody>
        <Meta>
          <span>{formatDate(pet.createdAt)}</span>
          <span>{formatBytes(pet.fileSize)}</span>
        </Meta>
        <h2>{pet.title}</h2>
        <p>{pet.description}</p>
      </CardBody>

      <Actions>
        <ActionLink to={`/pets/${pet.id}`}>
          <Eye size={17} />
          View
        </ActionLink>
        <ActionAnchor href={pet.imageUrl} download>
          <Download size={17} />
          Image
        </ActionAnchor>
      </Actions>
    </Card>
  );
}
