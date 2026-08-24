import { EventEmitter, JSX } from '../../../stencil-public-runtime';
import { GuxTagAccent, GuxTagSize, GuxTagEmphasis } from './gux-tag.types';
/**
 * @slot - content
 */
export declare class GuxTag {
    private i18n;
    root: HTMLElement;
    accent: GuxTagAccent;
    disabled: boolean;
    removable: boolean;
    size: GuxTagSize;
    emphasis: GuxTagEmphasis;
    label: string;
    guxdelete: EventEmitter<string>;
    onKeyDown(event: KeyboardEvent): void;
    private removeTag;
    private onSlotChange;
    private renderTagTitle;
    private renderSrText;
    private renderRemoveButton;
    componentWillLoad(): void;
    componentWillRender(): Promise<void>;
    render(): JSX.Element;
}
