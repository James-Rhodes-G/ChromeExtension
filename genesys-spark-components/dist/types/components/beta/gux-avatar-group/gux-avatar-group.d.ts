import { JSX } from '../../../stencil-public-runtime';
/**
 * @slot - slot for gux-avatar-group-item components
 */
export declare class GuxAvatarGroup {
    private processedGroupItems;
    root: HTMLElement;
    quantity: number;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentWillRender(): void;
    onMouseOver(event: MouseEvent): void;
    private getGroupItems;
    private setInitialFocusTarget;
    private processGroupItems;
    private hideOverflowGroupItems;
    private hideCurrentTooltip;
    private handleClick;
    private validateChildElements;
    private renderOverflowMenu;
    private renderAddToGroup;
    render(): JSX.Element;
}
