import { JSX } from '../../../../../stencil-public-runtime';
import { GuxAvatarAccent } from "../../../gux-avatar/gux-avatar.types";
/**
 * @slot image - Avatar photo.
 */
export declare class GuxAvatarOverflowItem {
    root: HTMLElement;
    name: string;
    /**
     * Manually sets avatar accent
     */
    accent: GuxAvatarAccent;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    onKeydown(event: KeyboardEvent): void;
    private validatingInputs;
    render(): JSX.Element;
}
