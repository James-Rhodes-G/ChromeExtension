import { EventEmitter } from '../../../stencil-public-runtime';
import { GuxSidePanelSize } from './gux-side-panel.types';
/**
 * @slot heading - Required slot for the heading
 * @slot description - Optional slot for the description
 * @slot content - Required slot for the content
 * @slot footer - Optional slot for the footer
 */
export declare class GuxSidePanel {
    private root;
    size: GuxSidePanelSize;
    sidePanelDismiss: EventEmitter<void>;
    private onDismissHandler;
    componentWillLoad(): void;
    private renderDescription;
    render(): JSX.Element;
}
