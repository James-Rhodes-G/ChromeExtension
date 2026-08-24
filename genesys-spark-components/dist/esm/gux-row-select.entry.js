import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { r as randomHTMLId } from './random-html-id-D9jKBqIb.js';
import { t as tableResources } from './en-BIx814vt.js';
import './get-closest-element-Cd4R0amv.js';

const guxRowSelectCss = ":host{display:flex;flex-direction:row;justify-content:center}input.gux-safari-bug-workaround-1,input.gux-safari-bug-workaround-2{animation:repaint 1ms}@keyframes repaint{from{inline-size:99.999%}to{inline-size:100%}}";

const GuxRowSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internalrowselectchange = createEvent(this, "internalrowselectchange", 7);
        this.id = randomHTMLId('gux-row-select');
        this.selected = false;
    }
    onCheck(event) {
        event.stopPropagation();
        this.selected = this.inputElement.checked;
        this.internalrowselectchange.emit(this.inputElement.checked);
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, tableResources, 'gux-table');
    }
    render() {
        return (h("gux-form-field-checkbox", { key: 'df3c9005eaa984a62ccfccf33cc34be2b142b9a1', "label-position": "screenreader" }, h("input", { key: 'e6430089bdfc4c714e6b6a05c2ef65f6a8158c5b', ref: el => (this.inputElement = el), class: this.selected
                ? 'gux-safari-bug-workaround-1'
                : 'gux-safari-bug-workaround-2', slot: "input", id: this.id, type: "checkbox", checked: this.selected, disabled: this.disabled }), h("label", { key: '7ad81838390999f6497d45055e6b950424ef6f05', slot: "label", htmlFor: this.id }, "\u200B", h("span", { key: 'f1d988bf59c03e4dd128ec99adbb0a72411b7dc4' }, this.i18n('selectTableRow')))));
    }
    get root() { return getElement(this); }
};
GuxRowSelect.style = guxRowSelectCss;

export { GuxRowSelect as gux_row_select };
