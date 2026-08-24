import { h } from "@stencil/core";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../../../i18n";
import translationResources from "./i18n/en.json";
export class GuxFormFieldInputClearButton {
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("button", { key: '305675dae6c35eab394e01dc39155b2f352a8c5e', tabIndex: -1, type: "button", title: this.i18n('clear') }, h("gux-icon", { key: '35444cb25808da5079a96c9f0c12b710726b687a', "icon-name": "fa/xmark-large-regular", decorative: true, size: "small" })));
    }
    static get is() { return "gux-form-field-input-clear-button"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-input-clear-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-input-clear-button.css"]
        };
    }
    static get elementRef() { return "root"; }
}
