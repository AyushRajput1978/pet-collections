import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Pet } from '../types';

type SelectionContextValue = {
  selectedIds: Set<string>;
  selectedCount: number;
  selectedPets: Pet[];
  totalFileSize: number;
  isSelected: (id: string) => boolean;
  toggleSelection: (pet: Pet) => void;
  selectMany: (pets: Pet[]) => void;
  clearSelection: () => void;
};

const SelectionContext = createContext<SelectionContextValue | null>(null);
const STORAGE_KEY = 'pet-picks-selection';

function isStoredPet(value: unknown): value is Pet {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.description === 'string' &&
    typeof candidate.imageUrl === 'string' &&
    typeof candidate.createdAt === 'string'
  );
}

function readStoredSelection(): Record<string, Pet> {
  try {
    const storedSelection: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');

    if (!storedSelection || typeof storedSelection !== 'object' || Array.isArray(storedSelection)) {
      return {};
    }

    return Object.entries(storedSelection).reduce<Record<string, Pet>>((selection, [id, pet]) => {
      if (isStoredPet(pet) && pet.id === id) {
        selection[id] = pet;
      }

      return selection;
    }, {});
  } catch {
    return {};
  }
}

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selectedPetsById, setSelectedPetsById] = useState<Record<string, Pet>>(readStoredSelection);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedPetsById));
    } catch {
      // Selection still persists across route changes through context if storage is unavailable.
    }
  }, [selectedPetsById]);

  const value = useMemo<SelectionContextValue>(() => {
    const selectedPets = Object.values(selectedPetsById);
    const selectedIds = new Set(Object.keys(selectedPetsById));

    return {
      selectedIds,
      selectedCount: selectedPets.length,
      selectedPets,
      totalFileSize: selectedPets.reduce((total, pet) => total + (pet.fileSize ?? 0), 0),
      isSelected: (id) => selectedIds.has(id),
      toggleSelection: (pet) =>
        setSelectedPetsById((current) => {
          const next = { ...current };

          if (next[pet.id]) {
            delete next[pet.id];
          } else {
            next[pet.id] = pet;
          }

          return next;
        }),
      selectMany: (pets) =>
        setSelectedPetsById((current) => {
          const next = { ...current };
          pets.forEach((pet) => {
            next[pet.id] = pet;
          });
          return next;
        }),
      clearSelection: () => setSelectedPetsById({}),
    };
  }, [selectedPetsById]);

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useSelection() {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error('useSelection must be used inside SelectionProvider');
  }

  return context;
}
