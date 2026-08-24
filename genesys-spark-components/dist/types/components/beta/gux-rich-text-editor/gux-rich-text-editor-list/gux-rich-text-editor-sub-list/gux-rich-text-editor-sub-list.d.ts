export declare class GuxRichTextEditorSubList {
    private buttonElement;
    private subListElement;
    private subListContentElement;
    private cleanupUpdatePosition;
    root: HTMLElement;
    label: string;
    isShown: boolean;
    onKeydown(event: KeyboardEvent): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onClick(event: MouseEvent): void;
    onFocusIn(): void;
    onFocusOut(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    private focusOnSubList;
    private show;
    private hide;
    private runUpdatePosition;
    private updatePosition;
    render(): JSX.Element;
}
