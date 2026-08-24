import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldLabelPosition, GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot prefix - Optional slot for prefix
 * @slot suffix - Optional slot for suffix
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export declare class GuxFormFieldTextLike {
    private input;
    private label;
    private labelInfo;
    private disabledObserver;
    private requiredObserver;
    private hideLabelInfoTimeout;
    private root;
    clearable: boolean;
    labelPosition: GuxFormFieldLabelPosition;
    loading: boolean;
    /**
     * Field indicator mark which can show *, (optional) or blank
     * Defaults to required. When set to required, the component will display * for required fields and blank for optional
     * When set to optional, the component will display (optional) for optional and blank for required.
     */
    indicatorMark: GuxFormFieldIndicatorMark;
    private hasPrefix;
    private hasSuffix;
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
    private renderRadialLoading;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
    private get variant();
    private setInput;
    private setLabel;
}
