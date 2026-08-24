import { EventEmitter, JSX } from '../../../stencil-public-runtime';
import { GuxToggleLabelPosition } from './gux-toggle.types';
export declare class GuxToggle {
    private i18n;
    private announceElement;
    private labelId;
    private errorId;
    private root;
    checked: boolean;
    disabled: boolean;
    loading: boolean;
    label: string;
    checkedLabel: string;
    uncheckedLabel: string;
    labelPosition: GuxToggleLabelPosition;
    errorMessage: string;
    displayInline: boolean;
    handleLoading(loading: boolean): void;
    check: EventEmitter<boolean>;
    private onKeydown;
    private toggle;
    private getAriaLabel;
    componentWillLoad(): Promise<void>;
    private renderLoading;
    private renderLabel;
    private renderError;
    render(): JSX.Element;
}
