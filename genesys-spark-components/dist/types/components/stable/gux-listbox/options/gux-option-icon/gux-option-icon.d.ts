import { JSX } from '../../../../../stencil-public-runtime';
/**
 * @slot - text
 * @slot subtext - Optional slot for subtext
 */
export declare class GuxOptionIcon {
    private truncateElement;
    root: HTMLElement;
    value: string;
    iconName: string;
    iconSrText: string;
    iconColor: string;
    iconPosition: 'start' | 'end';
    active: boolean;
    selected: boolean;
    disabled: boolean;
    filtered: boolean;
    hovered: boolean;
    private hasSubtext;
    onmouseenter(): void;
    onMouseleave(): void;
    handleActive(active: boolean): void;
    componentWillLoad(): void;
    private onSubtextChange;
    private getAriaSelected;
    private hasDisabledParent;
    private renderMaybeIcon;
    render(): JSX.Element;
}
