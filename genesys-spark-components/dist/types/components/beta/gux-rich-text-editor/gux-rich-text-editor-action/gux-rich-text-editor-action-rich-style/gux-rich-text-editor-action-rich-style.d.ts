/**
@slot - for a collection of gux-rich-style-list-item elements.
*/
export declare class GuxRichTextEditorActionRichStyle {
    private i18n;
    actionButton: HTMLElement;
    listElement: HTMLGuxRichTextEditorListElement;
    private root;
    value: string;
    expanded: boolean;
    disabled: boolean;
    onClickOutside(): void;
    watchValue(newValue: string): void;
    watchDisabled(disabled: boolean): void;
    onInternallistitemsupdated(event: CustomEvent): void;
    handleKeydown(event: KeyboardEvent): void;
    handleKeyup(event: KeyboardEvent): void;
    private focusFirstListItem;
    private focusLastListItem;
    componentWillLoad(): Promise<void>;
    componentWillRender(): void;
    private validateValue;
    get listItemElements(): HTMLGuxRichStyleListItemElement[];
    private getListItemElementByValue;
    private renderTargetDisplay;
    private renderMenu;
    private renderListItem;
    private renderTooltip;
    private onActionButtonClick;
    private updateValue;
    private onListClick;
    private renderPopup;
    private renderTarget;
    render(): JSX.Element;
}
