import { EventEmitter, JSX } from '../../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
/**
 * @slot - popover content
 */
export declare class GuxPopoverList {
    private popupElement;
    private arrowElement;
    private cleanupUpdatePosition;
    private root;
    private forElement;
    /**
     * Indicates the id of the element the popover should anchor to
     */
    for: string;
    /**
     * Indicate position of popover element arrow (follow floating ui placement attribute api)
     */
    position: Placement;
    /**
     * Indicate if the dismiss button is displayed
     */
    displayDismissButton: boolean;
    /**
     * Close popover when the user clicks outside of its bounds
     */
    closeOnClickOutside: boolean;
    /**
     * Controls hiding and showing the popover
     */
    isOpen: boolean;
    /**
     * Fired when a user dismisses the popover
     */
    guxdismiss: EventEmitter<void>;
    private listElement;
    onKeyDown(event: KeyboardEvent): void;
    checkForClickOutside(event: MouseEvent): void;
    private runUpdatePosition;
    private updatePosition;
    private dismiss;
    private focusFirstItemInPopupList;
    disconnect: () => void;
    onKeydown(event: KeyboardEvent): void;
    onMouseup(): void;
    connectedCallback(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
