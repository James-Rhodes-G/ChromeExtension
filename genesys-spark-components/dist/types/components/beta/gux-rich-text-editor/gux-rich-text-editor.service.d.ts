import { GuxRichTextEditorActionTypes } from './gux-rich-text-editor-action/gux-rich-text-editor-action.types';
export declare function hasDisabledParent(root: HTMLElement): boolean;
export declare function returnActionTypeIcon(action: GuxRichTextEditorActionTypes): string;
export declare function getActionsFromGroup(root: HTMLElement, selector: string, hiddenClass: string): string[];
