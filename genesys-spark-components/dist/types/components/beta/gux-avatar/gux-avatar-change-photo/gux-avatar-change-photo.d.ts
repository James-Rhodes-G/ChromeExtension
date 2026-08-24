import { JSX, EventEmitter } from '../../../../stencil-public-runtime';
/**
 * @slot avatar - gux-avatar-beta tag
 */
export declare class GuxAvatarChangePhoto {
    private i18n;
    root: HTMLElement;
    guxchangephoto: EventEmitter<void>;
    componentWillLoad(): Promise<void>;
    private validateSlot;
    render(): JSX.Element;
}
