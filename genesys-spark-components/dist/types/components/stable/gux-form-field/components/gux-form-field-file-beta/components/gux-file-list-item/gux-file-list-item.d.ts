import { EventEmitter, JSX } from '../../../../../../../stencil-public-runtime';
export declare class GuxFileListItem {
    private getI18nValue;
    root: HTMLGuxFileListItemElement;
    name: string;
    index: number;
    disabled: boolean;
    status: 'default' | 'loading' | 'success' | 'error';
    guxremovefile: EventEmitter<number>;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
    private renderStatusIndicator;
    private renderFileRemoveButton;
    private renderAdditionalInfo;
}
