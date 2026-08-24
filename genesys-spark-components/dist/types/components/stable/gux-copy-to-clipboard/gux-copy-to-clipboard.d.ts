import { JSX } from '../../../stencil-public-runtime';
import { GuxCopyToClipboardContent } from './gux-copy-to-clipboard.types';
/**
 * @slot content - Slot for content
 */
export declare class GuxCopyToClipboard {
    private i18n;
    private root;
    tooltipContent: GuxCopyToClipboardContent;
    onMouseleave(): void;
    onFocusout(): void;
    private resetTooltip;
    private onCopyToClipboard;
    getIconName(tooltipContent: GuxCopyToClipboardContent): string;
    private renderTooltipIcon;
    private renderTooltip;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
