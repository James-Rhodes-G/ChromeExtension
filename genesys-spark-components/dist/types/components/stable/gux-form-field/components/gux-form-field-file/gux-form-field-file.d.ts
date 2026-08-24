import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldLabelPosition, GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for tooltip
 */
export declare class GuxFormFieldFile {
    private input;
    private label;
    private labelInfo;
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
    private hasError;
    private hasHelp;
    private required;
    onMutation(): void;
    handleKeyup(event: KeyboardEvent): void;
    onFocusout(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private setLabel;
    private setInput;
    private get variant();
    render(): JSX.Element;
}
