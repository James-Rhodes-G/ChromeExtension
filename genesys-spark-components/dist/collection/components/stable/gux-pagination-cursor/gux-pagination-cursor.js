import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
export class GuxPaginationCursor {
    constructor() {
        this.hasPrevious = false;
        this.hasNext = false;
        this.layout = 'simple';
    }
    handleInternalitemsperpagechange(event) {
        this.guxitemsperpagechange.emit(event.detail);
    }
    onButtonClick(paginationDetail) {
        if ((paginationDetail === 'previous' && this.hasPrevious) ||
            (paginationDetail === 'next' && this.hasNext)) {
            this.guxPaginationCursorchange.emit(paginationDetail);
        }
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    renderSimpleLayout() {
        return [
            h("nav", { "aria-label": this.label, class: "gux-pagination-button-container" }, h("gux-button-slot", { accent: "ghost" }, h("button", { class: "gux-simple-button", type: "button", disabled: !this.hasPrevious, onClick: () => this.onButtonClick('previous') }, h("gux-icon", { iconName: "custom/chevron-left-small-regular", decorative: true, size: "small" }), h("gux-screen-reader-beta", null, this.i18n('previous')))), h("gux-button-slot", { accent: "ghost" }, h("button", { class: "gux-simple-button", type: "button", disabled: !this.hasNext, onClick: () => this.onButtonClick('next') }, h("gux-icon", { iconName: "custom/chevron-right-small-regular", decorative: true, size: "small" }), h("gux-screen-reader-beta", null, this.i18n('next')))))
        ];
    }
    renderAdvancedLayout() {
        return [
            h("nav", { "aria-label": this.label, class: "gux-pagination-button-container" }, h("gux-button-slot", { accent: "ghost" }, h("button", { type: "button", disabled: !this.hasPrevious, onClick: () => this.onButtonClick('previous') }, h("div", { class: "gux-button-align-content" }, h("gux-icon", { decorative: true, iconName: "custom/chevron-left-small-regular", size: "small" }), h("span", null, this.i18n('previous'))))), h("gux-button-slot", { accent: "ghost" }, h("button", { type: "button", disabled: !this.hasNext, onClick: () => this.onButtonClick('next') }, h("div", { class: "gux-button-align-content" }, h("span", null, this.i18n('next')), h("gux-icon", { decorative: true, iconName: "custom/chevron-right-small-regular", size: "small" }))))),
            this.renderItemsPerPage()
        ];
    }
    renderItemsPerPage() {
        return (this.itemsPerPage &&
            (h("gux-pagination-items-per-page", { "items-per-page": this.itemsPerPage, onInternalitemsperpagechange: this.handleInternalitemsperpagechange.bind(this) })));
    }
    render() {
        return this.layout === 'advanced'
            ? this.renderAdvancedLayout()
            : this.renderSimpleLayout();
    }
    static get is() { return "gux-pagination-cursor"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-cursor.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-cursor.css"]
        };
    }
    static get properties() {
        return {
            "hasPrevious": {
                "type": "boolean",
                "attribute": "has-previous",
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
            "hasNext": {
                "type": "boolean",
                "attribute": "has-next",
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
            "label": {
                "type": "string",
                "attribute": "label",
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
            "itemsPerPage": {
                "type": "number",
                "attribute": "items-per-page",
                "mutable": false,
                "complexType": {
                    "original": "GuxItemsPerPage",
                    "resolved": "100 | 25 | 50 | 75",
                    "references": {
                        "GuxItemsPerPage": {
                            "location": "import",
                            "path": "../gux-pagination/gux-pagination.types",
                            "id": "src/components/stable/gux-pagination/gux-pagination.types.ts::GuxItemsPerPage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Optional. Shows items per page dropdown when set. Only available with layout set to 'advanced'"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "layout": {
                "type": "string",
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "'simple' | 'advanced'",
                    "resolved": "\"advanced\" | \"simple\"",
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
                "defaultValue": "'simple'"
            }
        };
    }
    static get events() {
        return [{
                "method": "guxPaginationCursorchange",
                "name": "guxPaginationCursorchange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GuxPaginationCursorDetail",
                    "resolved": "\"next\" | \"previous\"",
                    "references": {
                        "GuxPaginationCursorDetail": {
                            "location": "import",
                            "path": "./gux-pagination-cursor.types",
                            "id": "src/components/stable/gux-pagination-cursor/gux-pagination-cursor.types.ts::GuxPaginationCursorDetail"
                        }
                    }
                }
            }, {
                "method": "guxitemsperpagechange",
                "name": "guxitemsperpagechange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
}
