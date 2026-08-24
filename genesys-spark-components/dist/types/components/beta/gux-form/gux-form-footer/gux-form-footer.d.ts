import { JSX } from '../../../../stencil-public-runtime';
import { GuxFormFooterPlacement } from './gux-form-footer.types';
/**
 * @slot - Slot for footer element.
 */
export declare class GuxFormFooter {
    root: HTMLElement;
    placement: GuxFormFooterPlacement;
    componentWillLoad(): void;
    render(): JSX.Element;
}
