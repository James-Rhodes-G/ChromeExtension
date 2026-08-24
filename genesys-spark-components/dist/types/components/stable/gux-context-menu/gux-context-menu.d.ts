import { JSX } from '../../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
export declare class GuxContextMenu {
    private i18n;
    private button;
    listElement: HTMLGuxListElement;
    private buttonId;
    private root;
    /**
     * Indicates button density style. Intended to be paired with gux-table property.
     */
    compact: boolean;
    /**
     * Controls the disabled state of the internal button
     */
    disabled: boolean;
    /**
     * Screenreader text for context menu button
     * defaults to "context menu"
     */
    screenreaderText: string;
    /**
     * Placement of the popup
     * defaults to is "bottom-start"
     */
    placement: Placement;
    /**
     * Controls the visibility of the popover list
     */
    private isOpen;
    /**
     * Updates the state on click outside the element
     */
    onClickOutside(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleKeyup(event: KeyboardEvent): void;
    private focusFirstListItem;
    private focusLastListItem;
    private onButtonClick;
    private onListClick;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
