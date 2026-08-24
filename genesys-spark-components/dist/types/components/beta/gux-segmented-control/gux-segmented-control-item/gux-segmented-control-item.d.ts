import { JSX } from '../../../../stencil-public-runtime';
/**
 * @slot icon - optional slot for an icon
 * @slot text - required slot for text
 */
export declare class GuxSegmentedControlItem {
    root: HTMLGuxSegmentedControlItemElement;
    value: string;
    selected: boolean;
    disabled: boolean;
    iconOnly: boolean;
    onClick(e: MouseEvent): void;
    private isInStartPosition;
    private isInEndPosition;
    private hasDisabledParent;
    private renderTooltip;
    private renderIconSlot;
    render(): JSX.Element;
}
