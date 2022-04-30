export interface ISort<T> {
    sortBy: keyof T;
    sortDirection: 'ASC' | 'DESC';
}
export declare function applySortParams<T>(items: T[], { sortBy, sortDirection }: ISort<T>): T[];
