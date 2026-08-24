import { JSX } from '../../../stencil-public-runtime';
import { GuxAvatarSize, GuxAvatarAccent, GuxAvatarPresence, GuxAvatarUcIntegrationApps } from './gux-avatar.types';
/**
 * @slot image - Avatar photo.
 */
export declare class GuxAvatar {
    private i18n;
    private parentElement;
    private tooltip;
    root: HTMLElement;
    size: GuxAvatarSize;
    /**
     * Name which is shown as initials. Should be formatted 'Lastname Firstname' for JA, zhCN and KO names.
     * Names without blank space will show first 2 characters of string.
     */
    name: string;
    /**
     * Manually sets avatar accent
     */
    accent: GuxAvatarAccent;
    /**
     * Shows presence such as away or available.
     * Must be combined with badge or ring props to take effect.
     */
    presence: GuxAvatarPresence;
    /**
     * Label to display for accessibility
     */
    label: string;
    /**
     * Controls whether to display a tooltip when the avatar is in a button or link
     */
    tooltipEnabled: boolean;
    /**
     * Shows a ring around the avatar indicating current presence
     */
    ring: boolean;
    /**
     * Shows a badge indicating current presence
     */
    badge: boolean;
    /**
     * Show notifications indicator
     */
    notifications: boolean;
    /**
     * Shows uc integration app logo on large avatar
     */
    ucIntegration: GuxAvatarUcIntegrationApps;
    get hasUcIntegration(): boolean;
    private validatingInputs;
    private renderBadge;
    private renderNotificationsBadge;
    private getPresenceIcon;
    private renderUcIntegrationsIcon;
    private getUcIntegrationText;
    private renderUcIntegrationBadge;
    private renderTooltip;
    private getDescriptionText;
    showTooltip(): Promise<void>;
    hideTooltip(): Promise<void>;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    render(): JSX.Element;
}
