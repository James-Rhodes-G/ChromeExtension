import { EventEmitter, JSX } from '../../../../stencil-public-runtime';
/**
 * @slot - text
 * @slot subtext - Optional slot for subtext
 */
export declare class GuxOptionMulti {
    private truncateElement;
    private i18n;
    root: HTMLElement;
    value: string;
    active: boolean;
    selected: boolean;
    disabled: boolean;
    filtered: boolean;
    custom: boolean;
    private hasSubtext;
    guxremovecustomoption: EventEmitter<string>;
    internalselectcustomoption: EventEmitter<string>;
    emitRemoveCustomOption(): void;
    handleActive(active: boolean): void;
    componentWillLoad(): Promise<void>;
    private onSubtextChange;
    private hasDisabledParent;
    renderSVGCheckbox(): JSX.Element;
    renderCustomOptionInstructions(): JSX.Element;
    render(): JSX.Element;
}
