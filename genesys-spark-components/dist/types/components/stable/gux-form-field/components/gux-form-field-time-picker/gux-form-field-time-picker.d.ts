import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldLabelPosition, GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
/**
 * @slot Required slot for gux-time-picker tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export declare class GuxFormFieldTimePicker {
    private getI18nValue;
    private input;
    private label;
    private labelInfo;
    private disabledObserver;
    private requiredObserver;
    private hideLabelInfoTimeout;
    private root;
    labelPosition: GuxFormFieldLabelPosition;
    /**
     * Field indicator mark which can show *, (optional) or blank
     * Defaults to required. When set to required, the component will display * for required fields and blank for optional
     * When set to optional, the component will display (optional) for optional and blank for required.
     */
    indicatorMark: GuxFormFieldIndicatorMark;
    private computedLabelPosition;
    private disabled;
    private required;
    private hasError;
    private hasHelp;
    private hasLabelInfo;
    watchValue(hasError: boolean): void;
    onMutation(): void;
    handleKeyup(event: KeyboardEvent): void;
    onFocusout(): void;
    componentWillLoad(): Promise<void>;
    disconnectedCallback(): void;
    render(): JSX.Element;
    private renderText;
    private get variant();
    private setInput;
    private setLabel;
}
