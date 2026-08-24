import { JSX } from '../../../stencil-public-runtime';
import { GuxStatusIndicatorVariant } from './gux-option-status.types';
/**
 * @slot default - Slot for the status indicator text.
 */
export declare class GuxOptionStatus {
    private truncateElement;
    root: HTMLElement;
    value: string;
    active: boolean;
    selected: boolean;
    disabled: boolean;
    accent: GuxStatusIndicatorVariant;
    handleActive(active: boolean): void;
    componentWillLoad(): void;
    private getAriaSelected;
    private hasDisabledParent;
    render(): JSX.Element;
}
