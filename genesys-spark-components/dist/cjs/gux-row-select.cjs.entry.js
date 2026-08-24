'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var en = require('./en-BCiQgP2I.js');
require('./get-closest-element-CfyZl7i7.js');

const guxRowSelectCss = ":host{display:flex;flex-direction:row;justify-content:center}input.gux-safari-bug-workaround-1,input.gux-safari-bug-workaround-2{animation:repaint 1ms}@keyframes repaint{from{inline-size:99.999%}to{inline-size:100%}}";

const GuxRowSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalrowselectchange = index.createEvent(this, "internalrowselectchange", 7);
        this.id = randomHtmlId.randomHTMLId('gux-row-select');
        this.selected = false;
    }
    onCheck(event) {
        event.stopPropagation();
        this.selected = this.inputElement.checked;
        this.internalrowselectchange.emit(this.inputElement.checked);
    }
    async componentWillLoad() {
        this.i18n = await index$1.buildI18nForComponent(this.root, en.tableResources, 'gux-table');
    }
    render() {
        return (index.h("gux-form-field-checkbox", { key: 'df3c9005eaa984a62ccfccf33cc34be2b142b9a1', "label-position": "screenreader" }, index.h("input", { key: 'e6430089bdfc4c714e6b6a05c2ef65f6a8158c5b', ref: el => (this.inputElement = el), class: this.selected
                ? 'gux-safari-bug-workaround-1'
                : 'gux-safari-bug-workaround-2', slot: "input", id: this.id, type: "checkbox", checked: this.selected, disabled: this.disabled }), index.h("label", { key: '7ad81838390999f6497d45055e6b950424ef6f05', slot: "label", htmlFor: this.id }, "\u200B", index.h("span", { key: 'f1d988bf59c03e4dd128ec99adbb0a72411b7dc4' }, this.i18n('selectTableRow')))));
    }
    get root() { return index.getElement(this); }
};
GuxRowSelect.style = guxRowSelectCss;

exports.gux_row_select = GuxRowSelect;
