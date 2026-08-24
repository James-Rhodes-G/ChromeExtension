'use strict';

var index = require('./index-BLhHoh_r.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var whenEventIsFrom = require('./when-event-is-from-C6TjNoqM.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const moreOptions = "More options";
var defaultResources = {
	moreOptions: moreOptions
};

const guxActionButtonAccent = [
    'primary',
    'secondary',
    'tertiary',
    'danger'
];
function getGuxActionButtonAccent(maybeGuxActionButtonAccent) {
    if (guxActionButtonAccent.find(validType => validType === maybeGuxActionButtonAccent)) {
        return maybeGuxActionButtonAccent;
    }
    return 'secondary';
}

const guxActionButtonCss = ":host{display:block;-webkit-user-select:none;user-select:none}.gux-action-button-container{min-inline-size:128px}.gux-action-button-container>*{vertical-align:middle}.gux-action-button-container .gux-action-button{inline-size:calc(100% - 33px);margin-inline-end:1px}.gux-action-button-container .gux-action-button button{inline-size:100%;max-inline-size:none;text-align:center;border-start-end-radius:0;border-end-end-radius:0}.gux-action-button-container .gux-action-button button:focus-visible:enabled{position:relative}.gux-action-button-container .gux-dropdown-button button{display:flex;align-items:center;justify-content:center;inline-size:var(--gse-ui-button-iconOnly-width);padding:0;border-start-start-radius:0;border-end-start-radius:0}.gux-action-button-container .gux-list-container{max-inline-size:220px;max-block-size:var(--gse-ui-menu-maxHeight);margin:0;overflow-y:auto;background:var(--gse-ui-menu-backgroundColor);border-color:var(--gse-ui-menu-border-color);border-style:var(--gse-ui-menu-border-style);border-width:var(--gse-ui-menu-border-width);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}";

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
const GuxActionButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = index.createEvent(this, "open", 7);
        this.close = index.createEvent(this, "close", 7);
        this.actionClick = index.createEvent(this, "actionClick", 7);
        /**
         * The component button type
         */
        this.type = 'button';
        /**
         * Disables the action button.
         */
        this.disabled = false;
        this.accent = 'secondary';
        /**
         * It is used to open or not the list.
         */
        this.isOpen = false;
    }
    handleKeydown(event) {
        const composedPath = event.composedPath();
        switch (event.key) {
            case 'Escape':
                this.isOpen = false;
                if (composedPath.includes(this.listElement)) {
                    event.preventDefault();
                    this.dropdownButton.focus();
                }
                break;
            case 'Tab': {
                this.isOpen = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter':
                if (composedPath.includes(this.dropdownButton)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusFirstItemInPopupList();
                }
                break;
            case 'ArrowUp':
                if (composedPath.includes(this.dropdownButton)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusLastItemInPopupList();
                }
                break;
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                const composedPath = event.composedPath();
                if (composedPath.includes(this.dropdownButton)) {
                    this.isOpen = true;
                    this.focusFirstItemInPopupList();
                }
                break;
            }
        }
    }
    watchDisabled(disabled) {
        if (disabled) {
            this.isOpen = false;
        }
    }
    watchValue(isOpen) {
        if (isOpen) {
            this.open.emit();
        }
        else {
            this.listElement.blur();
            this.close.emit();
        }
    }
    onClickOutside(event) {
        if (event.relatedTarget === null) {
            this.isOpen = false;
        }
    }
    toggle() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.focusPopupList();
            }
        }
    }
    focusPopupList() {
        afterNextRender.afterNextRenderTimeout(() => {
            var _a;
            (_a = this.listElement) === null || _a === void 0 ? void 0 : _a.focus();
        });
    }
    focusFirstItemInPopupList() {
        afterNextRender.afterNextRenderTimeout(() => {
            void this.listElement.guxFocusFirstItem();
        });
    }
    focusLastItemInPopupList() {
        afterNextRender.afterNextRenderTimeout(() => {
            void this.listElement.guxFocusLastItem();
        });
    }
    onActionClick() {
        if (!this.disabled) {
            this.isOpen = false;
            this.actionClick.emit();
        }
    }
    onListClick(event) {
        whenEventIsFrom.whenEventIsFrom('gux-list-item', event, () => {
            this.isOpen = false;
            this.dropdownButton.focus();
        });
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.type });
        this.i18n = await index$1.buildI18nForComponent(this.root, defaultResources);
    }
    render() {
        return (index.h("div", { key: 'f14d323f9c10b003797a9de4b18af7dcac6fcf7e', class: "gux-action-button-container" }, index.h("gux-popup", { key: '714da05054cf5b53dcfa00d35a820eaa742225d8', expanded: this.isOpen, disabled: this.disabled, placement: "bottom-end", "exceed-target-width": true }, index.h("div", { key: 'f5154cfbf4d41bb0ba8955d6f9e52978d28d6e17', slot: "target", class: "gux-action-button-container" }, index.h("gux-button-slot", { key: 'ca2510f0946954e9af16c61390b744bab208083d', class: "gux-action-button", accent: getGuxActionButtonAccent(this.accent) }, index.h("button", { key: '3b39ea4b471dca0aad9049a78ce783e52902f9c6', type: this.type, disabled: this.disabled, onClick: () => this.onActionClick(), "data-testid": "action-button" }, index.h("slot", { key: '2e03cf69a0308100b41dccb4f04b25711d63a8bb', name: "title" }))), index.h("gux-button-slot", { key: 'e8ff491d344751fbd3aad8a4883d218540fd8053', class: "gux-dropdown-button", accent: getGuxActionButtonAccent(this.accent) }, index.h("button", { key: '806b5b458454bc12104f8dedb46a8e75c9bef212', type: "button", disabled: this.disabled, ref: el => (this.dropdownButton = el), onMouseUp: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), "aria-label": this.i18n('moreOptions'), "data-testid": "dropdown-button" }, index.h("gux-icon", { key: 'dfb75af52b0817f9b54125e28c990fefdf150957', decorative: true, "icon-name": "custom/chevron-down-small-regular", size: "small" })))), index.h("div", { key: '1165c634704e0436e67eea3801e8650325c496ef', class: "gux-list-container", slot: "popup" }, index.h("gux-list", { key: 'ec0c603e4fce250e05494b6c3e310c695676bf4d', onClick: (e) => this.onListClick(e), ref: el => (this.listElement = el) }, index.h("slot", { key: 'e3882349fc5ae5c7fe6c2e4979c8b9eb4297190d' }))))));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabled"],
        "isOpen": ["watchValue"]
    }; }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'click' })
], GuxActionButton.prototype, "onClickOutside", null);
GuxActionButton.style = guxActionButtonCss;

exports.gux_action_button = GuxActionButton;
