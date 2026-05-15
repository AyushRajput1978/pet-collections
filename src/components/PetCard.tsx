import { Download, Eye, Plus, X } from "lucide-react";
import type { Pet } from "../types";
import { downloadPets } from "../utils/download";
import { formatBytes, formatDate } from "../utils/formatters";
import {
  ActionRow,
  DownloadButton,
  Card,
  Content,
  ImageWrap,
  Meta,
  ViewButton,
  SelectButton,
} from "./PetCard.styles";
import { Link } from "react-router-dom";

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
      </ImageWrap>

      <SelectButton
        type="button"
        aria-pressed={selected}
        aria-label={
          selected
            ? `Remove ${pet.title} from selection`
            : `Select ${pet.title}`
        }
        onClick={() => onToggle(pet)}
      >
        {selected ? <X size={17} /> : <Plus size={17} />}
      </SelectButton>

      <Content>
        <h2>{pet.title}</h2>
        <p>{pet.description}</p>

        <Meta>
          <span>{formatDate(pet.createdAt)}</span>
          <span>{formatBytes(pet.fileSize)}</span>
          <a href={pet.imageUrl}>
            <Eye size={25} />
          </a>
        </Meta>

        <ActionRow>
          <DownloadButton type="button" onClick={() => downloadPets([pet])}>
            <Download size={15} />
            Download
          </DownloadButton>

          <ViewButton to={`/pets/${pet.id}`}>
            <Eye size={15} />
            View Details
          </ViewButton>
        </ActionRow>
      </Content>
    </Card>
  );
}
