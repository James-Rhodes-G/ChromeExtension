'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxNotificationToastCss = ":host{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;width:294px;padding:16px 8px 16px 16px;margin-bottom:4px;color:var(--gse-ui-toast-success-foregroundColor);background:var(--gse-ui-toast-success-backgroundColor);border:1px solid var(--gse-ui-card-default-border-color);border-radius:4px;box-shadow:0 2px 4px rgba(32, 41, 55, 0.24)}.gux-icon{flex:0 1 auto;align-self:auto;order:0;margin:4px}.gux-icon ::slotted(gux-icon){width:24px !important;height:24px !important}.gux-icon.gux-alert{color:var(--gse-ui-toast-error-iconColor)}.gux-icon.gux-warning{color:var(--gse-ui-toast-warning-iconColor)}.gux-icon.gux-positive{color:var(--gse-ui-toast-success-iconColor)}.gux-icon.gux-neutral{color:var(--gse-ui-toast-info-iconColor)}.gux-content{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;align-self:auto;order:0;margin:0 12px 0 8px;color:var(--gse-ui-toast-success-foregroundColor)}.gux-content .gux-title,.gux-content .gux-message{flex:1 1 auto;align-self:auto;order:0}.gux-content .gux-title{font-family:var(--gse-semantic-heading-sm-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-sm-bold-fontSize);line-height:var(--gse-semantic-heading-sm-bold-lineHeight);font-weight:var(--gse-semantic-heading-sm-bold-fontWeight)}";

const GuxNotificationToast = class {
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
        return (index.h(index.Host, { key: '1028ea02235e685a46434682add681629d81ed1c' }, index.h("div", { key: 'a9100ef51dbd153d3b93df43cfc45229da6d1b35', class: `gux-icon gux-${this.accent}` }, index.h("slot", { key: 'f83911f9ef15beecfe1efa5a445f571c6333df53', name: "icon" })), index.h("div", { key: '6b642b1effb289db65b2dabf3b684fddc5db0f52', class: "gux-content" }, index.h("gux-truncate", { key: 'aa35891a528aaa9d1fa20332fc3b7e1c153751e5', class: "gux-title", "max-lines": 1 }, index.h("slot", { key: '2ef932f47926407f0e0e6bdc2541494029926d0b', name: "title" })), index.h("gux-truncate", { key: '210594c7defbd0eadeef4b06c89aeb9f028e19e5', class: "gux-message", "max-lines": 2 }, index.h("slot", { key: '71778069ab9c775f1118628c27ffa5bf48e9f32e', name: "message" }))), index.h("gux-dismiss-button", { key: 'ef00664ff6305872049296977a8092ae4b0c829d', onClick: this.onDismissClickHandler.bind(this) })));
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
GuxNotificationToast.style = guxNotificationToastCss;

exports.gux_notification_toast_legacy = GuxNotificationToast;
