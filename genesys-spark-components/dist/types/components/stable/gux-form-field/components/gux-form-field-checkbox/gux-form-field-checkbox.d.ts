import { JSX } from '../../../../../stencil-public-runtime';
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 */
export declare class GuxFormFieldCheckbox {
    private input;
    private disabledObserver;
    private root;
    labelPosition: 'beside' | 'screenreader';
    private disabled;
    private hasHelp;
    private hasError;
    hasGroupError: boolean;
    hasGroupDisabled: boolean;
    onMutation(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
    private get variant();
    private setInput;
}
