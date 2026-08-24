import { GuxRichTextEditorActionTypes } from './gux-rich-text-editor-action.types';
export declare class GuxRichTextEditorAction {
    private i18n;
    root: HTMLElement;
    action: GuxRichTextEditorActionTypes;
    disabled: boolean;
    isActive: boolean;
    componentWillLoad(): Promise<void>;
    private renderTooltip;
    private renderActionButton;
    render(): JSX.Element;
}
