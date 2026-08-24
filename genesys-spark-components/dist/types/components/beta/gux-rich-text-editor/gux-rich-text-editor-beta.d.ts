import { JSX, EventEmitter } from '../../../stencil-public-runtime';
/**
 * @slot typographical-emphasis - Slot for typographical actions.
 * @slot text-styling - Slot for text-styling actions.
 * @slot lists-indentation - Slot for lists and indentation actions.
 * @slot inserting - Slot for inserting actions.
 * @slot global-action - Slot for global action.
 * @slot editor - Slot for the editor.
 */
export declare class GuxRichTextEditor {
    private i18n;
    root: HTMLElement;
    disabled: boolean;
    typographicalEmphasisActions: string[];
    textStylingActions: string[];
    listsAndIndentationActions: string[];
    insertingActions: string[];
    hasToolbar: boolean;
    guxToggleAction: EventEmitter<string>;
    checkResponsiveLayout(): void;
    onMutation(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    private isOverFlowing;
    private handleOverflow;
    private getHiddenActions;
    private getAllActions;
    private categorizeActions;
    private renderListItems;
    private renderSubList;
    private renderHighlightSubList;
    private renderTextEditorMenu;
    private renderSlot;
    private renderTypographicalEmphasis;
    private renderTextStyling;
    private renderListsIndentation;
    private renderInserting;
    private renderGlobalAction;
    private hasToolbarChildren;
    render(): JSX.Element;
}
