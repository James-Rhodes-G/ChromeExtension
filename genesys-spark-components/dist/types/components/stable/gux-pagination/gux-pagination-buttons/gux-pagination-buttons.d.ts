import { JSX } from '../../../../stencil-public-runtime';
import { GuxPaginationLayout } from '../gux-pagination.types';
export declare class GuxPaginationButtons {
    currentElement: HTMLElement;
    private root;
    private i18n;
    currentPage: number;
    totalPages: number;
    layout: GuxPaginationLayout;
    disabled: boolean;
    private internalcurrentpagechange;
    goToPageHandler(event: CustomEvent<number>): void;
    private get onFirstPage();
    private get onLastPage();
    private handleClickFirst;
    private handleClickPrevious;
    private handleClickNext;
    private handleClickLast;
    private handlePageChange;
    private getPageListEnteries;
    private getPageNavigation;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
