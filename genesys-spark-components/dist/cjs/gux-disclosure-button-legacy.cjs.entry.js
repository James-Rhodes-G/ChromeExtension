'use strict';

var index = require('./index-BLhHoh_r.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const defaultLabel = "Disclosure button";
var translationResources = {
	defaultLabel: defaultLabel
};

const guxDisclosureButtonCss = ":host{height:100%;color:var(--gse-ui-tabs-item-icon-iconColor)}.gux-disclosure-button-container{display:flex;flex-direction:row;justify-content:flex-start;height:100%}.gux-disclosure-button-container .gux-disclosure-button{width:16px;padding:0;margin:0;color:var(--gse-ui-tabs-item-icon-iconColor);background:transparent;border-top:none;border-right:1px solid var(--gse-ui-tabs-item-divider-dividerColor);border-bottom:none;border-left:1px solid var(--gse-ui-tabs-item-divider-dividerColor)}.gux-disclosure-button-container .gux-disclosure-button gux-icon{width:12px;height:12px}.gux-disclosure-button-container .gux-disclosure-button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-disclosure-button-container .gux-disclosure-panel{display:none;order:-1;width:100%}.gux-disclosure-button-container .gux-disclosure-panel.gux-active{display:block}.gux-disclosure-button-container.gux-right{justify-content:flex-end}.gux-disclosure-button-container.gux-right .gux-disclosure-panel{order:1}";

const GuxDisclosureButtonLegacy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.active = index.createEvent(this, "active", 7);
        this.panelId = randomHtmlId.randomHTMLId('gux-disclosure-button-panel');
        /**
         * Indicates the position of the button panel
         */
        this.position = 'left';
        /**
         * Used to open or close the disclosure panel
         */
        this.isOpen = false;
        /**
         * Indicated image used by button
         */
        this.icon = 'fa/caret-right-solid';
    }
    watchIsOpen() {
        this.updateIcon();
    }
    changeState() {
        this.togglePanel();
        this.active.emit(this.isOpen);
    }
    togglePanel() {
        this.isOpen = !this.isOpen;
    }
    updateIcon() {
        if (this.position === 'right') {
            this.icon = this.isOpen ? 'fa/caret-right-solid' : 'fa/caret-left-solid';
        }
        else {
            this.icon = this.isOpen ? 'fa/caret-left-solid' : 'fa/caret-right-solid';
        }
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.position });
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
        this.updateIcon();
    }
    render() {
        return (index.h("div", { key: 'c96d5f177492ff489747baca32b70f93adaf1bf5', class: `gux-disclosure-button-container gux-${this.position}` }, index.h("button", { key: 'f71f8d93c8146fa3367acdab0c4c116197abbba7', class: "gux-disclosure-button", onClick: () => this.changeState(), "aria-controls": this.panelId, "aria-expanded": this.isOpen.toString(), "aria-label": this.label || this.i18n('defaultLabel'), "data-testid": "disclosure-button" }, index.h("gux-icon", { key: '7bbf022e573cd8f16fde788be416c6b93b76f203', "icon-name": `${this.icon}`, decorative: true })), index.h("div", { key: '53f88d45530817e81c91f130f083307e4b166bbe', id: this.panelId, class: {
                'gux-disclosure-panel': true,
                'gux-active': this.isOpen
            }, role: "region" }, index.h("slot", { key: '3e234ddc4164e3da3aaf9d430d57f016d031068d', name: "panel-content" }))));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "isOpen": ["watchIsOpen"]
    }; }
};
GuxDisclosureButtonLegacy.style = guxDisclosureButtonCss;

exports.gux_disclosure_button_legacy = GuxDisclosureButtonLegacy;
