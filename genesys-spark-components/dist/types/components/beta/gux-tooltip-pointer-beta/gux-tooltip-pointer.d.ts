import { JSX } from '../../../stencil-public-runtime';
import { GuxTooltipAccent } from '../gux-tooltip-beta/gux-tooltip-types';
import { Placement } from '@floating-ui/dom';
/**
 * @slot content - Slot for content
 */
export declare class GuxTooltipPointer {
    private root;
    private baseTooltip;
    private id;
    private tooltipObserver;
    private forElement;
    private role;
    /**
     * Indicates the id of the element the popover should anchor to. (If not supplied the parent element is used)
     */
    for: string;
    accent: GuxTooltipAccent;
    placement: Placement;
    /**
     * Determines whether the text in the tooltip is read by screenreaders.
     * Use for cases where the forElement component handles the accessibility.
     */
    visualOnly: boolean;
    showTooltip(): Promise<void>;
    hideTooltip(): Promise<void>;
    private updateForElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getForElement;
    private logForAttributeError;
    render(): JSX.Element;
}
