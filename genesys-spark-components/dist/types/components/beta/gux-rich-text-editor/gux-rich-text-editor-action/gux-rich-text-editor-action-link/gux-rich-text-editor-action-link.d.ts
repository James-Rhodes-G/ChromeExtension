import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class GuxRichTextEditorActionLink {
    private i18n;
    actionButton: HTMLElement;
    linkAddressInputElement: HTMLInputElement;
    textToDisplayInputElement: HTMLInputElement;
    private root;
    disabled: boolean;
    isActive: boolean;
    isOpen: boolean;
    linkOptions: EventEmitter<{
        textToDisplay: string;
        href: string;
    }>;
    onClickOutside(): void;
    handleKeydown(event: KeyboardEvent): void;
    componentWillLoad(): Promise<void>;
    private emitLinkOptions;
    private togglePopover;
    private focusTextToDisplayInputElement;
    private renderTooltip;
    render(): JSX.Element;
}
