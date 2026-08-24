import { JSX } from '../../../stencil-public-runtime';
import { GuxDismissButtonPosition, GuxDismissButtonSize } from './gux-dismiss-button.types';
export declare class GuxDismissButton {
    private i18n;
    private root;
    position: GuxDismissButtonPosition;
    size: GuxDismissButtonSize;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
