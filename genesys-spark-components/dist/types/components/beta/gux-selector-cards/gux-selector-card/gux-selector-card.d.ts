import { JSX } from '../../../../stencil-public-runtime';
import { GuxSelectorCardVariant } from './gux-selector-card.types';
/**
 * @slot icon - Required slot for icon
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot description - Optional slot for additional text description
 * @slot badge - Optional slot for badge
 */
export declare class GuxSelectorCard {
    private input;
    private disabledObserver;
    private root;
    variant: GuxSelectorCardVariant;
    private disabled;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private setInput;
    private renderDescription;
    private renderBadge;
    render(): JSX.Element;
}
