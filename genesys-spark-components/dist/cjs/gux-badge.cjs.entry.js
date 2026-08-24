'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
require('./get-closest-element-CfyZl7i7.js');

const info = "badge with label: {label}, accent: info";
const success = "badge with label: {label}, accent: success";
const warning = "badge with label: {label}, accent: warning";
const error = "badge with label: {label}, accent: error";
const inherit = "badge with label: {label}";
var translationResources = {
	info: info,
	"info-bold": "badge with label: {label}, accent: info bold",
	success: success,
	"success-bold": "badge with label: {label}, accent: success bold",
	warning: warning,
	"warning-bold": "badge with label: {label}, accent: warning bold",
	error: error,
	"error-bold": "badge with label: {label}, accent: error bold",
	inherit: inherit,
	"inherit-bold": "badge with label: {label}, bold"
};

const guxBadgeCss = ":host{display:inline-block;block-size:fit-content;border-radius:var(--gse-ui-badge-borderRadius)}.gux-badge{display:flex;flex-direction:row;gap:var(--gse-ui-badge-gap);align-items:center;justify-content:center;block-size:var(--gse-ui-badge-height);padding:var(--gse-ui-badge-padding);font-family:var(--gse-ui-badge-text-fontFamily);font-size:var(--gse-ui-badge-text-fontSize);font-weight:var(--gse-ui-badge-text-fontWeight);line-height:var(--gse-ui-badge-text-lineHeight);border-radius:var(--gse-ui-badge-borderRadius)}.gux-badge gux-tooltip-title{white-space:nowrap}.gux-badge .gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}.gux-badge.gux-info{color:var(--gse-ui-badge-info-regular-foregroundColor);background-color:var(--gse-ui-badge-info-regular-backgroundColor)}.gux-badge.gux-info.gux-bold{color:var(--gse-ui-badge-info-bold-foregroundColor);background-color:var(--gse-ui-badge-info-bold-backgroundColor)}.gux-badge.gux-error{color:var(--gse-ui-badge-error-regular-foregroundColor);background-color:var(--gse-ui-badge-error-regular-backgroundColor)}.gux-badge.gux-error.gux-bold{color:var(--gse-ui-badge-error-bold-foregroundColor);background-color:var(--gse-ui-badge-error-bold-backgroundColor)}.gux-badge.gux-warning{color:var(--gse-ui-badge-warning-regular-foregroundColor);background-color:var(--gse-ui-badge-warning-regular-backgroundColor)}.gux-badge.gux-warning.gux-bold{color:var(--gse-ui-badge-warning-bold-foregroundColor);background-color:var(--gse-ui-badge-warning-bold-backgroundColor)}.gux-badge.gux-success{color:var(--gse-ui-badge-success-regular-foregroundColor);background-color:var(--gse-ui-badge-success-regular-backgroundColor)}.gux-badge.gux-success.gux-bold{color:var(--gse-ui-badge-success-bold-foregroundColor);background-color:var(--gse-ui-badge-success-bold-backgroundColor)}.gux-badge.gux-inherit{color:inherit;background-color:inherit}";

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
const GuxBadge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.accent = 'info';
        this.bold = false;
    }
    onMutation() {
        this.label = this.root.textContent || '';
    }
    onSlotChange(event) {
        const slotAssignedNodes = event.composedPath()[0].assignedNodes();
        this.label = slotAssignedNodes
            .map(nodeItem => nodeItem.textContent)
            .join('');
    }
    renderBadgeTitle() {
        return (
        /*
          NVDA will announce items as 'clickable' if event handlers are detected.
          In this case, the hover event handler is used on the tooltip-title.
          Since this is not useful for screen reader users, we hide the tooltip-title.
        */
        index.h("gux-tooltip-title", { "aria-hidden": "true" }, index.h("span", null, index.h("slot", { "aria-hidden": "true", onSlotchange: this.onSlotChange.bind(this) }))));
    }
    renderSrText() {
        return (index.h("div", { class: "gux-sr-only" }, this.i18n(this.getVariant(), {
            label: this.label
        })));
    }
    getVariant() {
        return `${this.accent}${this.bold ? '-bold' : ''}`;
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (index.h("div", { key: 'b86da02a9ae67308fc5c9ac6aa0b7a1f7a747ae0', class: {
                'gux-badge': true,
                [`gux-${this.accent}`]: true,
                'gux-bold': this.bold
            } }, this.renderBadgeTitle(), this.renderSrText()));
    }
    get root() { return index.getElement(this); }
};
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true, characterData: true })
], GuxBadge.prototype, "onMutation", null);
GuxBadge.style = guxBadgeCss;

exports.gux_badge = GuxBadge;
