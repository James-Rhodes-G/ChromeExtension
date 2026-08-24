import { JSX } from '../../../stencil-public-runtime';
import { GetI18nValue } from '../../../i18n';
/**
 * @slot target - target element
 * @slot menu - gux-menu element
 */
export declare class GuxFlyoutMenu {
    private hideDelayTimeout;
    private targetElement;
    private arrowElement;
    private menuContentElement;
    private announceElement;
    private cleanupUpdatePosition;
    i18n: GetI18nValue;
    private root;
    private isShown;
    onKeydown(event: KeyboardEvent): void;
    onKeyup(event: KeyboardEvent): void;
    onmouseenter(): void;
    onMouseleave(): void;
    onClick(event: MouseEvent): void;
    onFocusin(): void;
    onFocusout(): void;
    private show;
    private hide;
    private runUpdatePosition;
    private updatePosition;
    private focusOnMenu;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
