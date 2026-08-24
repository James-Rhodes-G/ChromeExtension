'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var usage = require('./usage-v50bi18B.js');
require('./get-closest-element-CfyZl7i7.js');

const info = "Information alert with message";
const success = "Success alert with message";
const warning = "Warning alert with message";
const error = "Error alert with message";
var translationResources = {
	info: info,
	success: success,
	warning: warning,
	error: error
};

const guxInlineAlertCss = ":host{display:flex;inline-size:fit-content}.gux-inline-alert{display:inline-flex;flex:1 1 auto;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;padding:var(--gse-ui-alert-padding);border:1px solid;border-radius:var(--gse-ui-alert-borderRadius)}.gux-inline-alert gux-icon{flex-shrink:0;align-self:flex-start;margin-block-start:1px}.gux-inline-alert gux-tooltip-title{white-space:nowrap}.gux-inline-alert .gux-message-wrapper{display:flex;gap:var(--gse-ui-alert-gap);font-family:var(--gse-ui-alert-text-fontFamily);font-size:var(--gse-ui-alert-text-fontSize);font-weight:var(--gse-ui-alert-text-fontWeight);line-height:var(--gse-ui-alert-text-lineHeight)}.gux-inline-alert .gux-content{flex:1 1 auto}.gux-inline-alert.gux-info{color:var(--gse-ui-alert-info-foregroundColor);background-color:var(--gse-ui-alert-info-backgroundColor);border:var(--gse-ui-alert-info-border-width) var(--gse-ui-alert-info-border-style) var(--gse-ui-alert-info-border-color)}.gux-inline-alert.gux-info gux-icon{color:var(--gse-ui-alert-info-iconColor)}.gux-inline-alert.gux-error{color:var(--gse-ui-alert-error-foregroundColor);background-color:var(--gse-ui-alert-error-backgroundColor);border:var(--gse-ui-alert-error-border-width) var(--gse-ui-alert-error-border-style) var(--gse-ui-alert-error-border-color)}.gux-inline-alert.gux-error gux-icon{color:var(--gse-ui-alert-error-iconColor)}.gux-inline-alert.gux-warning{color:var(--gse-ui-alert-warning-foregroundColor);background-color:var(--gse-ui-alert-warning-backgroundColor);border:var(--gse-ui-alert-warning-border-width) var(--gse-ui-alert-warning-border-style) var(--gse-ui-alert-warning-border-color)}.gux-inline-alert.gux-warning gux-icon{color:var(--gse-ui-alert-warning-iconColor)}.gux-inline-alert.gux-success{color:var(--gse-ui-alert-success-foregroundColor);background-color:var(--gse-ui-alert-success-backgroundColor);border:var(--gse-ui-alert-success-border-width) var(--gse-ui-alert-success-border-style) var(--gse-ui-alert-success-border-color)}.gux-inline-alert.gux-success gux-icon{color:var(--gse-ui-alert-success-iconColor)}";

const GuxAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.accent = 'info';
    }
    getIcon(accent) {
        switch (accent) {
            case 'info':
                return 'fa/circle-info-solid';
            case 'success':
                return 'fa/circle-check-solid';
            case 'warning':
                return 'fa/triangle-exclamation-solid';
            case 'error':
                return 'fa/hexagon-exclamation-solid';
            default:
                return 'fa/circle-info-solid';
        }
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.accent });
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (index.h("div", { key: '638379be5667bcc27e22c18c361646a1eac38a4d', role: "alert", class: {
                'gux-inline-alert': true,
                [`gux-${this.accent}`]: true
            } }, index.h("div", { key: '4e23dd0604c9903283c0a60cfb12e841d90414df', class: "gux-message-wrapper" }, index.h("gux-icon", { key: 'a0ec621b3215dc3a262aa9451356ef342bdb4f2f', "icon-name": this.getIcon(this.accent), decorative: true, size: "small" }), index.h("gux-screen-reader-beta", { key: '27fa3291c12212f8860c302ed004e916c585298b' }, this.i18n(this.accent)), index.h("div", { key: '94ea666c5d2b0407cee4a35ec94212ab01367697', class: "gux-content" }, index.h("slot", { key: '4c077cb44053bb1d9ab34e617b48b247434eaafb', name: "content" }, index.h("slot", { key: '396b9454b31879d7eebeb48088a7894ca7d7ff4a' }))))));
    }
    get root() { return index.getElement(this); }
};
GuxAlert.style = guxInlineAlertCss;

exports.gux_inline_alert = GuxAlert;
