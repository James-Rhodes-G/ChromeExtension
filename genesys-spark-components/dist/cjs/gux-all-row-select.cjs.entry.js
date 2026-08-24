'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var en = require('./en-BCiQgP2I.js');
require('./get-closest-element-CfyZl7i7.js');

const guxAllRowSelectCss = ":host{display:flex;flex-direction:row;justify-content:center}";

const GuxAllRowSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalallrowselectchange = index.createEvent(this, "internalallrowselectchange", 7);
        this.id = randomHtmlId.randomHTMLId('gux-all-row-select');
        this.selected = false;
    }
    onCheck(event) {
        event.stopPropagation();
        this.selected = this.inputElement.checked;
        this.internalallrowselectchange.emit(this.selected);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async setIndeterminate(indeterminate = true) {
        this.inputElement.indeterminate = indeterminate;
    }
    async componentWillLoad() {
        this.i18n = await index$1.buildI18nForComponent(this.root, en.tableResources, 'gux-table');
    }
    render() {
        return (index.h("gux-form-field-checkbox", { key: '561b559830dcaa4f8dcf5b250eda5a87e58b0cdd', "label-position": "screenreader" }, index.h("input", { key: '01a39509715d4156f0bd074bf35ffd6abaa3895e', ref: el => (this.inputElement = el), slot: "input", id: this.id, type: "checkbox", checked: this.selected, disabled: this.disabled }), index.h("label", { key: '596c0d1a55275d760e91209797483239c616545b', slot: "label", htmlFor: this.id }, "\u200B", index.h("span", { key: '9a153c08f9a997d23735beb2a2bd885b7760f623' }, this.i18n('selectAllTableRows')))));
    }
    get root() { return index.getElement(this); }
};
GuxAllRowSelect.style = guxAllRowSelectCss;

exports.gux_all_row_select = GuxAllRowSelect;
