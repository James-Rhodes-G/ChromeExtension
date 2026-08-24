import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';

const guxBlankStateCss = ":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  container-type: inline-size;\n}\n\n.gux-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--gse-ui-blankState-padding);\n  color: var(--gse-ui-blankState-foregroundColor);\n}\n.gux-container .gux-image {\n  padding-block-end: var(--gse-ui-blankState-gapMain);\n}\n.gux-container .gux-message {\n  padding-block-end: var(--gse-ui-blankState-gapMessage);\n}\n.gux-container .gux-guidance {\n  padding-block-end: var(--gse-ui-blankState-gapContent);\n}\n.gux-container ::slotted(gux-icon) {\n  inline-size: var(--gse-ui-blankState-icon-size-lg);\n  block-size: var(--gse-ui-blankState-icon-size-lg);\n  color: var(--gse-ui-blankState-iconColor);\n}\n.gux-container slot[name=primary-message] {\n  font-family: var(--gse-ui-progressAndLoading-blankState-large-header-fontFamily);\n  font-size: var(--gse-ui-progressAndLoading-blankState-large-header-fontSize);\n  font-weight: var(--gse-ui-progressAndLoading-blankState-large-header-fontWeight);\n  line-height: var(--gse-ui-progressAndLoading-blankState-large-header-lineHeight);\n  color: var(--gse-ui-blankState-foregroundColor);\n  text-align: center;\n}\n.gux-container slot[name=additional-guidance] {\n  font-family: var(--gse-ui-progressAndLoading-blankState-large-subheader-fontFamily);\n  font-size: var(--gse-ui-progressAndLoading-blankState-large-subheader-fontSize);\n  font-weight: var(--gse-ui-progressAndLoading-blankState-large-subheader-fontWeight);\n  line-height: var(--gse-ui-progressAndLoading-blankState-large-subheader-lineHeight);\n  color: var(--gse-ui-blankState-foregroundColor);\n  text-align: center;\n}\n\n@container (width < 570px) {\n  .gux-container ::slotted(gux-icon) {\n    inline-size: var(--gse-ui-blankState-icon-size-sm);\n    block-size: var(--gse-ui-blankState-icon-size-sm);\n  }\n  .gux-container slot[name=primary-message] {\n    font-family: var(--gse-ui-progressAndLoading-blankState-small-header-fontFamily);\n    font-size: var(--gse-ui-progressAndLoading-blankState-small-header-fontSize);\n    font-weight: var(--gse-ui-progressAndLoading-blankState-small-header-fontWeight);\n    line-height: var(--gse-ui-progressAndLoading-blankState-small-header-lineHeight);\n  }\n  .gux-container slot[name=additional-guidance] {\n    font-family: var(--gse-ui-progressAndLoading-blankState-small-subheader-fontFamily);\n    font-size: var(--gse-ui-progressAndLoading-blankState-small-subheader-fontSize);\n    font-weight: var(--gse-ui-progressAndLoading-blankState-small-subheader-fontWeight);\n    line-height: var(--gse-ui-progressAndLoading-blankState-small-subheader-lineHeight);\n  }\n}";

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
const GuxBlankState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hasCallToAction = false;
        this.hasGuidance = false;
    }
    onMutation() {
        this.hasCallToAction = hasSlot(this.root, 'call-to-action');
        this.hasGuidance = hasSlot(this.root, 'additional-guidance');
    }
    renderCallToActionSlot() {
        if (this.hasCallToAction) {
            return (h("gux-button-slot", { accent: "primary" }, h("slot", { name: "call-to-action" })));
        }
    }
    renderGuidanceSlot() {
        if (this.hasGuidance) {
            return (h("div", { class: "gux-guidance" }, h("slot", { name: "additional-guidance" })));
        }
    }
    componentWillLoad() {
        trackComponent(this.root);
        this.hasCallToAction = hasSlot(this.root, 'call-to-action');
        this.hasGuidance = hasSlot(this.root, 'additional-guidance');
    }
    render() {
        return (h("div", { key: 'e7c20863e2a8e957ec8e3b0d8c796bb6e250f817', class: "gux-container" }, h("div", { key: '33e2d205db3d81db81490c4a1986adf25f815878', class: "gux-image" }, h("slot", { key: '1ad4172b9e9b82e026ff1527727c2c3e83115b8c', name: "image" })), h("div", { key: 'c189af637773ec5b19fa5a8bf29c302ea37bb109', class: "gux-message" }, h("slot", { key: 'd0933deb27de1c4565e4a0c41c2631c7e7efd037', name: "primary-message" })), this.renderGuidanceSlot(), this.renderCallToActionSlot()));
    }
    get root() { return getElement(this); }
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxBlankState.prototype, "onMutation", null);
GuxBlankState.style = guxBlankStateCss;

export { GuxBlankState as gux_blank_state };
