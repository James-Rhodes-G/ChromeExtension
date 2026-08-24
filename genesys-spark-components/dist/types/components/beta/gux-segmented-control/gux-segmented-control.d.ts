import { JSX } from '../../../stencil-public-runtime';
/**
 * @slot - list of gux-segmented-control-item elements
 */
export declare class GuxSegmentedControl {
    root: HTMLElement;
    value: string;
    disabled: boolean;
    items: HTMLGuxSegmentedControlItemElement[];
    onClick(e: MouseEvent): void;
    watchDisabled(): void;
    private slotChanged;
    componentWillLoad(): void;
    componentWillRender(): void;
    render(): JSX.Element;
}
