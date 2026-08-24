'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var getSlotTextContent = require('./get-slot-text-content-DZwcXMIm.js');

const guxIconTooltipCss = ".gux-icon-tooltip{inline-size:fit-content;padding:0;line-height:0;background-color:transparent;border:none;border-radius:var(--gse-ui-formControl-label-tooltipTrigger-borderRadius)}.gux-icon-tooltip gux-tooltip{padding-inline-start:0}.gux-icon-tooltip gux-icon{vertical-align:bottom;color:var(--gse-ui-formControl-label-tooltipTrigger-color)}";

const GuxIconTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.placement = 'right';
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    /*
     * Show tooltip
     */
    async showTooltip() {
        return await this.tooltip.showTooltip();
    }
    /*
     * Hide tooltip
     */
    async hideTooltip() {
        return await this.tooltip.hideTooltip();
    }
    render() {
        return (index.h("div", { key: '1d7c4cd8f3a16245f010ec66dd975c97234b01ac', class: "gux-icon-tooltip" }, index.h("gux-screen-reader-beta", { key: 'd6fef5089af4f967c9df31d2732c65d160604beb' }, index.h("slot", { key: '6867e45124f6031a25a5b3c8725642773871a39e', name: "content" })), index.h("gux-icon", { key: 'ead0d91cb12c90697046d89c114206020d4d685c', "icon-name": this.iconName, size: "small", decorative: true }), index.h("gux-tooltip-beta", { key: '49cabba6e05798ee7720dd085b6686f669ab59be', placement: this.placement, ref: el => (this.tooltip = el) }, index.h("div", { key: '439b5a9da00fa5cd885dac7c51238c3f8ee5c72e', slot: "content" }, getSlotTextContent.getSlotTextContent(this.root, 'content')))));
    }
    get root() { return index.getElement(this); }
};
GuxIconTooltip.style = guxIconTooltipCss;

exports.gux_icon_tooltip_beta = GuxIconTooltip;
