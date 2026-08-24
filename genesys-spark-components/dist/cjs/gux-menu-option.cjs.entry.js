'use strict';

var index = require('./index-BLhHoh_r.js');
var guxMenu_common = require('./gux-menu.common-B8_9UAPe.js');

const guxMenuOptionCss = ":host{display:block;flex:1 1 auto;align-self:auto}:host .gux-menu-option-button{all:unset;box-sizing:border-box;inline-size:var(--gse-ui-flyoutMenu-width);block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);background-color:var(--gse-ui-menu-option-default-backgroundColor)}:host .gux-menu-option-button:focus-within,:host .gux-menu-option-button:hover{background-color:var(--gse-ui-menu-option-hover-backgroundColor)}:host .gux-menu-option-button:enabled{cursor:pointer}:host .gux-menu-option-button .gux-menu-option-button-text{display:block;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}";

const GuxMenuOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    connectedCallback() {
        this.internals.role = 'menuitem';
    }
    /**
     * Focus on the components button element
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus() {
        this.buttonElement.focus();
    }
    onKeydown(event) {
        guxMenu_common.menuNavigation(event, this.root);
        switch (event.key) {
            case 'ArrowRight':
            case 'Enter':
                event.stopPropagation();
                break;
        }
    }
    onKeyup(event) {
        switch (event.key) {
            case ' ':
                event.stopPropagation();
                break;
        }
    }
    render() {
        return (index.h("button", { key: 'a6e20affe6260ec5c17148cefdbfebe4a53ad9c6', type: "button", class: "gux-menu-option-button", "aria-haspopup": "false", tabIndex: -1, ref: el => (this.buttonElement = el) }, index.h("span", { key: '446395c2040c00b76ea1ce85e5f5599cae769aa7', class: "gux-menu-option-button-text" }, index.h("slot", { key: '4cd4228be9a88d2c02e9ec1431eb3128b72c02e5' }))));
    }
    static get formAssociated() { return true; }
    get root() { return index.getElement(this); }
};
GuxMenuOption.style = guxMenuOptionCss;

exports.gux_menu_option = GuxMenuOption;
