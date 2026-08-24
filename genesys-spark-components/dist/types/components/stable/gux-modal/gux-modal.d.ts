import { EventEmitter, JSX } from '../../../stencil-public-runtime';
import { GuxModalSize } from './gux-modal.types';
export declare class GuxModal {
    private dialogElement;
    private root;
    /**
     * Indicates the size of the modal (small, medium or large)
     */
    size: GuxModalSize;
    /**
     * Indicates/sets whether or not the modal is open. On a native dialog, you should not toggle the
     * open attribute, due to the unusual behaviors described [here](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-open)
     * In this component, it is safe as this property acts as a proxy for calls to `showModal` and `close`.
     */
    open: boolean;
    /**
     * Fired when a user dismisses the modal
     */
    guxdismiss: EventEmitter<void>;
    /**
     * "Renders" the open state of the modal
     */
    private syncOpenState;
    showModal(): Promise<void>;
    close(): Promise<void>;
    onKeydown(event: KeyboardEvent): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private hasModalTitleSlot;
    private hasFooterButtons;
    private renderFooter;
    render(): JSX.Element;
    private renderTitle;
    private renderButtonFooter;
    private onCloseHandler;
    private onDismissHandler;
}
