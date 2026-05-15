export type Pet = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  fileSize?: number;
};

export type SortOption = 'name-asc' | 'name-desc' | 'date-newest' | 'date-oldest';
