import { JSX } from '../../../stencil-public-runtime';
import { Placement, ReferenceElement } from '@floating-ui/dom';
import { GuxTooltipAccent } from '../gux-tooltip-beta/gux-tooltip-types';
/**
 * @slot content - Slot for content
 */
export declare class GuxTooltipBase {
    private pointerenterHandler;
    private pointerleaveHandler;
    private focusinHandler;
    private focusoutHandler;
    private forElementListeners;
    private cleanupUpdatePosition;
    private id;
    private hideDelayTimeout;
    private root;
    tooltipId: string;
    /**
     * Indicates the element the popover should anchor to.
     */
    forElement: HTMLElement;
    /**
     * Placement of the tooltip. Default is bottom-start
     */
    placement: Placement;
    offsetX: number;
    offsetY: number;
    accent: GuxTooltipAccent;
    /**
     * Determines whether the text in the tooltip is read by screenreaders.
     * Use for cases where the forElement component handles the accessibility.
     */
    visualOnly: boolean;
    followMouse: boolean;
    /**
     * If tooltip is shown or not
     */
    isShown: boolean;
    refElement: ReferenceElement;
    handleKeyDown(event: KeyboardEvent): void;
    handlePointerenter(): void;
    handlePointerleave(): void;
    handlePointerMove(event: MouseEvent): void;
    showTooltip(): Promise<void>;
    hideTooltip(): Promise<void>;
    private runUpdatePosition;
    private updatePosition;
    private show;
    private hide;
    private setForElement;
    private disconnectForElement;
    private updateForElement;
    private getRefElement;
    connectedCallback(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
