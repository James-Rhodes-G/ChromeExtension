import { r as registerInstance, c as createEvent, f as forceUpdate, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { g as getEmptyKeyboardOrderChange, s as setKeyboardReorderPositionIndicator, a as setMainCheckboxElementCheckedState, b as getNewOrder, c as getIndexInParent, d as getNewKeyboardOrderChange, e as setHighlights, f as setAllCheckboxInputs, h as getSelectedColumnCount } from './gux-column-manager.service-CB2ijDRX.js';
import './get-closest-element-Cd4R0amv.js';
import './clamp-CcCycvZh.js';
import './simulate-native-event-BMRf5pjV.js';

const search = "Search";
const searchResults = "search results";
const selectedColumnCount = "{count} / {total} Columns Selected";
const selectAllColumnsScreenReader = "{count} of {total} columns selected: check checkbox to select all {total} columns";
const unselectAllColumnsScreenReader = "{count} of {total} columns selected: uncheck checkbox to unselect all {total} columns";
const movePositionPrompt = "Press space or enter to move the {columnName} column to position {newPositionNumber} from position {oldPositionNumber}.";
const reorderingModeActive = "Reordering mode active. Reposition the {columnName} column using the up arrow key, the down arrow key, the home key and the end key. Press Escape to deactivate reordering mode.";
var translationResources = {
	search: search,
	searchResults: searchResults,
	selectedColumnCount: selectedColumnCount,
	selectAllColumnsScreenReader: selectAllColumnsScreenReader,
	unselectAllColumnsScreenReader: unselectAllColumnsScreenReader,
	movePositionPrompt: movePositionPrompt,
	reorderingModeActive: reorderingModeActive
};

const guxColumnManagerCss = ".gux-container{inline-size:320px;min-inline-size:320px;padding:var(--gse-ui-dataTableItems-editColumn-editColumnContent-padding)}.gux-container .gux-search gux-content-search{inline-size:100%}.gux-container .gux-search gux-content-search input[type=search]::-webkit-search-decoration,.gux-container .gux-search gux-content-search input[type=search]::-webkit-search-cancel-button,.gux-container .gux-search gux-content-search input[type=search]::-webkit-search-results-button,.gux-container .gux-search gux-content-search input[type=search]::-webkit-search-results-decoration{display:none;-webkit-appearance:none}.gux-container .gux-select{padding:var(--gse-ui-dataTableItems-editColumn-editColumnContent-padding);margin-inline-start:24px}.gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}";

const GuxColumnManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxorderchange = createEvent(this, "guxorderchange", 7);
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
    get root() { return getElement(this); }
    static get watchers() { return {
        "keyboardOrderChange": ["watchKeyboardOrderChange"]
    }; }
};
GuxColumnManager.style = guxColumnManagerCss;

export { GuxColumnManager as gux_column_manager };
