import { EventEmitter, JSX } from '../../../stencil-public-runtime';
import { GuxToastTypes } from './gux-toast.types';
/**
 * @slot icon - Required slot for toast type of action
 * @slot title - Optional slot for the toast title
 * @slot message - Required slot for the toast message
 * @slot link - Optional slot for a link in any toast except toast type of action
 * @slot primary-button - Required slot for primary action button in an action toast
 * @slot secondary-button - Optional slot for secondary action button in an action toast
 */
export declare class GuxToast {
    toastType: GuxToastTypes;
    guxdismiss: EventEmitter<void>;
    private root;
    hasLink: boolean;
    hasPrimaryButton: boolean;
    hasSecondaryButton: boolean;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private checkAriaLive;
    private renderToastIcon;
    private renderLink;
    private renderActions;
    render(): JSX.Element;
    private onDismissClickHandler;
}
