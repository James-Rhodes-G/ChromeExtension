import { JSX } from '../../../stencil-public-runtime';
import { GuxStatusIndicatorVariant } from './gux-status-indicator.types';
/**
 * @slot default - Slot for the status indicator text.
 * @slot tooltip-text - Slot for the optional tooltip text
 */
export declare class GuxStatusIndicator {
    private statusIndicatorContainerElement;
    root: HTMLElement;
    accent: GuxStatusIndicatorVariant;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    private applyTableStyle;
    private renderTooltip;
    render(): JSX.Element;
}
