import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { r as randomHTMLId } from './random-html-id-D9jKBqIb.js';
import { t as tableResources } from './en-BIx814vt.js';
import './get-closest-element-Cd4R0amv.js';

const guxAllRowSelectCss = ":host{display:flex;flex-direction:row;justify-content:center}";

const GuxAllRowSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internalallrowselectchange = createEvent(this, "internalallrowselectchange", 7);
        this.id = randomHTMLId('gux-all-row-select');
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
        this.i18n = await buildI18nForComponent(this.root, tableResources, 'gux-table');
    }
    render() {
        return (h("gux-form-field-checkbox", { key: '561b559830dcaa4f8dcf5b250eda5a87e58b0cdd', "label-position": "screenreader" }, h("input", { key: '01a39509715d4156f0bd074bf35ffd6abaa3895e', ref: el => (this.inputElement = el), slot: "input", id: this.id, type: "checkbox", checked: this.selected, disabled: this.disabled }), h("label", { key: '596c0d1a55275d760e91209797483239c616545b', slot: "label", htmlFor: this.id }, "\u200B", h("span", { key: '9a153c08f9a997d23735beb2a2bd885b7760f623' }, this.i18n('selectAllTableRows')))));
    }
    get root() { return getElement(this); }
};
GuxAllRowSelect.style = guxAllRowSelectCss;

export { GuxAllRowSelect as gux_all_row_select };
