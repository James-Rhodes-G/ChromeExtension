'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var whenEventIsFrom = require('./when-event-is-from-C6TjNoqM.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var usage = require('./usage-v50bi18B.js');
var en = require('./en-BCiQgP2I.js');
require('./get-closest-element-CfyZl7i7.js');

const guxTableCss = ":host{position:relative;display:block}:host .gux-table{position:relative;block-size:inherit}:host .gux-table .gux-table-container{max-block-size:100%;overflow:auto;scrollbar-color:var(--gse-ui-dataTableItems-scrollbar-foregroundColor);scrollbar-width:thin}:host .gux-table .gux-table-container.gux-column-resizing-hover,:host .gux-table .gux-table-container.gux-column-resizing{cursor:col-resize}:host .gux-empty-table{display:flex;align-items:center;justify-content:center;block-size:calc(100% - var(--gse-ui-dataTableItems-header-default-height));color:var(--gse-semantic-foreground-container-lowEmphasis);background:var(--gse-semantic-background-container-page-tonalSubtle);font-family:var(--gse-semantic-heading-lg-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-lg-bold-fontSize);line-height:var(--gse-semantic-heading-lg-bold-lineHeight);font-weight:var(--gse-semantic-heading-lg-bold-fontWeight)}";

const COL_RESIZE_HANDLE_WIDTH = 3;
const GuxTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxselectionchanged = index.createEvent(this, "guxselectionchanged", 7);
        this.guxsortchanged = index.createEvent(this, "guxsortchanged", 7);
        this.slotObserver = new MutationObserver(() => {
            this.prepareSelectableRows();
            index.forceUpdate(this);
        });
        this.tableId = randomHtmlId.randomHTMLId('gux-table');
        this.columnsWidths = {};
        /**
         * Indicates that vertical or horizontal scroll are presented for table
         */
        this.isScroll = false;
        /**
         * Indicates if the mouse is in a position that supports starting resize
         */
        this.columnResizeHover = false;
        /**
         * Indicates table row density style
         */
        this.compact = false;
        /**
         * Indicates that object table specific styles should be applied
         */
        this.objectTable = false;
    }
    /******************************* Lifecycle Hooks *******************************/
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, en.tableResources);
    }
    componentDidLoad() {
        if (this.resizableColumns) {
            this.prepareResizableColumns();
        }
        this.prepareSelectableRows();
        index.readTask(() => {
            this.checkScroll();
        });
        if (!this.resizeObserver && window.ResizeObserver) {
            this.resizeObserver = new ResizeObserver(() => {
                index.readTask(() => {
                    this.checkScroll();
                });
            });
        }
        if (this.resizeObserver) {
            this.resizeObserver.observe(this.tableContainer);
            this.resizeObserver.observe(this.slottedTable);
        }
        this.slotObserver.observe(this.slottedTable, {
            subtree: true,
            childList: true
        });
    }
    checkScroll() {
        const tableContainerElement = this.tableContainer;
        const isVerticalScroll = tableContainerElement.scrollHeight > tableContainerElement.clientHeight;
        const isHorizontalScroll = tableContainerElement.scrollWidth > tableContainerElement.clientWidth;
        this.isScroll = isVerticalScroll || isHorizontalScroll;
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.unobserve(this.tableContainer);
            this.resizeObserver.unobserve(this.slottedTable);
        }
        if (this.resizableColumns) {
            document.getElementById(`${this.tableId}-resizable-styles`).remove();
        }
    }
    /******************************* Event Listeners *******************************/
    onInternalAllRowSelectChange(event) {
        event.stopPropagation();
        this.handleSelectAllRows(event.detail);
    }
    onInternalRowSelectChange(event) {
        event.stopPropagation();
        const rowCheckbox = event.target;
        rowCheckbox.selected = event.detail;
        this.handleRowSelection(rowCheckbox);
    }
    onMouseMove(event) {
        if (this.resizableColumns) {
            this.updateResizeState(event);
        }
    }
    onMouseDown(event) {
        if (this.resizableColumns) {
            this.maybeStartResizing(event);
        }
    }
    onMouseUp() {
        if (this.resizableColumns) {
            this.stopResizing();
        }
    }
    /******************************* Element Getters *******************************/
    // Add new query selectors here with meaningful names
    get tableContainer() {
        return this.root.shadowRoot.querySelector('.gux-table-container');
    }
    get slottedTable() {
        return this.root.querySelector('table[slot="data"]');
    }
    get tableRows() {
        return Array.from(this.slottedTable.querySelectorAll('tbody tr'));
    }
    get tableColumns() {
        return Array.from(this.slottedTable.querySelectorAll('thead th'));
    }
    get rowCheckboxes() {
        return Array.from(this.slottedTable.querySelectorAll('tbody tr td gux-row-select'));
    }
    get selectAllCheckbox() {
        return this.slottedTable.querySelector('thead tr th gux-all-row-select');
    }
    /******************************* Row Selection *******************************/
    /**
     * Returns the selected rows Ids.
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async getSelected() {
        return this.getSelectedInternal();
    }
    // Internal synchronous method for getting currently selected rows
    // The public method is forced to be async by Stencil's lazy-loading.
    getSelectedInternal() {
        const rowCheckboxes = Array.from(this.rowCheckboxes);
        const selectedRowIds = rowCheckboxes
            .filter(box => box.selected)
            .map(box => box.closest('tr').getAttribute('data-row-id'));
        return { selectedRowIds };
    }
    // Set up initial selectable row states
    prepareSelectableRows() {
        const rowCheckboxes = this.rowCheckboxes;
        rowCheckboxes.forEach(rowCheckbox => {
            this.updateRowSelection(rowCheckbox);
        });
        this.updateSelectAllBoxState();
    }
    // Update the checked/indeterminate state of the select all checkbox
    updateSelectAllBoxState() {
        const selectAllCheckbox = this.selectAllCheckbox;
        if (selectAllCheckbox) {
            const rowCheckboxes = this.rowCheckboxes;
            const filterDisabled = rowCheckboxes.filter(rowBox => !rowBox.disabled);
            const selectedRows = filterDisabled.filter(box => box.selected);
            const hasRows = Boolean(rowCheckboxes.length);
            const allSelected = selectedRows.length === filterDisabled.length;
            const noneSelected = selectedRows.length === 0;
            selectAllCheckbox.selected = hasRows && allSelected;
            void selectAllCheckbox.setIndeterminate(hasRows && !allSelected && !noneSelected);
        }
    }
    // Handle a change in state of the select all checkbox
    handleSelectAllRows(selected) {
        const rowCheckboxes = this.rowCheckboxes;
        rowCheckboxes.forEach(rowBox => {
            if (!rowBox.disabled) {
                rowBox.selected = selected;
                this.updateRowSelection(rowBox);
            }
        });
        this.emitSelectionEvent();
    }
    // Handle a change in state of an individual row selection checkbox
    handleRowSelection(rowCheckbox) {
        this.updateRowSelection(rowCheckbox);
        this.updateSelectAllBoxState();
        this.emitSelectionEvent();
    }
    emitSelectionEvent() {
        this.guxselectionchanged.emit(this.getSelectedInternal());
    }
    // Make sure a selected row is tagged/displayed correctly at the row level
    updateRowSelection(dataRowSelectbox) {
        const tableRow = dataRowSelectbox.closest('tr');
        if (dataRowSelectbox.selected) {
            tableRow.setAttribute('data-selected-row', '');
        }
        else {
            tableRow.removeAttribute('data-selected-row');
        }
    }
    /******************************* Resizable Columns *******************************/
    prepareResizableColumns() {
        const styleElement = document.createElement('style');
        styleElement.id = `${this.tableId}-resizable-styles`;
        document.querySelector('head').appendChild(styleElement);
        const columnWidths = this.calculateColumnWidths(this.tableColumns);
        columnWidths
            // Exclude the last column to allow it to fill the remaining space naturally
            .slice(0, -1)
            .forEach(c => (this.columnsWidths[c.name] = c.width));
        this.setResizableColumnsStyles();
    }
    updateResizeState(event) {
        if (this.columnResizeState) {
            const minimumWidth = 1;
            const columnName = this.columnResizeState.resizableColumn.dataset.columnName;
            const delta = event.pageX - this.columnResizeState.columnResizeMouseStartX;
            const initialWidth = this.columnResizeState.resizableColumnInitialWidth;
            const proposedWidth = initialWidth + delta;
            const columnWidth = Math.max(proposedWidth, minimumWidth);
            const columnWidths = this.calculateColumnWidths(this.tableColumns).map(c => {
                if (c.name === columnName) {
                    return Object.assign(Object.assign({}, c), { width: columnWidth });
                }
                return c;
            });
            this.columnsWidths[columnName] = columnWidths.find(c => c.name === columnName).width;
            this.setResizableColumnsStyles();
        }
        else {
            this.columnResizeHover = false;
            whenEventIsFrom.whenEventIsFrom('th', event, (th) => {
                const columnsLength = this.tableColumns.length;
                const isLastColumn = columnsLength - 1 === th.cellIndex;
                if (!isLastColumn && this.isInResizeZone(event, th)) {
                    this.columnResizeHover = true;
                }
            });
        }
    }
    maybeStartResizing(event) {
        whenEventIsFrom.whenEventIsFrom('th', event, th => {
            if (this.isInResizeZone(event, th)) {
                const resizableColumn = th;
                this.columnResizeState = {
                    resizableColumn,
                    columnResizeMouseStartX: event.pageX,
                    resizableColumnInitialWidth: resizableColumn.clientWidth
                };
            }
        });
    }
    stopResizing() {
        if (this.columnResizeState) {
            this.columnResizeState = null;
        }
    }
    isInResizeZone(event, header) {
        return (header.getBoundingClientRect().right - event.clientX <
            COL_RESIZE_HANDLE_WIDTH);
    }
    /** Calculates column width minus padding in pixels */
    calculateColumnWidths(columns) {
        return columns.map(c => ({
            name: c.dataset.columnName,
            width: c.clientWidth
        }));
    }
    setResizableColumnsStyles() {
        const styleElement = document.getElementById(`${this.tableId}-resizable-styles`);
        let columnsStyles = '';
        Object.keys(this.columnsWidths).forEach((column) => {
            columnsStyles += `[gs-table-id=${this.tableId}] th[data-column-name="${column}"]{
        width:${String(this.columnsWidths[column])}px;
        min-width:${String(this.columnsWidths[column])}px;
      }`;
        });
        styleElement.innerHTML = columnsStyles;
    }
    /******************************* Rendering *******************************/
    get isTableEmpty() {
        return !this.root.children[0] || this.tableRows.length < 1;
    }
    get tableContainerClasses() {
        return {
            'gux-table-container': true,
            'gux-column-resizing': Boolean(this.columnResizeState),
            'gux-column-resizing-hover': this.columnResizeHover
        };
    }
    render() {
        return (index.h(index.Host, { key: 'd95028e1211e2e6a68baebf93cf9691803d443e0', "gs-table-id": this.tableId, "gs-obj-table": this.objectTable, "gs-compact": this.compact }, index.h("div", { key: '4c371f688538e2e781bc783c0e51cc2da916232a', class: "gux-table" }, index.h("div", { key: '4d445606838ad4b2a380dbc8a25621d5f4a63827', tabindex: this.isScroll ? '0' : '-1', id: this.tableId, class: this.tableContainerClasses }, index.h("slot", { key: '3ea2b8ed6167bef2a62af983eb541a1009537bb4', name: "data" })), this.isTableEmpty && (index.h("div", { key: '2d0a9a01a71a2062313f232a1f8ff6b1f96dbe38', class: "gux-empty-table" }, this.emptyMessage || this.i18n('emptyMessage'))))));
    }
    get root() { return index.getElement(this); }
};
GuxTable.style = guxTableCss;

exports.gux_table = GuxTable;
