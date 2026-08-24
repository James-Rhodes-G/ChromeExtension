import { h } from "@stencil/core";
import { randomHTMLId } from "../../../../../utils/dom/random-html-";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { trackComponent } from "../../../../../utils/tracking/usage";
/**
 * @slot heading - The heading of the side panel
 * @slot description - Optional description of the side panel
 * @slot content - The content of the side panel
 * @slot footer - The footer of the side panel
 */
export class GuxModalSidePanel {
    constructor() {
        this.open = false;
        this.size = 'medium';
        this.dialogElement = null;
    }
    syncOpenState() {
        if (this.open) {
            this.dialogElement.showModal();
        }
        else {
            this.dialogElement.close();
            this.modalSidePanelDismiss.emit();
        }
    }
    sidepaneldismissHandler() {
        this.open = false;
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                this.open = false;
                return;
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async showModal() {
        this.open = true;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async close() {
        this.open = false;
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.size });
    }
    componentDidLoad() {
        if (this.open) {
            this.dialogElement.showModal();
        }
    }
    render() {
        const titleID = randomHTMLId();
        return (h("dialog", { key: 'a0762489e7f0b45cbc00eaef77141f174cf89860', ref: el => (this.dialogElement = el), "aria-labelledby": titleID, class: { 'gux-open': this.open } }, h("gux-side-panel-beta", { key: 'e07a6eab666d7fa67bf932a42589edb7cc51541f', size: this.size }, h("div", { key: '5b9b231d4cb29f3707f8c77fd4e4f465ab3b3b53', slot: "heading", id: titleID }, h("slot", { key: '9d312a6c106e5c3a276b77350b30f83377b5299d', name: "heading" })), hasSlot(this.root, 'description') && (h("div", { key: 'c987c918bffd3a8fb8671d9cec836cc580fcc5f2', slot: "description" }, h("slot", { key: 'ac61b86567c6e9387cafa128b1fe6b36a9dfd40f', name: "description" }))), h("div", { key: 'bd9907df3b52f4214992970b47d2aa81f8b80da3', slot: "content" }, h("slot", { key: 'cd3e07787a0527d2f11b9cd8f2a8cc553e7f22a7', name: "content" })), h("div", { key: 'b9ad7f08ead8a67a61f29d826fc51df710ed68c7', slot: "footer" }, h("slot", { key: '8b237d105399c02ace67b9eebdf185db2f1c8f7f', name: "footer" })))));
    }
    static get is() { return "gux-modal-side-panel-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-modal-side-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-modal-side-panel.css"]
        };
    }
    static get properties() {
        return {
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "GuxSidePanelSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "GuxSidePanelSize": {
                            "location": "import",
                            "path": "../../gux-side-panel.types",
                            "id": "src/components/beta/gux-side-panel/gux-side-panel.types.tsx::GuxSidePanelSize"
                        }
                    }
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
                "defaultValue": "'medium'"
            }
        };
    }
    static get events() {
        return [{
                "method": "modalSidePanelDismiss",
                "name": "modalSidePanelDismiss",
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
    static get methods() {
        return {
            "showModal": {
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
            "close": {
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
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "syncOpenState"
            }];
    }
    static get listeners() {
        return [{
                "name": "sidePanelDismiss",
                "method": "sidepaneldismissHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "onKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
