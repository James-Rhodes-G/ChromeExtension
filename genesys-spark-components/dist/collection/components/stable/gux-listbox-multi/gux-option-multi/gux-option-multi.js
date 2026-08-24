import { h, Host } from "@stencil/core";
import { getClosestElement } from "../../../../utils/dom/get-closest-element";
import { randomHTMLId } from "../../../../utils/dom/random-html-";
import { buildI18nForComponent } from "../../../../i18n";
import translationResources from "./i18n/en.json";
import { hasSlot } from "../../../../utils/dom/has-slot";
/**
 * @slot - text
 * @slot subtext - Optional slot for subtext
 */
export class GuxOptionMulti {
    constructor() {
        this.active = false;
        this.selected = false;
        this.disabled = false;
        this.filtered = false;
        this.custom = false;
        this.hasSubtext = false;
    }
    emitRemoveCustomOption() {
        if (!this.selected && this.custom) {
            this.guxremovecustomoption.emit();
        }
    }
    handleActive(active) {
        var _a, _b;
        if (active) {
            void ((_a = this.truncateElement) === null || _a === void 0 ? void 0 : _a.setShowTooltip());
        }
        else {
            void ((_b = this.truncateElement) === null || _b === void 0 ? void 0 : _b.setHideTooltip());
        }
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.root.id = this.root.id || randomHTMLId('gux-option-multi');
        if (this.custom) {
            this.internalselectcustomoption.emit(this.value);
        }
        this.onSubtextChange();
    }
    onSubtextChange() {
        this.hasSubtext = hasSlot(this.root, 'subtext');
    }
    hasDisabledParent() {
        const parentListbox = getClosestElement('gux-listbox-multi', this.root);
        return parentListbox === null || parentListbox === void 0 ? void 0 : parentListbox.disabled;
    }
    // SVGs must be in DOM for tokenization to work
    renderSVGCheckbox() {
        return this.selected
            ? (h("svg", { class: "gux-checkbox-container", xmlns: "http://www.w3.org/2000/svg", viewBox: "1 1 13 13" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4 1H11C11.7956 1 12.5587 1.31607 13.1213 1.87868C13.6839 2.44129 14 3.20435 14 4V11C14 11.7956 13.6839 12.5587 13.1213 13.1213C12.5587 13.6839 11.7956 14 11 14H4C3.20435 14 2.44129 13.6839 1.87868 13.1213C1.31607 12.5587 1 11.7956 1 11V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1ZM5.57018 10.4198C5.7051 10.5547 5.87599 10.6177 6.04689 10.6177C6.22678 10.6177 6.39767 10.5457 6.52359 10.4198L11.7944 5.14905C12.0552 4.88821 12.0552 4.45647 11.7944 4.19563C11.5335 3.93479 11.1018 3.93479 10.841 4.19563L6.04689 8.9897L4.14905 7.08286C3.88821 6.82202 3.45647 6.82202 3.19563 7.08286C2.93479 7.3437 2.93479 7.77544 3.19563 8.03628L5.57018 10.4198Z" })))
            : (h("svg", { class: "gux-checkbox-container", xmlns: "http://www.w3.org/2000/svg", viewBox: "1 1 13 13" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11 2.5H4C3.17157 2.5 2.5 3.17157 2.5 4V11C2.5 11.8284 3.17157 12.5 4 12.5H11C11.8284 12.5 12.5 11.8284 12.5 11V4C12.5 3.17157 11.8284 2.5 11 2.5ZM4 1C2.34315 1 1 2.34315 1 4V11C1 12.6569 2.34315 14 4 14H11C12.6569 14 14 12.6569 14 11V4C14 2.34315 12.6569 1 11 1H4Z" })));
    }
    renderCustomOptionInstructions() {
        if (this.custom) {
            return (h("span", { class: "gux-screenreader" }, this.i18n('removeCustomElementInstructions')));
        }
    }
    render() {
        return (h(Host, { key: '2325e784623a05a6198fbc59ce712d6873392a2e', role: "option", class: {
                'gux-active': this.active,
                'gux-disabled': this.disabled || this.hasDisabledParent(),
                'gux-filtered': this.filtered,
                'gux-selected': this.selected,
                'gux-show-subtext': this.hasSubtext
            }, "aria-selected": this.selected.toString(), "aria-disabled": this.disabled.toString() }, this.renderSVGCheckbox(), h("div", { key: 'c9ad4deb95e260d63d0e374ce65b3ef0b6f4431b', class: "gux-option-wrapper" }, h("gux-truncate", { key: 'b53c8fd041a7571a76febd5a854c259ae393ebe4', "tooltip-placement": "right", ref: el => (this.truncateElement = el) }, h("slot", { key: '268f2160228d379739fcbe337daeb9c58fd757b6' })), h("slot", { key: '902f3a78b3c378f000e2a6ad8a5406e1b54a5ecd', onSlotchange: () => this.onSubtextChange(), name: "subtext" })), this.renderCustomOptionInstructions()));
    }
    static get is() { return "gux-option-multi"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-option-multi.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-option-multi.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "active": {
                "type": "boolean",
                "attribute": "active",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "filtered": {
                "type": "boolean",
                "attribute": "filtered",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "custom": {
                "type": "boolean",
                "attribute": "custom",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "hasSubtext": {}
        };
    }
    static get events() {
        return [{
                "method": "guxremovecustomoption",
                "name": "guxremovecustomoption",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "internalselectcustomoption",
                "name": "internalselectcustomoption",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "selected",
                "methodName": "emitRemoveCustomOption"
            }, {
                "propName": "active",
                "methodName": "handleActive"
            }];
    }
}
