import { JSX, EventEmitter } from '../../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
/**
 * @slot target - Required slot for target
 * @slot popup - Required slot for popup
 */
export declare class GuxPopup {
    private targetElementContainer;
    private popupElementContainer;
    private cleanupUpdatePosition;
    /**
     * Placement of the popup. Default is bottom-start
     */
    placement: Placement;
    expanded: boolean;
    disabled: boolean;
    /**
     * Number of pixels the popup is offset from the target.
     */
    offset: number;
    /**
     * set if parent component design allows for popup exceeding target width
     */
    exceedTargetWidth: boolean;
    /**
     * set if parent component design is inline
     */
    inline: boolean;
    /**
     * This event will run when the popup transitions to an expanded state.
     */
    internalexpanded: EventEmitter<void>;
    /**
     * This event will run when the popup transitions to a collapsed state.
     */
    internalcollapsed: EventEmitter<void>;
    private runUpdatePosition;
    private updatePosition;
    onExpandedChange(expanded: boolean): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
