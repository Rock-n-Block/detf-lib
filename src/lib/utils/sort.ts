export interface ISort<T> {
  sortBy: keyof T;
  sortDirection: 'ASC' | 'DESC';
}

export function applySortParams<T>(items: T[], { sortBy, sortDirection }: ISort<T>): T[] {
  return items.sort((a: T, b: T) => {
    return sortDirection === 'ASC' ? (a[sortBy] > b[sortBy] ? 1 : -1) : (a[sortBy] < b[sortBy] ? 1 : -1);
  });
}