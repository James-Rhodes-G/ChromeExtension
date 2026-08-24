import { EventEmitter } from '../../../../../stencil-public-runtime';
import { GuxSidePanelSize } from '../../gux-side-panel.types';
/**
 * @slot heading - The heading of the side panel
 * @slot description - Optional description of the side panel
 * @slot content - The content of the side panel
 * @slot footer - The footer of the side panel
 */
export declare class GuxModalSidePanel {
    private root;
    open: boolean;
    size: GuxSidePanelSize;
    private dialogElement;
    syncOpenState(): void;
    modalSidePanelDismiss: EventEmitter<void>;
    sidepaneldismissHandler(): void;
    onKeydown(event: KeyboardEvent): void;
    showModal(): Promise<void>;
    close(): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
