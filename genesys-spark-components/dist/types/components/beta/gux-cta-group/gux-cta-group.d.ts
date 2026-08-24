import { JSX } from '../../../stencil-public-runtime';
import { GuxCTAGroupAlignment } from './gux-cta-group.types';
export declare class GuxCTAGroup {
    root: HTMLElement;
    /**
     * Sets the buttons alignment
     */
    align: GuxCTAGroupAlignment;
    /**
     * Defines if the primary button should have a danger accent
     */
    dangerous: boolean;
    private validatePrimarySlot;
    private validateSecondarySlot;
    private validateDismissSlot;
    componentWillLoad(): void;
    render(): JSX.Element;
}
