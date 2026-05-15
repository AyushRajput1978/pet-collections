import { useEffect, useMemo, useState } from "react";
import type { Pet } from "../types";

type UsePetsResult = {
  pets: Pet[];
  loading: boolean;
  error: string | null;
  empty: boolean;
  refetch: () => void;
};

function isPet(value: unknown): value is Pet {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.title === "string" &&
    typeof candidate.description === "string" &&
    typeof candidate.imageUrl === "string" &&
    typeof candidate.createdAt === "string"
  );
}

export function usePets(): UsePetsResult {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPets() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/pets", { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`);
        }

        const data: Pet[] = await response.json();
        console.log(data, "pesttstst");
        if (!Array.isArray(data)) {
          throw new Error("The /pets response was not an array.");
        }

        const normalizedPets = data.filter(isPet).map((pet) => ({
          ...pet,
          fileSize: typeof pet.fileSize === "number" ? pet.fileSize : 0,
        }));

        setPets(normalizedPets);
      } catch (requestError) {
        if (
          requestError instanceof DOMException &&
          requestError.name === "AbortError"
        ) {
          return;
        }

        setPets([]);
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Unable to load pets.",
        );
      } finally {
        setLoading(false);
      }
    }

    void loadPets();

    return () => controller.abort();
  }, [reloadToken]);

  return useMemo(
    () => ({
      pets,
      loading,
      error,
      empty: !loading && !error && pets.length === 0,
      refetch: () => setReloadToken((value) => value + 1),
    }),
    [error, loading, pets],
  );
}
