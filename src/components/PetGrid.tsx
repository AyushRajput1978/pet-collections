import { useSelection } from "../state/SelectionContext";
import type { Pet } from "../types";
import { PetCard } from "./PetCard";
import { Grid } from "./PetGrid.styles";

type PetGridProps = {
  pets: Pet[];
};

export function PetGrid({ pets }: PetGridProps) {
  const { isSelected, toggleSelection } = useSelection();

  return (
    <Grid>
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          selected={isSelected(pet.id)}
          onToggle={toggleSelection}
        />
      ))}
    </Grid>
  );
}
