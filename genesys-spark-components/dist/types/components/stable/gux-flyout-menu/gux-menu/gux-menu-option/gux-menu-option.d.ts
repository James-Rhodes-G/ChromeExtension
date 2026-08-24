import { JSX } from '../../../../../stencil-public-runtime';
/**
 * @slot - text
 */
export declare class GuxMenuOption {
    private buttonElement;
    internals: ElementInternals;
    private root;
    connectedCallback(): void;
    /**
     * Focus on the components button element
     */
    guxFocus(): Promise<void>;
    onKeydown(event: KeyboardEvent): void;
    onKeyup(event: KeyboardEvent): void;
    render(): JSX.Element;
}
