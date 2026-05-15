import { useMemo, useState } from 'react';
import type { Pet, SortOption } from '../types';

const PAGE_SIZE = 8;

function sortPets(pets: Pet[], sort: SortOption) {
  return [...pets].sort((left, right) => {
    if (sort === 'name-asc') return left.title.localeCompare(right.title);
    if (sort === 'name-desc') return right.title.localeCompare(left.title);

    const leftDate = new Date(left.createdAt).getTime();
    const rightDate = new Date(right.createdAt).getTime();
    return sort === 'date-newest' ? rightDate - leftDate : leftDate - rightDate;
  });
}

export function usePetCollection(pets: Pet[]) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('date-newest');
  const [page, setPage] = useState(1);

  const filteredPets = useMemo(() => {
    const loweredQuery = query.trim().toLowerCase();
    const matches = loweredQuery
      ? pets.filter((pet) =>
          `${pet.title} ${pet.description}`.toLowerCase().includes(loweredQuery),
        )
      : pets;

    return sortPets(matches, sort);
  }, [pets, query, sort]);

  const visiblePets = filteredPets.slice(0, page * PAGE_SIZE);
  const hasMore = visiblePets.length < filteredPets.length;

  return {
    query,
    setQuery: (nextQuery: string) => {
      setQuery(nextQuery);
      setPage(1);
    },
    sort,
    setSort: (nextSort: SortOption) => {
      setSort(nextSort);
      setPage(1);
    },
    page,
    setPage,
    filteredPets,
    visiblePets,
    hasMore,
    pageSize: PAGE_SIZE,
  };
}
