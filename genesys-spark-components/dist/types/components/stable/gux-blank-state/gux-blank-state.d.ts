import { JSX } from '../../../stencil-public-runtime';
/**
 * @slot primary-message - Required slot for primary-message.
 * @slot image - Slot for gux-icon element.
 * @slot additional-guidance - Slot for additional-guidance.
 * @slot call-to-action - Slot for the message call to action button.
 */
export declare class GuxBlankState {
    root: HTMLElement;
    private hasCallToAction;
    private hasGuidance;
    onMutation(): void;
    private renderCallToActionSlot;
    private renderGuidanceSlot;
    componentWillLoad(): void;
    render(): JSX.Element;
}
