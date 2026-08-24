'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var guxAvatarGroup_service = require('./gux-avatar-group.service-BdqLlCpg.js');
var index$1 = require('./index-QInGO-Pu.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var logError = require('./log-error-nWO_o1C3.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var guxAvatar_service = require('./gux-avatar.service-DgavlIib.js');
require('./get-closest-element-CfyZl7i7.js');

const addToGroup = "Add more items to group";
var defaultResources = {
	addToGroup: addToGroup
};

const guxAvatarGroupAddItemCss = "button{box-sizing:border-box;display:flex;align-items:center;justify-content:center;inline-size:var(--gse-ui-avatar-small-content-size);block-size:var(--gse-ui-avatar-small-content-size);padding:0;margin:0;overflow:hidden;font-family:var(--gse-ui-avatar-small-initials-fontFamily);font-size:var(--gse-ui-avatar-small-initials-fontSize);font-weight:var(--gse-ui-avatar-small-initials-fontWeight);line-height:var(--gse-ui-avatar-small-initials-lineHeight);color:var(--gse-ui-avatar-media-initialsForeground-add);cursor:pointer;background:none;background-color:var(--gse-ui-avatar-media-initialsBackground-add);border:none;border-radius:50%}button:focus-visible,button:hover{position:relative;z-index:var(--gse-semantic-zIndex-showFocus)}button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}";

const GuxAvatarGroupAddItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, defaultResources);
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
    render() {
        return (index.h(index.Host, { key: 'c2208087a0df24f9930d65f5cc0b4e33e9365f3d', role: "menuitem" }, index.h("button", { key: 'c84beab4ccbf57c154859e7bd16ba4de69705ffa', type: "button", "aria-label": this.i18n('addToGroup'), tabIndex: -1, class: "gux-avatar" }, index.h("span", { key: 'de3cafb76d43b51a17d80d825a1902662e55585c', "aria-hidden": "true" }, "+"), index.h("gux-tooltip-beta", { key: '02843211a8a4cedfbaafa6b650ddc29d77802a7d', "aria-hidden": "true", "visual-only": true, placement: "top", ref: el => (this.tooltip = el) }, index.h("div", { key: 'a5c8e606aa2cbb12517bf295d26520ca5358aeff', slot: "content" }, this.i18n('addToGroup'))))));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxAvatarGroupAddItem.style = guxAvatarGroupAddItemCss;

const guxAvatarOverflowCss = ":host{display:block;margin-inline-end:var(--gse-ui-avatar-groupSet-gap)}.gux-avatar-overflow{position:relative;box-sizing:border-box;inline-size:100%;padding:0;margin:0;line-height:0px;cursor:pointer;background:none;border:none;border-radius:50%}.gux-avatar-overflow:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-avatar-overflow:hover,.gux-avatar-overflow:focus{z-index:var(--gse-semantic-zIndex-showFocus)}.gux-avatar-overflow .gux-avatar-overflow-wrapper{position:relative;display:flex}.gux-avatar-overflow .gux-avatar-overflow-wrapper .gux-avatar-overflow-content{box-sizing:border-box;display:flex;align-items:center;justify-content:center;inline-size:var(--gse-ui-avatar-small-content-size);block-size:var(--gse-ui-avatar-small-content-size);overflow:hidden;font-family:var(--gse-ui-avatar-small-initials-fontFamily);font-size:var(--gse-ui-avatar-small-initials-fontSize);font-weight:var(--gse-ui-avatar-small-initials-fontWeight);line-height:var(--gse-core-lineHeight-matchFontSize);color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-overflowCount);border-radius:50%}.gux-menu-wrapper{position:fixed;inset-block-start:0;inset-inline-start:0;z-index:var(--gse-semantic-zIndex-popup);visibility:hidden;flex-direction:column;max-block-size:var(--gse-ui-menu-maxHeight);padding:var(--gse-ui-menu-padding);margin:0;overflow-y:auto;background-color:var(--gse-ui-menu-backgroundColor);border:none;border:var(--gse-semantic-container-edges-borderWidth) solid var(--gse-semantic-border-container-edges-default);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}.gux-menu-wrapper.gux-shown{visibility:visible}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxAvatarOverflow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.delayTime = 250;
        this.count = 0;
        this.expanded = false;
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
    }
    componentDidLoad() {
        if (this.expanded) {
            this.runUpdatePosition();
        }
    }
    componentDidUpdate() {
        if (this.expanded) {
            this.runUpdatePosition();
        }
        else if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    disconnectedCallback() {
        clearTimeout(this.focusDelayTimeout);
        clearTimeout(this.hideDelayTimeout);
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    onClickOutside() {
        this.expanded = false;
    }
    onKeydown(event) {
        guxAvatarGroup_service.groupKeyboardNavigation(event, this.root);
        switch (event.key) {
            case 'Escape': {
                this.hide();
                const target = event.target;
                if (target.tagName === 'GUX-AVATAR-OVERFLOW-ITEM-BETA') {
                    this.focusDelayTimeout = afterNextRender.afterNextRenderTimeout(() => {
                        var _a;
                        (_a = this.overflowButtonElement) === null || _a === void 0 ? void 0 : _a.focus();
                    });
                }
                break;
            }
            case 'Tab':
                this.hide();
                break;
        }
    }
    onClick(e) {
        e.stopPropagation();
        const target = e.target;
        if (target.tagName === 'GUX-AVATAR-OVERFLOW-ITEM-BETA') {
            // Reset scroll on menu when clicked to avoid scroll jump when reopened
            this.menuElement.scrollTop = 0;
            this.expanded = false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxClose() {
        this.hide();
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        if (this.root.isConnected) {
            this.cleanupUpdatePosition = floatingUi_dom.autoUpdate(this.overflowButtonElement, this.menuElement, () => this.updatePosition(), {
                ancestorScroll: true,
                elementResize: true,
                animationFrame: true,
                ancestorResize: true
            });
        }
        else {
            this.disconnectedCallback();
        }
    }
    updatePosition() {
        if (this.root) {
            void floatingUi_dom.computePosition(this.overflowButtonElement, this.menuElement, {
                placement: 'bottom-start',
                strategy: 'fixed',
                middleware: [
                    floatingUi_dom.offset({
                        mainAxis: 4,
                        crossAxis: 4
                    })
                ]
            }).then(({ x, y }) => {
                Object.assign(this.menuElement.style, {
                    left: `${x}px`,
                    top: `${y}px`
                });
            });
        }
    }
    getCount() {
        const menuItems = Array.from(this.root.children);
        if (menuItems.some(item => item.tagName !== 'GUX-AVATAR-OVERFLOW-ITEM-BETA')) {
            logError.logWarn(this.root, 'Only gux-avatar-overflow-item-beta elements are allowed as children.');
        }
        if (menuItems) {
            return menuItems.length;
        }
    }
    toggleOverflowMenu() {
        if (!this.expanded) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    show() {
        clearTimeout(this.hideDelayTimeout);
        this.expanded = true;
        this.hideDelayTimeout = afterNextRender.afterNextRenderTimeout(() => {
            this.focusOnMenu();
        });
    }
    hide() {
        if (this.expanded) {
            this.hideDelayTimeout = setTimeout(() => {
                this.expanded = false;
            }, this.delayTime);
        }
    }
    focusOnMenu() {
        const overflowItems = Array.from(this.root.children);
        const nextFocusableElement = overflowItems[0];
        void nextFocusableElement.focus();
    }
    render() {
        return (index.h(index.Host, { key: '289b013c9d67271a08acc35a6f61cd90d2e733c5', role: "menuitem" }, index.h("button", { key: '48465ecf48d5f3a72924b6d4bb6d029550839367', class: "gux-avatar-overflow", ref: el => (this.overflowButtonElement = el), onClick: () => this.toggleOverflowMenu(), tabIndex: -1, "aria-haspopup": "true", "aria-expanded": this.expanded.toString() }, index.h("span", { key: '6743688d97606a5524c9746d2e808c2224106628', class: "gux-avatar-overflow-wrapper" }, index.h("span", { key: 'c8cf521169d3b6999d70d12bf95f902f7c2910a9', class: "gux-avatar-overflow-content" }, " +", this.getCount()))), index.h("div", { key: '6c9081633ec976b9fb380ee5c1fd77f2a71b424b', class: {
                'gux-menu-wrapper': true,
                'gux-shown': this.expanded
            }, ref: el => (this.menuElement = el) }, index.h("div", { key: 'f99f53607731b8121276ca8f9b1469ef980f2601', role: "menu", class: "gux-menu-content" }, index.h("slot", { key: 'e82d2ac9cf9f02d0acdbebb29a5dfd8df31e4d72' })))));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxAvatarOverflow.prototype, "onClickOutside", null);
GuxAvatarOverflow.style = guxAvatarOverflowCss;

function overflowNavigation(event, currentElement) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
            event.stopPropagation();
            event.preventDefault();
            focusPreviousSiblingLoop(currentElement);
            break;
        case 'ArrowDown':
        case 'ArrowRight':
            event.stopPropagation();
            event.preventDefault();
            focusNextSiblingLoop(currentElement);
            break;
        case 'Home':
            event.stopPropagation();
            event.preventDefault();
            focusFirstSibling(currentElement);
            break;
        case 'End':
            event.stopPropagation();
            event.preventDefault();
            focusLastSibling(currentElement);
            break;
    }
}
function focusFirstSibling(currentElement) {
    const firstFocusableElement = getFirstFocusableElement(currentElement);
    if (firstFocusableElement) {
        void firstFocusableElement.focus();
    }
}
function focusLastSibling(currentElement) {
    const lastFocusableElement = getLastFocusableElement(currentElement);
    if (lastFocusableElement) {
        void lastFocusableElement.focus();
    }
}
function focusPreviousSiblingLoop(currentElement) {
    const previousFocusableElement = currentElement.previousElementSibling;
    if (previousFocusableElement) {
        void previousFocusableElement.focus();
    }
    else {
        focusLastSibling(currentElement);
    }
}
function focusNextSiblingLoop(currentElement) {
    const nextFocusableElement = currentElement.nextElementSibling;
    if (nextFocusableElement) {
        void nextFocusableElement.focus();
    }
    else {
        focusFirstSibling(currentElement);
    }
}
function getFirstFocusableElement(currentElement) {
    let firstFocusableElement = currentElement;
    while (firstFocusableElement.previousElementSibling !== null) {
        firstFocusableElement = firstFocusableElement.previousElementSibling;
    }
    return firstFocusableElement;
}
function getLastFocusableElement(currentElement) {
    let lastFocusableElement = currentElement;
    while (lastFocusableElement.nextElementSibling !== null) {
        lastFocusableElement = lastFocusableElement.nextElementSibling;
    }
    return lastFocusableElement;
}

const guxAvatarOverflowItemCss = "::slotted(img){inline-size:100%;block-size:100%;object-fit:cover}button{all:unset;box-sizing:border-box;display:flex;gap:var(--gse-ui-menu-option-gap);align-items:center;inline-size:100%;min-block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);font-family:var(--gse-ui-menu-option-label-default-text-fontFamily);font-size:var(--gse-ui-menu-option-label-default-text-fontSize);font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);word-wrap:break-word;cursor:pointer;outline:none;outline-offset:calc(var(--gse-ui-menu-option-focus-border-width) * -1);background-color:var(--gse-ui-menu-option-default-backgroundColor);border:none}button:focus-visible{outline:var(--gse-ui-menu-option-focus-border-width) var(--gse-ui-menu-option-focus-border-style) var(--gse-ui-menu-option-focus-border-color);border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}button:hover{background:var(--gse-ui-menu-option-hover-backgroundColor)}button:active{font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight);background:var(--gse-ui-menu-option-selected-backgroundColor)}button .gux-avatar{box-sizing:border-box;display:flex;align-items:center;justify-content:center;inline-size:var(--gse-ui-avatar-xsmall-content-size);block-size:var(--gse-ui-avatar-xsmall-content-size);padding:0;margin:0;overflow:hidden;color:var(--gse-ui-avatar-media-initialsForeground-inverse);cursor:pointer;background:none;background-color:var(--gse-ui-avatar-media-initialsBackground-default);border:none;border-radius:50%}button .gux-avatar .gux-avatar-initials{font-family:var(--gse-ui-avatar-small-initials-fontFamily);font-size:var(--gse-ui-avatar-xsmall-initials-fontSize);font-weight:var(--gse-ui-avatar-xsmall-initials-fontWeight);line-height:var(--gse-ui-avatar-small-initials-lineHeight);text-transform:uppercase}button .gux-avatar.gux-accent-1{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent1)}button .gux-avatar.gux-accent-2{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent2)}button .gux-avatar.gux-accent-3{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent3)}button .gux-avatar.gux-accent-4{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent4)}button .gux-avatar.gux-accent-5{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent5)}button .gux-avatar.gux-accent-6{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent6)}button .gux-avatar.gux-accent-7{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent7)}button .gux-avatar.gux-accent-8{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent8)}button .gux-avatar.gux-accent-9{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent9)}button .gux-avatar.gux-accent-10{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent10)}button .gux-avatar.gux-accent-11{color:var(--gse-ui-avatar-media-initialsForeground-default);background-color:var(--gse-ui-avatar-media-initialsBackground-accent11)}button .gux-avatar.gux-accent-12{color:var(--gse-ui-avatar-media-initialsForeground-inverse);background-color:var(--gse-ui-avatar-media-initialsBackground-accent12)}button .gux-avatar.gux-accent-inherit{color:inherit;background-color:inherit}";

const GuxAvatarOverflowItem = class {
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
    onKeydown(event) {
        overflowNavigation(event, this.root);
    }
    validatingInputs() {
        const avatarImage = this.root.querySelector('img');
        if (!this.name) {
            logError.logWarn(this.root, 'Name prop is required');
        }
        if (avatarImage && !avatarImage.getAttribute('alt')) {
            logError.logWarn(this.root, 'Alt attribute is required for slotted image.');
        }
    }
    render() {
        return (index.h(index.Host, { key: '34b0e018d662b7536da4a91d6ccc055c8cc730d7', role: "menuitem" }, index.h("button", { key: 'c59be9f70bc25dce8bc62dfc8739f93d6006e68e', type: "button", "aria-label": this.name, tabIndex: -1 }, index.h("span", { key: '024aae64707578c490f8fb2d2c2aa809e65ffefe', class: {
                'gux-avatar': true,
                [guxAvatar_service.getAvatarAccentClass(this.accent, this.name)]: true
            } }, index.h("slot", { key: '1e657ac3badc1a73c283d82f0e0b6381033e179e', name: "image" }, index.h("span", { key: 'b63a8cce36637908e4c07f532fdf27e97831e019', class: "gux-avatar-initials", "aria-hidden": "true" }, guxAvatar_service.generateInitials(this.name)))), index.h("span", { key: '67247e6254beaa1b31374653ace95300a8e029a4' }, this.name))));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxAvatarOverflowItem.style = guxAvatarOverflowItemCss;

exports.gux_avatar_group_add_item_beta = GuxAvatarGroupAddItem;
exports.gux_avatar_overflow_beta = GuxAvatarOverflow;
exports.gux_avatar_overflow_item_beta = GuxAvatarOverflowItem;
