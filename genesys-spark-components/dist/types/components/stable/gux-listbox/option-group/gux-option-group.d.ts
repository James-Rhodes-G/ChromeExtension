import { JSX } from '../../../../stencil-public-runtime';
/**
 * @slot - collection of elements conforming to the ListboxOptionElement interface
 */
export declare class GuxOptionGroup {
    private rootParent;
    private parentObserver;
    root: HTMLGuxOptionGroupBetaElement;
    label: string;
    filtered: boolean;
    showDivider: boolean;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private isOption;
    private hasVisibleNextSibling;
    renderDivider(): JSX.Element;
    render(): JSX.Element;
}
