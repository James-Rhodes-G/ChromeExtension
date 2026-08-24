'use strict';

var index = require('./index-BLhHoh_r.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var whenEventIsFrom = require('./when-event-is-from-C6TjNoqM.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var usage = require('./usage-v50bi18B.js');

const guxButtonMultiAccent = ['primary', 'secondary', 'tertiary'];
function getGuxButtonMultiAccent(maybeGuxButtonMultiAccent) {
    if (guxButtonMultiAccent.find(validType => validType === maybeGuxButtonMultiAccent)) {
        return maybeGuxButtonMultiAccent;
    }
    return 'secondary';
}

const guxButtonMultiCss = ":host{display:block;-webkit-user-select:none;user-select:none}.gux-button-multi-container .gux-dropdown-button button{display:inline-flex;align-items:center}.gux-button-multi-container .gux-dropdown-button button gux-icon{margin-inline-start:var(--gse-ui-button-gap)}.gux-list-container{max-inline-size:220px;margin:0;overflow-y:auto;background:var(--gse-ui-menu-backgroundColor);border-color:var(--gse-ui-menu-border-color);border-style:var(--gse-ui-menu-border-style);border-width:var(--gse-ui-menu-border-width);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}";

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
const GuxButtonMulti = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = index.createEvent(this, "open", 7);
        this.close = index.createEvent(this, "close", 7);
        /**
         * Disables the action button.
         */
        this.disabled = false;
        this.accent = 'secondary';
        /**
         * Aria label for button tag
         */
        this.guxAriaLabel = '';
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
            case 'Enter':
            case 'ArrowDown':
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
    onClickOutside() {
        this.isOpen = false;
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
            this.listElement.focus();
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
    onListClick(event) {
        whenEventIsFrom.whenEventIsFrom('gux-list-item', event, () => {
            this.isOpen = false;
            this.dropdownButton.focus();
        });
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.accent });
    }
    render() {
        return (index.h("gux-popup", { key: '1de80e87fb808e2c1c67f11069ff854b3c8bb594', expanded: this.isOpen, "exceed-target-width": true, placement: "bottom-end" }, index.h("div", { key: 'ec449bb3cb5a07b22aa19a1cfbe7bad390348c58', slot: "target", class: "gux-button-multi-container" }, index.h("gux-button-slot", { key: '59a02ac2a0617c39bdee504aec91325e5fa6b011', class: "gux-dropdown-button", accent: getGuxButtonMultiAccent(this.accent) }, index.h("button", { key: '8e774e6ff321588c41ffe731c1967752dc5ca622', type: "button", disabled: this.disabled, ref: el => (this.dropdownButton = el), onMouseUp: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), "aria-label": this.guxAriaLabel }, index.h("slot", { key: '18b5e98f45e5b7f4b4644e55417575f88d240d21', name: "title" }), index.h("gux-icon", { key: '625f150aebd9cb9c87214c200309e1c76c7ed372', size: "small", decorative: true, "icon-name": "custom/chevron-down-small-regular" })))), index.h("div", { key: '3f328498971bffd3d0c79d2dc01e6cca83079af4', class: "gux-list-container", slot: "popup" }, index.h("gux-list", { key: '8263e75953b2091c4af783245e89b5abfabedfe5', onClick: (e) => this.onListClick(e), ref: el => (this.listElement = el) }, index.h("slot", { key: '2eebad343f088ea4f234ba23c9758d24d082daed' })))));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabled"],
        "isOpen": ["watchValue"]
    }; }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxButtonMulti.prototype, "onClickOutside", null);
GuxButtonMulti.style = guxButtonMultiCss;

exports.gux_button_multi = GuxButtonMulti;
