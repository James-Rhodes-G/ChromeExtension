import { JSX } from '../../../stencil-public-runtime';
import { GuxBadgeAccent } from './gux-badge.types';
/**
 * @slot - Required slot for label
 */
export declare class GuxBadge {
    private i18n;
    root: HTMLElement;
    accent: GuxBadgeAccent;
    bold: boolean;
    label: string;
    onMutation(): void;
    private onSlotChange;
    private renderBadgeTitle;
    private renderSrText;
    private getVariant;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
