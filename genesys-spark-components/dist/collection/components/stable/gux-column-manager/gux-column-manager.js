import { h, forceUpdate } from "@stencil/core";
import { buildI18nForComponent } from "../../../i18n";
import { trackComponent } from "../../../utils/tracking/usage";
import { getEmptyKeyboardOrderChange, getIndexInParent, getNewKeyboardOrderChange, getNewOrder, getSelectedColumnCount, setAllCheckboxInputs, setHighlights, setKeyboardReorderPositionIndicator, setMainCheckboxElementCheckedState } from "./gux-column-manager.service";
import translationResources from "./i18n/en.json";
/**
 * @slot - slot for gux-column-manager-item's
 */
export class GuxColumnManager {
    constructor() {
        this.highlightResults = {
            matchCount: 0,
            currentMatch: 0
        };
        this.keyboardOrderChange = getEmptyKeyboardOrderChange();
    }
    watchKeyboardOrderChange() {
        setKeyboardReorderPositionIndicator(this.root, this.keyboardOrderChange);
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    componentDidLoad() {
        setMainCheckboxElementCheckedState(this.root, this.mainCheckboxElement);
    }
    handleInternalorderchange(event) {
        event.stopPropagation();
        this.emitOrderChange(event.detail);
    }
    emitOrderChange(orderChange) {
        const { oldIndex, newIndex } = orderChange;
        if (oldIndex !== newIndex) {
            const newOrder = getNewOrder(this.root, orderChange);
            this.guxorderchange.emit(newOrder);
        }
    }
    handleInternalkeyboardorderstart(event) {
        event.stopPropagation();
        const columnName = event.detail;
        const oldIndex = getIndexInParent(event.target);
        this.keyboardOrderChange = {
            oldIndex,
            newIndex: oldIndex
        };
        void this.announceElement.guxAnnounce(this.i18n('reorderingModeActive', { columnName }));
    }
    handleInternalkeyboardreordermove(event) {
        event.stopPropagation();
        const { delta, column } = event.detail;
        this.keyboardOrderChange = getNewKeyboardOrderChange(this.root, this.keyboardOrderChange, delta);
        const columnName = column;
        const newPositionNumber = this.keyboardOrderChange.newIndex + 1;
        const oldPositionNumber = this.keyboardOrderChange.oldIndex + 1;
        void this.announceElement.guxAnnounce(this.i18n('movePositionPrompt', {
            columnName,
            newPositionNumber,
            oldPositionNumber
        }));
    }
    handleInternalkeyboarddoreorder(event) {
        event.stopPropagation();
        this.emitOrderChange(this.keyboardOrderChange);
        void event.target.guxFocus();
    }
    handleInternalkeyboardorderfinish(event) {
        event.stopPropagation();
        this.keyboardOrderChange = getEmptyKeyboardOrderChange();
    }
    onSearchInput() {
        this.highlightResults = setHighlights(this.root, this.searchElement);
    }
    onGuxCurrentMatchChanged(event) {
        this.highlightResults = setHighlights(this.root, this.searchElement, event.detail);
    }
    onMainCheckboxChange() {
        setAllCheckboxInputs(this.root, this.mainCheckboxElement.checked);
        forceUpdate(this.root);
    }
    onListChange() {
        setMainCheckboxElementCheckedState(this.root, this.mainCheckboxElement);
        forceUpdate(this.root);
    }
    onSlotChange() {
        this.onListChange();
    }
    renderSelectedColumnCount() {
        const { count, total } = getSelectedColumnCount(this.root);
        return (h("div", null, h("span", { "aria-hidden": "true" }, this.i18n('selectedColumnCount', { count, total })), h("span", { class: "gux-sr-only" }, count === total ? (h("span", null, ": ", this.i18n('unselectAllColumnsScreenReader', { count, total }))) : (h("span", null, ": ", this.i18n('selectAllColumnsScreenReader', { count, total }))))));
    }
    render() {
        return (h("div", { key: '62daef53138e926a9cbfae1719232de3f3e7f9b2', class: "gux-container" }, h("div", { key: 'e3a79e55e8cbe501bdb26935385ba313cd4927ee', class: "gux-sr-only", "aria-live": "polite" }, `${this.highlightResults.matchCount} ${this.i18n('searchResults')}`), h("div", { key: '76a55f638c25df7ceb4d38b53be63102889b9aa8', class: "gux-search" }, h("gux-content-search", { key: 'be60a7fdfe003135a386d313bd3fecbbd52c853f', "match-count": this.highlightResults.matchCount, "current-match": this.highlightResults.currentMatch, onGuxcurrentmatchchanged: event => this.onGuxCurrentMatchChanged(event) }, h("input", { key: '19af360a04d7d4df522dc76676897363fe35c1a4', type: "search", placeholder: this.i18n('search'), onInput: () => this.onSearchInput(), ref: el => (this.searchElement = el) }))), h("div", { key: '261035c713eb6c548bf5cf3f0c2cfd8337446c4f', class: "gux-select" }, h("gux-form-field-checkbox", { key: '7067d7cece7c16d05a45e6b01fa46c245a450eea' }, h("input", { key: 'bef6b7f2804bc0f8006901195a694f725dd6c14f', slot: "input", type: "checkbox", ref: el => (this.mainCheckboxElement = el), onChange: () => this.onMainCheckboxChange() }), h("label", { key: '2135cd8bbc8421a4cae0fb46f93728245d5d670f', slot: "label" }, this.renderSelectedColumnCount()))), h("div", { key: '58b6db75ebf6d37d15beabf2a6e572d863f01fd4', class: "gux-list", onChange: () => this.onListChange() }, h("slot", { key: '3e2cdf0655d9dfbd380495eccd7cdaf23470b7d3', onSlotchange: () => this.onSlotChange() })), h("gux-announce-beta", { key: 'da70374436f1c5fd2746e327a7eb7709efb770ef', ref: el => (this.announceElement = el) })));
    }
    static get is() { return "gux-column-manager"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-column-manager.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-column-manager.css"]
        };
    }
    static get states() {
        return {
            "highlightResults": {},
            "keyboardOrderChange": {}
        };
    }
    static get events() {
        return [{
                "method": "guxorderchange",
                "name": "guxorderchange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GuxOrder",
                    "resolved": "string[]",
                    "references": {
                        "GuxOrder": {
                            "location": "import",
                            "path": "./gux-column-manager.types",
                            "id": "src/components/stable/gux-column-manager/gux-column-manager.types.ts::GuxOrder"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "keyboardOrderChange",
                "methodName": "watchKeyboardOrderChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "internal_order_change",
                "method": "handleInternalorderchange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "internal_keyboard_reorder_start",
                "method": "handleInternalkeyboardorderstart",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "internal_keyboard_reorder_move",
                "method": "handleInternalkeyboardreordermove",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "internal_keyboard_reorder_emit",
                "method": "handleInternalkeyboarddoreorder",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "internal_keyboard_reorder_finish",
                "method": "handleInternalkeyboardorderfinish",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
