import { JSX } from '../../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
import { GuxLabelInfoVariant } from './gux-label-info.types';
/**
 * @slot content - Required slot for tooltip and screenreader content
 */
export declare class GuxLabelInfo {
    private tooltipElement;
    private root;
    variant: GuxLabelInfoVariant;
    placement: Placement;
    componentWillLoad(): void;
    private getVariantIcon;
    showTooltip(): Promise<void>;
    hideTooltip(): Promise<void>;
    render(): JSX.Element;
}
