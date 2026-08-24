import { JSX } from '../../../../stencil-public-runtime';
export declare class GuxRichTextEditorMenu {
    private i18n;
    private button;
    listElement: HTMLGuxRichTextEditorListElement;
    private root;
    private isOpen;
    onClickOutside(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleKeyup(event: KeyboardEvent): void;
    private focusFirstListItem;
    private focusLastListItem;
    private onActionClick;
    private onListClick;
    private renderTooltip;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
