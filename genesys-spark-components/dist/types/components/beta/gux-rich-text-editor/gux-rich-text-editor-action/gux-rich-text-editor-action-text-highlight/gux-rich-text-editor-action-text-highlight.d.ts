import { EventEmitter } from '../../../../../stencil-public-runtime';
/**
 * @slot - for a collection of gux-rich-highlight-list-item.
 */
export declare class GuxRichTextEditorActionTextHighlight {
    private i18n;
    actionButton: HTMLElement;
    noHighlightActionButton: HTMLElement;
    private root;
    disabled: boolean;
    isActive: boolean;
    expanded: boolean;
    noHighlightAction: EventEmitter<void>;
    onClickOutside(): void;
    watchDisabled(disabled: boolean): void;
    handleKeydown(event: KeyboardEvent): void;
    componentWillLoad(): Promise<void>;
    private togglePopup;
    private focusNoHighlightActionButton;
    private renderTooltip;
    private renderPopup;
    private renderNoHighlightAction;
    private onListClick;
    private renderTextHighlightColors;
    private emitNoHighlightAction;
    private renderTarget;
    render(): JSX.Element;
}
