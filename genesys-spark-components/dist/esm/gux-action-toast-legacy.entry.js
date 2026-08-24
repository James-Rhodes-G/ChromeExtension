import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxActionToastCss = ":host{display:flex;flex-direction:column;flex-wrap:nowrap;place-content:stretch flex-start;align-items:stretch;width:270px;padding:20px 24px;margin-bottom:4px;color:var(--gse-ui-toast-success-foregroundColor);background:var(--gse-ui-toast-success-backgroundColor);border:1px solid var(--gse-ui-card-default-border-color);border-radius:4px;box-shadow:0 2px 4px rgba(32, 41, 55, 0.24)}.gux-header{display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:center;align-self:auto;order:0;font-family:var(--gse-semantic-heading-lg-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-lg-bold-fontSize);line-height:var(--gse-semantic-heading-lg-bold-lineHeight);font-weight:var(--gse-semantic-heading-lg-bold-fontWeight)}.gux-header .gux-icon{flex:0 1 auto;align-self:auto;order:0;color:var(--gse-core-colorLegacy-secondary-aquaGreen)}.gux-header .gux-icon ::slotted(gux-icon){width:32px !important;height:32px !important}.gux-header .gux-title{flex:1 1 auto;align-self:auto;order:0;margin:0 0 0 8px}.gux-message{flex:0 1 auto;align-self:auto;order:0;margin:16px 0;font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-regular-fontWeight)}.gux-message ::slotted(dl){display:flex;flex-direction:row;flex-wrap:wrap;place-content:stretch flex-start;align-items:flex-start;margin:0}.gux-action-buttons{display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:nowrap;place-content:stretch space-between;align-items:flex-start;align-self:auto;order:0}.gux-action-buttons .gux-negative-button{flex:0 1 auto;align-self:auto;order:0}.gux-action-buttons .gux-positive-button{flex:0 1 auto;align-self:auto;order:0}.gux-action-buttons{display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:nowrap;place-content:stretch space-between;align-items:flex-start;align-self:auto;order:0}.gux-action-buttons .gux-negative-button{flex:0 1 auto;align-self:auto;order:0}.gux-action-buttons .gux-positive-button{flex:0 1 auto;align-self:auto;order:0}";

const GuxActionToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: '86c7d4b10a2b6aff27aefc4b301600d37d3a2b95' }, h("div", { key: 'c91122959f04e871256924658943d42e3efa086d', class: "gux-header" }, h("div", { key: '197997e4491ecfef4eae36be626625d63e5cafe6', class: "gux-icon" }, h("slot", { key: '42299d9477f16ead474126a0eb6c18dec4e51ba5', name: "icon" })), h("div", { key: '79aa729ba27becac9f95ac5278d105e14ed69211', class: "gux-title" }, h("slot", { key: '59b6d808b0c56b6e0468ec59598326039758074d', name: "title" }))), h("div", { key: 'b1e73ea83c95fd1e17f0f1657ab8aa5b9b7deb14', class: "gux-message" }, h("slot", { key: 'e16d6521334acf2997d594c62589662b65eba647', name: "message" })), h("div", { key: '4c72959e5ac48709d03f49ed00d3af1e0b9241bb', class: "gux-action-buttons" }, h("div", { key: '6d451a966ff94fa805f78462215ca3858d6bcc11', class: "gux-positive-button" }, h("slot", { key: '5e7f6901f414700e0dacff47fc2bb4ea591bbedb', name: "positive-button" })), h("div", { key: '6a51a2a92c669756d643655487e3deeabdd94e04', class: "gux-negative-button" }, h("slot", { key: '3194513f90919ad3f4f4f2d0c50f4fedd92bb6c0', name: "negative-button" })))));
    }
    get root() { return getElement(this); }
};
GuxActionToast.style = guxActionToastCss;

export { GuxActionToast as gux_action_toast_legacy };
