import { JSX } from '../../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
/**
 * @slot - text node or element containing text to truncate
 */
export declare class GuxTruncate {
    private tooltipElement;
    private root;
    /**
     * Lines to wrap before truncating
     */
    maxLines: number;
    /**
     * Lines to wrap before truncating
     */
    tooltipPlacement: Placement;
    setShowTooltip(): Promise<void>;
    setHideTooltip(): Promise<void>;
    onMutation(): void;
    onResize(): void;
    private getTooltipContent;
    private needsTruncation;
    private renderTooltip;
    render(): JSX.Element;
}
