import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for tooltip
 */
export declare class GuxFormFieldFileBeta {
    private getI18nValue;
    private dropContainer;
    private input;
    private labelInfo;
    private disabledObserver;
    private requiredObserver;
    private multipleObserver;
    private hideLabelInfoTimeout;
    private root;
    /**
     * Field indicator mark which can show *, (optional) or blank
     * Defaults to required. When set to required, the component will display * for required fields and blank for optional
     * When set to optional, the component will display (optional) for optional and blank for required.
     */
    indicatorMark: GuxFormFieldIndicatorMark;
    dragAndDrop: boolean;
    private disabled;
    private hasError;
    private hasHelp;
    private required;
    private multiple;
    onMutation(): void;
    handleKeyup(event: KeyboardEvent): void;
    onFocusout(): void;
    onGuxRemoveFile(event: CustomEvent): void;
    componentWillLoad(): Promise<void>;
    disconnectedCallback(): void;
    render(): JSX.Element;
    private setInput;
    private getDropZoneText;
    private getProxyButtonText;
    private removeFile;
    private modifyInputFiles;
    private onProxyFileButtonClick;
    private onDrop;
    private onDragOver;
    private onDragLeave;
    private renderFileList;
    private renderInputSlot;
}
