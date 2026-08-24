import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { g as getSlotTextContent } from './get-slot-text-content-MAoEg4ig.js';

const guxLabelInfoCss = ".gux-label-info{inline-size:fit-content;padding:0;line-height:0;background-color:transparent;border:none;border-radius:var(--gse-ui-formControl-label-tooltipTrigger-borderRadius)}.gux-label-info gux-tooltip{padding-inline-start:0}.gux-label-info gux-icon{vertical-align:bottom;color:var(--gse-ui-formControl-label-tooltipTrigger-color)}";

const GuxLabelInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'info';
        this.placement = 'right';
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.variant });
    }
    getVariantIcon(variant) {
        return variant === 'question'
            ? 'fa/circle-question-regular'
            : 'fa/circle-info-regular';
    }
    /*
     * Show tooltip
     */
    async showTooltip() {
        return await this.tooltipElement.showTooltip();
    }
    /*
     * Hide tooltip
     */
    async hideTooltip() {
        return await this.tooltipElement.hideTooltip();
    }
    render() {
        return (h("div", { key: 'b76ff06369ed70fd75e794f96f74be8e3f8a76b5', class: "gux-label-info" }, h("gux-screen-reader-beta", { key: '454ab062488bc37d73fb88b769236ce243cd38f4' }, getSlotTextContent(this.root, 'content')), h("gux-icon", { key: '27713594a6c58c34b262f6eb22605bacc63d8fcd', "icon-name": this.getVariantIcon(this.variant), size: "small", decorative: true }), h("gux-tooltip-beta", { key: 'bf484212d4525b01e8b448ef2b7ff90d7299a4c3', placement: this.placement, ref: el => (this.tooltipElement = el) }, h("slot", { key: 'a3c28acb003422167bc32707208f5539081bbed1', name: "content" }))));
    }
    get root() { return getElement(this); }
};
GuxLabelInfo.style = guxLabelInfoCss;

export { GuxLabelInfo as gux_label_info_beta };
