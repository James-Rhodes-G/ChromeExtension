'use strict';

var index = require('./index-BLhHoh_r.js');
var getClosestElement = require('./get-closest-element-CIMI0Cx4.js');
var usage = require('./usage-v50bi18B.js');
var getSlotTextContent = require('./get-slot-text-content-DZwcXMIm.js');

const guxTableToolbarCustomActionCss = ":host([disabled]),button[disabled]{pointer-events:none;user-select:none}.gux-sr-only{display:flex}.gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}.gux-action-title{display:flex;flex-direction:row;gap:var(--gse-ui-button-gap);align-items:center}.gux-action-title slot[name=icon]::slotted(gux-icon){inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size)}";

const GuxTableToolbarCustomAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconOnly = false;
        this.accent = 'secondary';
        this.disabled = false;
    }
    handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    hideText() {
        const parent = getClosestElement.getClosestElement(this.root, 'gux-table-toolbar');
        const nonCondensedParentLayout = (parent === null || parent === void 0 ? void 0 : parent.getAttribute('gs-layout')) !== 'condensed';
        return this.iconOnly && nonCondensedParentLayout;
    }
    renderTooltip() {
        if (this.hideText()) {
            return (index.h("gux-tooltip", null, index.h("div", { slot: "content" }, getSlotTextContent.getSlotTextContent(this.root, 'text'))));
        }
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    render() {
        return (index.h("gux-button-slot", { key: '61217c24713e01b9209acd9fc11af084a66f1e5a', accent: this.accent }, index.h("button", { key: 'd55ec1093371c0bac72df7844ec74c9367cc9844', disabled: this.disabled, type: "button", class: "gux-action-title" }, index.h("slot", { key: '8aa9bbd6693a1bf456f03db7dabb17a3007fe33f', name: "icon" }), index.h("span", { key: '1ea0dcc0f10779786aa2a82642f58cc847ad665e', class: { 'gux-sr-only': this.hideText() } }, index.h("slot", { key: '8460cb5eec68e07b36c229b0b1264a443868eaaf', name: "text" }))), this.renderTooltip()));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxTableToolbarCustomAction.style = guxTableToolbarCustomActionCss;

exports.gux_table_toolbar_custom_action = GuxTableToolbarCustomAction;
