interface GuxPaginationButtonsExpandedPageListItem {
    pageNumber: number;
    display: string;
    current: boolean;
}
export declare class GuxPaginationButtonsService {
    static displayAllPageButtons(currentPage: number, totalPages: number, layout: string): GuxPaginationButtonsExpandedPageListItem[];
}
export {};
