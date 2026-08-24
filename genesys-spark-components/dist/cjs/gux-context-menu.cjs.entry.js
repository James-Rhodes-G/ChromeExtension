'use strict';

var index = require('./index-BLhHoh_r.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var whenEventIsFrom = require('./when-event-is-from-C6TjNoqM.js');
require('./get-closest-element-CfyZl7i7.js');

const contextMenuScreenreaderText = "Context menu";
var translationResources = {
	contextMenuScreenreaderText: contextMenuScreenreaderText
};

const guxContextMenuCss = ":host{display:block;max-inline-size:fit-content;white-space:normal}gux-icon{color:var(--gse-ui-button-ghost-default-foregroundColor)}button{block-size:var(--gse-ui-button-default-height);padding:var(--gse-ui-button-default-paddingIconOnly);border-radius:var(--gse-ui-button-borderRadius)}button.gux-compact{min-inline-size:var(--gse-ui-contextMenu-button-compact);block-size:var(--gse-ui-button-compact-height);padding:var(--gse-ui-button-compact-paddingIconOnly)}button:hover:enabled{background-color:var(--gse-ui-button-ghost-hover-backgroundColor)}button:hover:enabled gux-icon{color:var(--gse-ui-button-ghost-hover-foregroundColor)}button:active:enabled{background-color:var(--gse-ui-button-ghost-active-backgroundColor)}button:active:enabled gux-icon{color:var(--gse-ui-button-ghost-active-foregroundColor)}button[disabled]{opacity:var(--gse-ui-button-disabled-opacity)}.gux-list-container{inline-size:var(--gse-ui-contextMenu-menu-width);max-block-size:var(--gse-ui-contextMenu-menu-maxHeight);margin:0;overflow-y:auto;background:var(--gse-ui-menu-backgroundColor);border-color:var(--gse-ui-menu-border-color);border-style:var(--gse-ui-menu-border-style);border-width:var(--gse-ui-menu-border-width);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}";

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
const GuxContextMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonId = randomHtmlId.randomHTMLId();
        /**
         * Indicates button density style. Intended to be paired with gux-table property.
         */
        this.compact = false;
        /**
         * Controls the disabled state of the internal button
         */
        this.disabled = false;
        /**
         * Screenreader text for context menu button
         * defaults to "context menu"
         */
        this.screenreaderText = '';
        /**
         * Placement of the popup
         * defaults to is "bottom-start"
         */
        this.placement = 'bottom-start';
        /**
         * Controls the visibility of the popover list
         */
        this.isOpen = false;
    }
    /**
     * Updates the state on click outside the element
     */
    onClickOutside() {
        this.isOpen = false;
    }
    // Note(E.Yankova): keydown handler
    // reference: https://www.w3.org/WAI/ARIA/apg/example-index/menu-button/menu-button-actions-active-descendant
    // section: "Keyboard Support" and "Menu"
    handleKeyDown(event) {
        const isListEvent = event.composedPath().includes(this.listElement);
        const isButtonEvent = event.composedPath().includes(this.button);
        switch (event.key) {
            case 'Escape': {
                if (isListEvent) {
                    event.preventDefault();
                    this.isOpen = false;
                    this.button.focus();
                }
                break;
            }
            case 'Tab': {
                this.isOpen = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter': {
                if (isButtonEvent && !this.isOpen) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusFirstListItem();
                }
                break;
            }
            case 'ArrowUp': {
                if (isButtonEvent && !this.isOpen) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusLastListItem();
                }
                break;
            }
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                if (event.composedPath().includes(this.button)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusFirstListItem();
                }
                break;
            }
        }
    }
    focusFirstListItem() {
        afterNextRender.afterNextRender(() => {
            void this.listElement.guxFocusFirstItem();
        });
    }
    focusLastListItem() {
        afterNextRender.afterNextRender(() => {
            void this.listElement.guxFocusLastItem();
        });
    }
    onButtonClick() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.focusFirstListItem();
        }
    }
    onListClick(event) {
        whenEventIsFrom.whenEventIsFrom('gux-list-item', event, () => {
            this.isOpen = false;
            this.button.focus();
        });
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (index.h(index.Host, { key: '5c6fcdb16aca67d10d68a84a74ed9e882366594f' }, index.h("gux-popup", { key: 'a058fa9045b1ea9bf7baf6e7bd7acb20316021a1', placement: this.placement, expanded: this.isOpen, offset: 4, "exceed-target-width": true }, index.h("div", { key: 'b39b560341aff900fbfa5b0bf0927b1c4b9dbc33', slot: "target", class: "gux-button-container" }, index.h("gux-button-slot", { key: '70e97e654db145292fc372398101cfb7c26dce08', accent: "ghost" }, index.h("button", { key: '8cb5ca88159f66d55870701b463f7db5144989c9', type: "button", onClick: () => this.onButtonClick(), id: this.buttonId, class: { 'gux-compact': this.compact }, ref: el => (this.button = el), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), disabled: this.disabled }, index.h("gux-screen-reader-beta", { key: '3a6f2b1215ae7fc383bacb7264f74cbd03b342a0' }, this.screenreaderText ||
            this.i18n('contextMenuScreenreaderText')), index.h("gux-icon", { key: '882669bc46a37800d7b9ced560de2e9d41105c4b', "icon-name": "fa/ellipsis-vertical-regular", size: "small", decorative: true })))), index.h("div", { key: 'b29801fdedc5ed27bbc0e3159749ec514d441a22', slot: "popup", class: "gux-list-container" }, index.h("gux-list", { key: '5fc919f53286974f3d9a38a069592227ce185103', onClick: e => this.onListClick(e), ref: el => (this.listElement = el) }, index.h("slot", { key: '184fa8c0df6a3f7fd91bbf2ad78f734c7b2654cf' }))))));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'click' })
], GuxContextMenu.prototype, "onClickOutside", null);
GuxContextMenu.style = guxContextMenuCss;

exports.gux_context_menu = GuxContextMenu;
