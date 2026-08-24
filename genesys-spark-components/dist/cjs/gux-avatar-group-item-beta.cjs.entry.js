'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var logError = require('./log-error-nWO_o1C3.js');
var guxAvatarGroup_service = require('./gux-avatar-group.service-BdqLlCpg.js');
var guxAvatar_service = require('./gux-avatar.service-DgavlIib.js');
require('./get-closest-element-CfyZl7i7.js');

const guxAvatarGroupItemCss = "::slotted(img){inline-size:100%;block-size:100%;object-fit:cover}button{box-sizing:border-box;display:flex;align-items:center;justify-content:center;inline-size:var(--gse-ui-avatar-small-content-size);block-size:var(--gse-ui-avatar-small-content-size);padding:0;margin:0;margin-inline-end:var(--gse-ui-avatar-groupSet-gap);overflow:hidden;color:var(--gse-ui-avatar-media-initialsForeground-inverse);cursor:pointer;background:none;background-color:var(--gse-ui-avatar-media-initialsBackground-default);border:none;border-radius:50%;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 13c0-2.6.7-5 1.8-7.2C21.5 2.3 17.5 0 13 0 5.8 0 0 5.8 0 13s5.8 13 13 13c4.5 0 8.5-2.3 10.8-5.8C22.7 18 22 15.6 22 13z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 13c0-2.6.7-5 1.8-7.2C21.5 2.3 17.5 0 13 0 5.8 0 0 5.8 0 13s5.8 13 13 13c4.5 0 8.5-2.3 10.8-5.8C22.7 18 22 15.6 22 13z' /%3E%3C/svg%3E\")}button:focus-visible,button:hover{position:relative;z-index:var(--gse-semantic-zIndex-showFocus);mask:none}button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}button.gux-last-item{mask:none}button .gux-avatar-initials{font-family:var(--gse-ui-avatar-small-initials-fontFamily);font-size:var(--gse-ui-avatar-small-initials-fontSize);font-weight:var(--gse-ui-avatar-small-initials-fontWeight);line-height:var(--gse-ui-avatar-small-initials-lineHeight);text-transform:uppercase}button.gux-accent-1{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent1)}button.gux-accent-2{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent2)}button.gux-accent-3{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent3)}button.gux-accent-4{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent4)}button.gux-accent-5{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent5)}button.gux-accent-6{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent6)}button.gux-accent-7{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent7)}button.gux-accent-8{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent8)}button.gux-accent-9{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent9)}button.gux-accent-10{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent10)}button.gux-accent-11{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent11)}button.gux-accent-12{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent12)}button.gux-accent-inherit{color:inherit;background-color:inherit}";

const GuxAvatarGroupItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Manually sets avatar accent
         */
        this.accent = 'auto';
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
    }
    componentDidLoad() {
        this.validatingInputs();
    }
    /*
     * Hide tooltip
     */
    async hideTooltip() {
        return await this.tooltip.hideTooltip();
    }
    onKeydown(event) {
        guxAvatarGroup_service.groupKeyboardNavigation(event, this.root);
    }
    isLastItemInGroup() {
        const parent = this.root.parentElement;
        const children = Array.from(parent.children);
        const index = children.findIndex(i => i === this.root);
        return index === children.length - 1;
    }
    validatingInputs() {
        const avatarImage = this.root.querySelector('img');
        if (!this.name) {
            logError.logWarn(this.root, 'Name prop is required for accessibility');
        }
        if (avatarImage && !avatarImage.getAttribute('alt')) {
            logError.logWarn(this.root, 'Alt attribute is required for slotted image.');
        }
    }
    render() {
        return (index.h(index.Host, { key: '16b06052216c2bd34a5b468e8f0d1b43ca5e14d6', role: "menuitem" }, index.h("button", { key: 'e84a7bb648979e04adcd2610f7eb40405c9e1d9a', type: "button", "aria-label": this.name, tabIndex: -1, class: {
                'gux-avatar': true,
                [guxAvatar_service.getAvatarAccentClass(this.accent, this.name)]: true,
                'gux-last-item': this.isLastItemInGroup()
            } }, index.h("slot", { key: '0f00f3593e9e2f888e208430261832d2c72fe7d3', name: "image" }, index.h("span", { key: '1a901e537a5347b121492d3dc60a9710ce98943c', class: "gux-avatar-initials", "aria-hidden": "true" }, guxAvatar_service.generateInitials(this.name))), index.h("gux-tooltip-beta", { key: 'd25dcc843ef37b8b32d4f3f598dc9cf3ea60c6ff', "aria-hidden": "true", "visual-only": true, placement: "top", ref: el => (this.tooltip = el) }, index.h("div", { key: '934cf7c0cf8640032ff5d970b075d6bfc78be695', slot: "content" }, this.name)))));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxAvatarGroupItem.style = guxAvatarGroupItemCss;

exports.gux_avatar_group_item_beta = GuxAvatarGroupItem;
