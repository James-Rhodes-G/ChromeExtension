import { JSX } from '../../../../../stencil-public-runtime';
/**
 * @slot - collection of menu-option, submenu elements
 */
export declare class GuxSubmenu {
    private hideDelayTimeout;
    private buttonElement;
    private submenuElement;
    private submenuContentElement;
    private cleanupUpdatePosition;
    private root;
    label: string;
    private isShown;
    /**
     * Focus on the components button element
     */
    guxFocus(): Promise<void>;
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
    private focusOnSubmenu;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
