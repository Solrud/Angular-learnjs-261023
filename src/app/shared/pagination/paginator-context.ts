export interface PaginatorContext<T> {
    $implicit: T[];
    pageIndexes: number;
    index: number;
    next: () => void;
    back: () => void;
    selectIndex: (selectedIndex: number) => void;
}
