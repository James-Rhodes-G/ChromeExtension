import { JSX } from '../../../../stencil-public-runtime';
/**
 * @slot - a number of gux-avatar-overflow-items
 */
export declare class GuxAvatarOverflow {
    private overflowButtonElement;
    private menuElement;
    private cleanupUpdatePosition;
    private hideDelayTimeout;
    private focusDelayTimeout;
    private delayTime;
    root: HTMLElement;
    count: number;
    expanded: boolean;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    onClickOutside(): void;
    onKeydown(event: KeyboardEvent): void;
    onClick(e: MouseEvent): void;
    guxClose(): Promise<void>;
    private runUpdatePosition;
    private updatePosition;
    private getCount;
    private toggleOverflowMenu;
    private show;
    private hide;
    private focusOnMenu;
    render(): JSX.Element;
}
