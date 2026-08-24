var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { OnMutation } from "../../../utils/decorator/on-mutation";
import { hasSlot } from "../../../utils/dom/has-slot";
/**
 * @slot primary-message - Required slot for primary-message.
 * @slot image - Slot for gux-icon element.
 * @slot additional-guidance - Slot for additional-guidance.
 * @slot call-to-action - Slot for the message call to action button.
 */
export class GuxBlankState {
    constructor() {
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
    static get is() { return "gux-blank-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-blank-state.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-blank-state.css"]
        };
    }
    static get states() {
        return {
            "hasCallToAction": {},
            "hasGuidance": {}
        };
    }
    static get elementRef() { return "root"; }
}
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxBlankState.prototype, "onMutation", null);
