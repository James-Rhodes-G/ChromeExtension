import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
/**
 * @slot group-label - Required slot for label tag
 * @slot group-error - Optional slot for error message
 * @slot group-help - Optional slot for help message
 * @slot label-info - Optional slot for tooltip
 */
export declare class GuxFormFieldRadioGroupBeta {
    private getI18nValue;
    private disabledObserver;
    private label;
    private groupLabelInfo;
    private hideTooltipTimeout;
    private root;
    required: boolean;
    /**
     * Field indicator mark which can show *, (optional) or blank
     * Defaults to required. When set to required, the component will display * for required fields and blank for optional
     * When set to optional, the component will display (optional) for optional and blank for required.
     */
    indicatorMark: GuxFormFieldIndicatorMark;
    /**
     *  Radio group has error text.
     */
    private hasGroupError;
    /**
     *  radio group has help text.
     */
    private hasGroupHelp;
    /**
     *  radio group has label info tooltip
     */
    private hasGroupLabelInfo;
    /**
     * Disables the radio buttons in the group.
     */
    disabled: boolean;
    watchGroupError(hasGroupError: boolean): void;
    watchDisabled(): void;
    onMutation(): void;
    handleKeyup(event: KeyboardEvent): void;
    onFocusout(): void;
    componentWillLoad(): Promise<void>;
    disconnectedCallback(): void;
    private setDisabledRadio;
    private renderText;
    render(): JSX.Element;
    private setLabel;
}
