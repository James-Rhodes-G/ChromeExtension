import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class GuxRichTextEditorList {
    root: HTMLElement;
    value: string;
    listItems: HTMLElement[];
    internallistitemsupdated: EventEmitter;
    get listItemsSlot(): HTMLSlotElement | null;
    get listItemElements(): HTMLElement[];
    private handleHighlighItemsNavigation;
    private setListItems;
    componentWillLoad(): Promise<void>;
    onKeyDown(event: KeyboardEvent): void;
    guxFocusFirstItem(): Promise<void>;
    guxFocusLastItem(): Promise<void>;
    render(): JSX.Element;
}
