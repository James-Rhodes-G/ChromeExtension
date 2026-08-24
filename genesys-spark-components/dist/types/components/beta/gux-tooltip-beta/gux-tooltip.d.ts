import { JSX } from '../../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
import { GuxTooltipAccent } from './gux-tooltip-types';
/**
 * @slot content - Slot for content
 */
export declare class GuxTooltip {
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
    /**
     * Placement of the tooltip. Default is bottom-start
     */
    placement: Placement;
    accent: GuxTooltipAccent;
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
