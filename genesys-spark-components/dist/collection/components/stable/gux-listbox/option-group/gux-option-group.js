import { h, Host } from "@stencil/core";
import { onMutation } from "../../../../utils/dom/on-mutation";
/**
 * @slot - collection of elements conforming to the ListboxOptionElement interface
 */
export class GuxOptionGroup {
    constructor() {
        // @Prop()
        // disabled: boolean;
        // TOOD: GDS-2328
        this.filtered = false;
        this.showDivider = true;
    }
    componentDidLoad() {
        this.rootParent = this.root.parentNode;
        if (this.rootParent) {
            this.parentObserver = onMutation(this.rootParent, () => {
                var _a;
                const visibleOptions = Array.from((_a = this.root) === null || _a === void 0 ? void 0 : _a.children).filter((child) => this.isOption(child) && !child.filtered).length > 0;
                this.filtered = !visibleOptions;
                if (!this.filtered) {
                    this.showDivider =
                        this.hasVisibleNextSibling(this.root) && visibleOptions;
                }
            });
        }
    }
    disconnectedCallback() {
        if (this.rootParent) {
            this.parentObserver.disconnect();
        }
    }
    isOption(item) {
        const optionTypes = ['GUX-OPTION', 'GUX-OPTION-ICON'];
        return optionTypes.includes(item.tagName);
    }
    hasVisibleNextSibling(element) {
        let nextOption = element.nextElementSibling;
        if (nextOption === null) {
            return false;
        }
        while (nextOption && nextOption.classList.contains('gux-filtered')) {
            nextOption = nextOption.nextElementSibling;
        }
        return Boolean(nextOption);
    }
    renderDivider() {
        if (this.showDivider) {
            return (h("gux-list-divider", null));
        }
    }
    render() {
        return (h(Host, { key: 'd9e11e6d18f276576a4f7c935dd7aec903cfab7a', class: { 'gux-filtered': this.filtered } }, h("div", { key: '248400d1b8dee6df27cc3033273436eb600b4c4c', class: "gux-option-group" }, h("div", { key: '262994ef17a5b1b07a32865df907cfc66d940c61', class: "gux-option-group-label", role: "presentation" }, this.label), h("div", { key: '096d8807a3246c8a884104ebecdf420c823ed8f8', role: "group" }, h("slot", { key: 'abe716d70cd0964e69a07aef07d346c0ccb24015' })), this.renderDivider())));
    }
    static get is() { return "gux-option-group-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-option-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-option-group.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "filtered": {},
            "showDivider": {}
        };
    }
    static get elementRef() { return "root"; }
}
