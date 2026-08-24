import { JSX } from '../../../../stencil-public-runtime';
import { GuxAvatarAccent } from "../../gux-avatar/gux-avatar.types";
/**
 * @slot image - Avatar photo.
 */
export declare class GuxAvatarGroupItem {
    private tooltip;
    root: HTMLElement;
    /**
     * Name which is shown as initials. Should be formatted 'Lastname Firstname' for JA, zhCN and KO names.
     * Names without blank space will show first 2 characters of string.
     */
    name: string;
    /**
     * Manually sets avatar accent
     */
    accent: GuxAvatarAccent;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    hideTooltip(): Promise<void>;
    onKeydown(event: KeyboardEvent): void;
    private isLastItemInGroup;
    private validatingInputs;
    render(): JSX.Element;
}
