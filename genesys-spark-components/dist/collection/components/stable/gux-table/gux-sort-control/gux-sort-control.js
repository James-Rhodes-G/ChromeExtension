import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import { trackComponent } from "../../../../utils/tracking/usage";
import { getClosestElement } from "../../../../utils/dom/get-closest-element";
import { onMutation } from "../../../../utils/dom/on-mutation";
import tableResources from "../i18n/en.json";
export class GuxSortControl {
    constructor() {
        this.includeUnsorted = false;
        this.active = false;
        this.sort = 'none';
        this.isLeftAlignIcon = false;
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, tableResources, 'gux-table');
        this.tableHeader = getClosestElement('th', this.root);
        this.thObserver = onMutation(this.tableHeader, () => {
            this.setState();
        }, {
            attributes: true,
            childList: false,
            subtree: false
        });
        this.setState();
    }
    disconnectedCallback() {
        if (this.thObserver) {
            this.thObserver.disconnect();
        }
    }
    onClick() {
        this.guxsortchanged.emit({
            columnName: this.tableHeader.dataset.columnName,
            sortDirection: this.getNextSort(this.sort)
        });
    }
    setState() {
        this.headerContent = this.tableHeader.textContent;
        this.isLeftAlignIcon =
            this.tableHeader.hasAttribute('data-cell-numeric') ||
                this.tableHeader.hasAttribute('data-cell-action');
        const ariaSort = this.tableHeader.getAttribute('aria-sort');
        switch (ariaSort) {
            case 'ascending':
            case 'descending':
                this.active = true;
                this.sort = ariaSort;
                break;
            default:
                this.active = false;
                this.sort = 'none';
        }
    }
    getIconName(colSortDirection) {
        switch (colSortDirection) {
            case 'descending':
                return 'fa/caret-down-solid';
            case 'ascending':
            default:
                return 'fa/caret-up-solid';
        }
    }
    getNextSort(colSortDirection) {
        switch (colSortDirection) {
            case 'none':
                return 'ascending';
            case 'ascending':
                return 'descending';
            case 'descending':
            default: {
                if (this.includeUnsorted) {
                    return 'none';
                }
                return 'ascending';
            }
        }
    }
    getSRText(colSortDirection) {
        switch (colSortDirection) {
            case 'ascending':
                return this.i18n('ascendingColumnSort', {
                    headerContent: this.headerContent
                });
            case 'descending': {
                if (this.includeUnsorted) {
                    return this.i18n('descendingColumnSortIncludeUnsorted', {
                        headerContent: this.headerContent
                    });
                }
                return this.i18n('descendingColumnSort', {
                    headerContent: this.headerContent
                });
            }
            default:
                return this.i18n('noColumnSort', { headerContent: this.headerContent });
        }
    }
    render() {
        return (h("div", { key: '74c2227a0d337f215b66f144bb4ca319faa89241', class: { 'gux-container': true, 'gux-active': this.active } }, h("button", { key: '7a0760f87902cec08544f78173952cbcfea2f593', class: "gux-sort-button", type: "button", onClick: () => this.onClick(), "aria-label": this.getSRText(this.sort) }, h("gux-icon", { key: 'fb1634abc9e95555a0259068719e9cb9f238dc88', class: {
                'gux-sort-icon': true,
                'gux-left': this.isLeftAlignIcon
            }, size: "small", "icon-name": this.getIconName(this.sort), decorative: true })), h("div", { key: '23e8fbc7d9402e3dae72c13a5331b4ec2019fcac', class: "gux-resize-spacer" })));
    }
    static get is() { return "gux-sort-control"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-sort-control.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-sort-control.css"]
        };
    }
    static get properties() {
        return {
            "includeUnsorted": {
                "type": "boolean",
                "attribute": "include-unsorted",
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
            "headerContent": {},
            "active": {},
            "sort": {},
            "isLeftAlignIcon": {}
        };
    }
    static get events() {
        return [{
                "method": "guxsortchanged",
                "name": "guxsortchanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GuxTableSortState",
                    "resolved": "GuxTableSortState",
                    "references": {
                        "GuxTableSortState": {
                            "location": "import",
                            "path": "../gux-table.types",
                            "id": "src/components/stable/gux-table/gux-table.types.ts::GuxTableSortState"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "root"; }
}
