import { EventEmitter, JSX } from '../../../stencil-public-runtime';
import { ListboxOptionElement } from '../../stable/gux-listbox/options/option-types';
/**
 * Our Dropdown component. In the most basic case, it's used with `gux-option` to give users
 * a list of text options to select from, but other types of options with different appearance
 * can be created by creating a new component and adding it to `validOptionTags` list in
 * gux-dropdown-types.ts, then following the resulting compiler errors.
 *
 * @slot - for a gux-listbox containing ValidDropdownOption children
 */
export declare class GuxDropdown {
    private i18n;
    private fieldButtonElement;
    private listboxElement;
    private popupElement;
    private truncateElement;
    private root;
    value: string;
    required: boolean;
    placeholder: string;
    private expanded;
    watchValue(newValue: string): void;
    onKeydown(event: KeyboardEvent): void;
    onInternallistboxoptionsupdated(event: CustomEvent): void;
    onBlur(event: FocusEvent): void;
    onFocus(event: FocusEvent): void;
    onFocusout(event: FocusEvent): void;
    onFocusin(event: FocusEvent): void;
    onClickOutside(): void;
    guxexpanded: EventEmitter<void>;
    guxcollapsed: EventEmitter<void>;
    onMutation(): void;
    onInternalExpanded(event: CustomEvent): void;
    onInternalCollapsed(event: CustomEvent): void;
    connectedCallback(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentWillRender(): void;
    private showTooltip;
    private hideTooltip;
    private validateValue;
    private applyTableStyle;
    private applyListboxEventListeners;
    private stopPropagationOfInternalFocusEvents;
    get optionElements(): Array<ListboxOptionElement>;
    private getOptionElementByValue;
    private fieldButtonClick;
    private activeElementNotListbox;
    private collapseListbox;
    private updateValue;
    private renderTargetDisplay;
    /**
     * Renders the selection display for the selected item. This function needs a branch to handle
     * each type defined in GuxDropdownOptionType
     *
     * @param item The selected item. This can be any of the node types defined in GuxDropdownOptionType.
     * @returns Rendered selection details.
     */
    private renderSelectedItem;
    private renderOption;
    private renderIconOption;
    private renderStatusOption;
    private renderPopup;
    private renderTarget;
    private renderTargetContent;
    render(): JSX.Element;
}
