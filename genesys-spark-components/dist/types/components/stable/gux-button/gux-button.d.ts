import { JSX } from '../../../stencil-public-runtime';
import { GuxButtonAccent, GuxButtonType } from './gux-button.types';
/**
 * @slot - content
 */
export declare class GuxButton {
    private root;
    private buttonId;
    /**
     * The component button type
     */
    type: GuxButtonType;
    /**
     * The component title
     */
    guxTitle: string;
    /**
     * Indicate if the button is disabled or not
     */
    disabled: boolean;
    accent: GuxButtonAccent;
    autofocus: boolean;
    iconOnly: boolean;
    connectedCallback(): void;
    componentWillLoad(): void;
    render(): JSX.Element;
    renderTooltip(): JSX.Element;
    private stopEventIfDisabled;
    private makeSlotContentDisableable;
    private hasIconOnly;
    private slotChanged;
}
