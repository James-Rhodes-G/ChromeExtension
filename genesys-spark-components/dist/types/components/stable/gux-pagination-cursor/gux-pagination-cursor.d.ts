import { JSX } from '../../../stencil-public-runtime';
import { GuxItemsPerPage } from '../gux-pagination/gux-pagination.types';
export declare class GuxPaginationCursor {
    private i18n;
    private root;
    hasPrevious: boolean;
    hasNext: boolean;
    label: string;
    /**
     * Optional. Shows items per page dropdown when set. Only available with layout set to 'advanced'
     */
    itemsPerPage: GuxItemsPerPage;
    layout: 'simple' | 'advanced';
    private guxPaginationCursorchange;
    private guxitemsperpagechange;
    private handleInternalitemsperpagechange;
    private onButtonClick;
    componentWillLoad(): Promise<void>;
    renderSimpleLayout(): JSX.Element;
    renderAdvancedLayout(): JSX.Element;
    renderItemsPerPage(): JSX.Element;
    render(): JSX.Element;
}
