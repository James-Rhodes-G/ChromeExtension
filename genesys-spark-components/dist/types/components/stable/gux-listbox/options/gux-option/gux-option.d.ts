import { JSX } from '../../../../../stencil-public-runtime';
/**
 * @slot - text
 * @slot subtext - Optional slot for subtext
 */
export declare class GuxOption {
    private truncateElement;
    root: HTMLElement;
    value: string;
    active: boolean;
    selected: boolean;
    disabled: boolean;
    filtered: boolean;
    private hasSubtext;
    handleActive(active: boolean): void;
    componentWillLoad(): void;
    private onSubtextChange;
    private getAriaSelected;
    private hasDisabledParent;
    render(): JSX.Element;
}
