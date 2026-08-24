import { JSX } from '../../../stencil-public-runtime';
import { Placement } from '@floating-ui/dom';
import { GuxIconIconName } from '../../stable/gux-icon/gux-icon.types';
/**
 * @slot content - Required slot for tooltip and screenreader content
 */
export declare class GuxIconTooltip {
    private tooltip;
    private root;
    iconName: GuxIconIconName;
    placement: Placement;
    componentWillLoad(): void;
    showTooltip(): Promise<void>;
    hideTooltip(): Promise<void>;
    render(): JSX.Element;
}
