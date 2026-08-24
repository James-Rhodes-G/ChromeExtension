import { h } from "@stencil/core";
import { randomHTMLId } from "../../../../utils/dom/random-html-";
import { logError } from "../../../../utils/error/log-error";
/**
 * @slot header - Required slot for the heading
 * @slot subheader - Optional slot for a subheader
 * * @slot icon - Optional slot for an icon
 */
export class GuxAccordionSection {
    constructor() {
        this.sectionId = randomHTMLId('gux-accordion-section');
        this.headerId = randomHTMLId('gux-accordion-header');
        /**
         * Position of the arrow chevron icon. Position can be 'start' or 'end'.
         */
        this.arrowPosition = 'end';
        /**
         * The content layout used in the accordion section. 'text' layout provides default padding, 'custom' removes default padding.
         */
        this.contentLayout = 'text';
        this.open = false;
        this.disabled = false;
        this.reverseHeadings = false;
    }
    watchOpen(open) {
        if (open) {
            this.guxopened.emit();
        }
        else {
            this.guxclosed.emit();
        }
    }
    toggle() {
        this.open = !this.open;
    }
    isArrowPositionBeforeText() {
        return this.arrowPosition === 'start';
    }
    handleSlotChange(slotname) {
        const slot = this.root.querySelector(`[slot="${slotname}"]`);
        slot.role = 'presentation';
        if (!slot || !/^H[1-6]$/.test(slot.nodeName)) {
            logError(this.root, `For accessibility reasons the ${slotname} slot should be filled with a HTML heading tag (h1 - h6).`);
        }
        if (slotname == 'header') {
            this.headingLevel = parseInt(slot.nodeName.replace('H', ''), 10);
        }
    }
    componentWillLoad() {
        this.hasIconSlot = !!this.root.querySelector('[slot="icon"]');
    }
    render() {
        return (h("section", { key: '674fc87bcc66d1d95e5cb276d5e70692e3cf51a8', class: { 'gux-disabled': this.disabled } }, h("div", { key: '9468ed945146ed3cc49211ad68cc4ae34d1a98ec', id: this.headerId, role: "heading", "aria-level": this.headingLevel }, h("button", { key: '81c4c2abab2b4023688b67e03fb7eec2ddec246a', class: {
                'gux-header': true,
                'gux-reverse-headings': this.reverseHeadings
            }, type: "button", "aria-expanded": this.open.toString(), "aria-controls": this.sectionId, disabled: this.disabled, onClick: this.toggle.bind(this) }, this.hasIconSlot && h("slot", { key: 'e10cf5069ca43a76e4f0cfe3f09e21313c949c59', name: "icon" }), h("div", { key: '4395ae449bcbd47d16dd08c84be5e174bc68a1cf', class: {
                'gux-header-text': true
            } }, h("slot", { key: 'd9f81cf111342ed803f0de96bc4837ad55683b46', onSlotchange: () => this.handleSlotChange('header'), name: "header" }), h("slot", { key: 'd087bbff228ccd623769c7d27684f9db038b7843', onSlotchange: () => this.handleSlotChange('subheader'), name: "subheader" })), h("div", { key: '84fd4c249ab6f1c5a024d0b885a4a2e839432f52', class: {
                'gux-header-icon': true,
                'gux-expanded': this.open,
                'gux-arrow-position-start': this.isArrowPositionBeforeText()
            } }, h("gux-icon", { key: '59f3304b140ad39781a3e41ed9623dd21a4c4e2e', decorative: true, "icon-name": "custom/chevron-down-small-regular", size: "small" })))), h("div", { key: 'e50b7aaebe532de57349ccb39644f4c326df05ff', id: this.sectionId, role: "region", "aria-labelledby": this.headerId, class: {
                'gux-content': true,
                'gux-expanded': this.open,
                'gux-text-content-layout': this.contentLayout === 'text'
            } }, h("slot", { key: 'ac483e88d40ddd8f7ee0030be7de192f690c4e6c', name: "content" }))));
    }
    static get is() { return "gux-accordion-section"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-accordion-section.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-accordion-section.css"]
        };
    }
    static get properties() {
        return {
            "arrowPosition": {
                "type": "string",
                "attribute": "arrow-position",
                "mutable": false,
                "complexType": {
                    "original": "GuxAccordionSectionArrowPosition",
                    "resolved": "\"end\" | \"start\"",
                    "references": {
                        "GuxAccordionSectionArrowPosition": {
                            "location": "import",
                            "path": "./gux-accordion-section.types",
                            "id": "src/components/stable/gux-accordion/gux-accordion-section/gux-accordion-section.types.ts::GuxAccordionSectionArrowPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the arrow chevron icon. Position can be 'start' or 'end'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'end'"
            },
            "contentLayout": {
                "type": "string",
                "attribute": "content-layout",
                "mutable": false,
                "complexType": {
                    "original": "GuxAccordionSectionContentLayout",
                    "resolved": "\"custom\" | \"text\"",
                    "references": {
                        "GuxAccordionSectionContentLayout": {
                            "location": "import",
                            "path": "./gux-accordion-section.types",
                            "id": "src/components/stable/gux-accordion/gux-accordion-section/gux-accordion-section.types.ts::GuxAccordionSectionContentLayout"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The content layout used in the accordion section. 'text' layout provides default padding, 'custom' removes default padding."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'text'"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
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
            "reverseHeadings": {
                "type": "boolean",
                "attribute": "reverse-headings",
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
            "headingLevel": {}
        };
    }
    static get events() {
        return [{
                "method": "guxopened",
                "name": "guxopened",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "guxclosed",
                "name": "guxclosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "watchOpen"
            }];
    }
}
