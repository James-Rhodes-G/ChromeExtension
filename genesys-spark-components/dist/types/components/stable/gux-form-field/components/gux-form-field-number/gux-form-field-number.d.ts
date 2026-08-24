import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldLabelPosition, GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @part input-section - Style input container
 * @slot label-info - Optional slot for label tooltip
 */
export declare class GuxFormFieldNumber {
    private getI18nValue;
    private input;
    private label;
    private labelInfo;
    private disabledObserver;
    private requiredObserver;
    private hideLabelInfoTimeout;
    private root;
    clearable: boolean;
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
    private hasContent;
    private hasError;
    private hasHelp;
    onMutation(): void;
    handleKeyup(event: KeyboardEvent): void;
    onFocusout(): void;
    guxForceUpdate(): Promise<void>;
    componentWillLoad(): Promise<void>;
    disconnectedCallback(): void;
    render(): JSX.Element;
    private get variant();
    private setInput;
    private setLabel;
    private renderStepButtons;
    private stepDown;
    private stepUp;
    private simulateNativeInputAndChangeEvents;
}
