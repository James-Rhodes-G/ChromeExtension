import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldLabelPosition, GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export declare class GuxFormFieldRange {
    private input;
    private label;
    private labelInfo;
    private disabledObserver;
    private requiredObserver;
    private containerElement;
    private progressElement;
    private tooltipElement;
    private hideLabelInfoTimeout;
    private root;
    displayUnits: string;
    valueInTooltip: boolean;
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
    private value;
    private active;
    private valueWatcherId;
    onInput(e: MouseEvent): void;
    onMousedown(): void;
    onMouseup(): void;
    onMutation(): void;
    handleKeyup(event: KeyboardEvent): void;
    onFocusout(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
    private get variant();
    private setInput;
    private setLabel;
    private renderRangeInput;
    private updateValue;
    private updatePosition;
    private getDisplayValue;
}
