import { GuxHighlightColor } from './gux-rich-highlight-list-item.types';
export declare class GuxRichHighlightListItem {
    private i18n;
    root: HTMLGuxRichHighlightListItemElement;
    disabled: boolean;
    highlight: GuxHighlightColor;
    value: string;
    onMouseUp(): void;
    onMouseOver(): void;
    private focusParentList;
    componentWillLoad(): Promise<void>;
    private renderTooltip;
    render(): JSX.Element;
}
