import { JSX, EventEmitter } from '../../../../../stencil-public-runtime';
export declare class GuxPaginationEllipsisButton {
    ellipsisButton: HTMLElement;
    inputElement: HTMLInputElement;
    private i18n;
    private root;
    isOpen: boolean;
    totalPages: number;
    disabled: boolean;
    goToPage: EventEmitter<string>;
    handleKeyDown(event: KeyboardEvent): void;
    handleKeyup(event: KeyboardEvent): void;
    watchIsDisabled(newValue: boolean): void;
    private toggle;
    onClickOutside(): void;
    private focusInputElement;
    private applyInputListener;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    render(): JSX.Element;
}
