import { Host, h } from "@stencil/core";
import { trackComponent } from "../../../../utils/tracking/usage";
import { first, last, next, previous } from "../../../stable/gux-list/gux-list.service";
/**
 * @slot - collection of gux-rich-style-list-item, gux-rich-highlight-list-item or gux-rich-text-editor-sub-list elements.
 */
const validFocusableItems = [
    'gux-rich-style-list-item',
    'gux-rich-highlight-list-item',
    'gux-rich-text-editor-sub-list'
];
export class GuxRichTextEditorList {
    constructor() {
        this.listItems = [];
    }
    get listItemsSlot() {
        return this.root.querySelector('slot');
    }
    get listItemElements() {
        var _a;
        const assignedElements = (_a = this.listItemsSlot) === null || _a === void 0 ? void 0 : _a.assignedElements();
        if (assignedElements) {
            return Array.from(assignedElements);
        }
        return [];
    }
    //Set the first gux-rich-highlight-list-item tab-index to 0 so we can tab to the list of colors.
    handleHighlighItemsNavigation() {
        if (this.listItemsSlot) {
            const firstHighlightItem = this.listItemsSlot
                .assignedElements()
                .find(el => el.tagName.toLowerCase() === 'gux-rich-highlight-list-item');
            if (firstHighlightItem) {
                const buttonElement = firstHighlightItem.shadowRoot.querySelector('button');
                if (buttonElement) {
                    buttonElement.tabIndex = 0;
                }
            }
        }
    }
    setListItems() {
        this.listItems = this.listItemElements;
        this.internallistitemsupdated.emit();
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.setListItems();
        this.handleHighlighItemsNavigation();
    }
    onKeyDown(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const keyHandlers = {
            ArrowUp: () => previous(this.root, validFocusableItems),
            ArrowDown: () => next(this.root, validFocusableItems),
            Home: () => first(this.root, validFocusableItems),
            End: () => last(this.root, validFocusableItems)
        };
        if (target.matches('gux-rich-highlight-list-item')) {
            Object.assign(keyHandlers, {
                ArrowLeft: () => previous(this.root, validFocusableItems),
                ArrowRight: () => next(this.root, validFocusableItems)
            });
        }
        const handler = keyHandlers[event.key];
        if (handler) {
            event.preventDefault();
            handler();
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusFirstItem() {
        first(this.root, validFocusableItems);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusLastItem() {
        last(this.root, validFocusableItems);
    }
    render() {
        return (h(Host, { key: '6fdcb0ec440c4df7c43cd121eef4e1980d8a61fd', role: "list" }, h("slot", { key: '52e975452d0955e53c1476e826a2da43b70ffd2a', onSlotchange: () => this.setListItems() })));
    }
    static get is() { return "gux-rich-text-editor-list"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-text-editor-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-text-editor-list.css"]
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
            }
        };
    }
    static get states() {
        return {
            "listItems": {}
        };
    }
    static get events() {
        return [{
                "method": "internallistitemsupdated",
                "name": "internallistitemsupdated",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "guxFocusFirstItem": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "guxFocusLastItem": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
