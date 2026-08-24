import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
/**
 * @slot group-label - Required slot for label tag
 * @slot group-checkbox - Optional slot
 * @slot group-error - Optional slot for error message
 * @slot group-help - Optional slot for help message
 */
export declare class GuxFormFieldCheckboxGroupBeta {
    private getI18nValue;
    private disabledObserver;
    private label;
    private root;
    /**
     * Field indicator mark which can show *, (optional) or blank
     * Defaults to required. When set to required, the component will display * for required fields and blank for optional
     * When set to optional, the component will display (optional) for optional and blank for required.
     */
    indicatorMark: GuxFormFieldIndicatorMark;
    required: boolean;
    /**
     *  Checkbox group has error text.
     */
    private hasGroupError;
    /**
     *  Checkbox group has help text.
     */
    private hasGroupHelp;
    /**
     *  radio group has label info tooltip
     */
    private hasGroupLabelInfo;
    /**
     * Disables the checkboxes in the group.
     */
    disabled: boolean;
    watchGroupError(hasGroupError: boolean): void;
    watchDisabled(): void;
    onMutation(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private getGroupCheckboxElement;
    private setDisabledCheckboxes;
    private onMainCheckboxChange;
    private setupNestedCheckboxes;
    private initialSetNestedCheckboxes;
    private warnMultipleGroupCheckbox;
    private warnGroupCheckboxNameAttr;
    private updateMainCheckbox;
    private renderText;
    render(): JSX.Element;
    private setLabel;
}
