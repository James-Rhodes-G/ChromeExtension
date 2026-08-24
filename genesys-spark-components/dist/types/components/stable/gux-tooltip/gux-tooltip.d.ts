import { JSX } from '../../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
import { GuxTooltipAccent } from './gux-tooltip-types';
/**
 * @slot content - Slot for content
 */
export declare class GuxTooltip {
    private forElement;
    private pointerenterHandler;
    private pointerleaveHandler;
    private focusinHandler;
    private focusoutHandler;
    private forElementListeners;
    private cleanupUpdatePosition;
    private id;
    private hideDelayTimeout;
    private root;
    /**
     * Indicates the id of the element the popover should anchor to. (If not supplied the parent element is used)
     */
    for: string;
    /**
     * Placement of the tooltip. Default is bottom-start
     */
    placement: Placement;
    accent: GuxTooltipAccent;
    /**
     * If tooltip is shown or not
     */
    isShown: boolean;
    handleKeyDown(event: KeyboardEvent): void;
    handlePointerenter(): void;
    handlePointerleave(): void;
    showTooltip(): Promise<void>;
    hideTooltip(): Promise<void>;
    private runUpdatePosition;
    private updatePosition;
    private show;
    private hide;
    private getForElement;
    private logForAttributeError;
    private setForElement;
    private disconnectForElement;
    private updateForElement;
    connectedCallback(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
