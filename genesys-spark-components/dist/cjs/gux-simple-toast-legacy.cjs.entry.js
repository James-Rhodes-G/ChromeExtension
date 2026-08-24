'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxSimpleToastCss = ":host{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;width:286px;margin-bottom:4px;color:var(--gse-ui-toast-success-foregroundColor);background:var(--gse-ui-toast-success-backgroundColor);border:1px solid var(--gse-ui-card-default-border-color);border-radius:4px;box-shadow:0 2px 4px rgba(32, 41, 55, 0.24)}.gux-icon{flex:0 1 auto;align-self:auto;order:0;padding:8px 12px 8px 16px;margin:2px 0}.gux-icon.gux-alert{color:var(--gse-ui-toast-error-iconColor)}.gux-icon.gux-warning{color:var(--gse-ui-toast-warning-iconColor)}.gux-icon.gux-positive{color:var(--gse-ui-toast-success-iconColor)}.gux-icon.gux-neutral{color:var(--gse-ui-toast-info-iconColor)}.gux-icon ::slotted(gux-icon){width:16px;height:16px}.gux-message{flex:1 1 auto;align-self:center;order:0;margin:8px 0}.gux-dismiss{margin:4px 0}";

const GuxSimpleToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxdismiss = index.createEvent(this, "guxdismiss", 7);
        /**
         * The component accent.
         */
        this.accent = 'neutral';
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.accent });
    }
    render() {
        return (index.h(index.Host, { key: '370cbfe91752486a47623dcad3cb690383c9be20' }, index.h("div", { key: '9ee2b7c1de15d6cd522396d30890fb5273668e76', class: `gux-icon gux-${this.accent}` }, index.h("slot", { key: 'c07d623d41fbf26feba320240c89d44dc2b2ea70', name: "icon" })), index.h("gux-truncate", { key: 'dca0b0fb9b1a20ef990ad89140418412f48224a9', class: "gux-message", "max-lines": 2 }, index.h("slot", { key: 'bab604744d2170b0bf01d5a6f572c3aa05bc2f69', name: "message" })), index.h("gux-dismiss-button", { key: 'f21ee0c87e36d92e9d0c6289da860112b2d94ddf', class: "gux-dismiss", position: "inherit", onClick: this.onDismissClickHandler.bind(this) })));
    }
    onDismissClickHandler(event) {
        event.stopPropagation();
        const dismissEvent = this.guxdismiss.emit();
        if (!dismissEvent.defaultPrevented) {
            this.root.remove();
        }
    }
    get root() { return index.getElement(this); }
};
GuxSimpleToast.style = guxSimpleToastCss;

exports.gux_simple_toast_legacy = GuxSimpleToast;
