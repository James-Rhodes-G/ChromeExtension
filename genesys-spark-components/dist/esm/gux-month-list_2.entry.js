import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { l as last, f as first, n as next, p as previous, c as focusMove } from './gux-list.service-BebXX5IS.js';
import { g as getClosestElement } from './get-closest-element-Cd4R0amv.js';

const guxMonthListCss = ":host{display:flex;flex-direction:row;flex-wrap:wrap;padding:var(--gse-ui-calendarMenu-monthBody-padding);background-color:var(--gse-ui-calendarMenu-backgroundColor);border-radius:var(--gse-ui-calendarMenu-single-body-borderRadius);box-shadow:var(--gse-ui-calendarMenu-boxShadow)}";

const validFocusableItems = ['gux-month-list-item'];
const GuxMonthList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                focusMove(this.root, validFocusableItems, -3);
                break;
            case 'ArrowDown':
                event.preventDefault();
                focusMove(this.root, validFocusableItems, 3);
                break;
            case 'ArrowLeft':
                event.preventDefault();
                previous(this.root, validFocusableItems);
                break;
            case 'ArrowRight':
                event.preventDefault();
                next(this.root, validFocusableItems);
                break;
            case 'Home':
                event.preventDefault();
                first(this.root, validFocusableItems);
                break;
            case 'End':
                event.preventDefault();
                last(this.root, validFocusableItems);
                break;
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusFirstItem() {
        first(this.root, validFocusableItems);
    }
    render() {
        return (h(Host, { key: 'b5df0b626c793ae5930ac65714aaaba6a90b1ce8', role: "list" }, h("slot", { key: '9dea65e2038a8f1dc325792ac82e2df1462d5acb' })));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxMonthList.style = guxMonthListCss;

const guxMonthListItemCss = ":host([disabled]){pointer-events:none}:host([disabled=false]){pointer-events:auto}.gux-container{box-sizing:border-box;inline-size:var(--gse-ui-calendarMenu-month-monthCell-width);block-size:var(--gse-ui-calendarMenu-month-monthCell-height);padding-block:10px 9px;padding-inline:5px}.gux-container button{all:unset;box-sizing:border-box;inline-size:100%;block-size:100%;text-align:center;word-wrap:break-word;cursor:pointer;outline:none;border:none;border-radius:var(--gse-ui-calendarMenu-month-borderRadius)}.gux-container button.gux-selected{color:var(--gse-ui-calendarMenu-month-selected-foregroundColor);background:var(--gse-ui-calendarMenu-month-selected-backgroundColor)}.gux-container button:focus-visible:not(:disabled){outline:var(--gse-ui-monthPicker-calendarStates-focus-border-width) var(--gse-ui-monthPicker-calendarStates-focus-border-style) var(--gse-ui-monthPicker-calendarStates-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:var(--gse-ui-calendarMenu-month-focusBorderRadius)}.gux-container button:hover:not(:disabled){color:var(--gse-ui-calendarMenu-month-default-foregroundColor);background:var(--gse-ui-calendarMenu-month-hover-backgroundColor)}.gux-container button:disabled{cursor:default;opacity:var(--gse-ui-calendarMenu-disabled-opacity)}";

const GuxMonthListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.selected = false;
    }
    onMouseup() {
        this.focusParentList();
    }
    onMouseover() {
        this.focusParentList();
    }
    focusParentList() {
        const parentList = getClosestElement('gux-month-list', this.root);
        if (parentList &&
            parentList.shadowRoot.activeElement === null &&
            !this.selected) {
            this.root.blur();
            parentList.focus();
        }
    }
    render() {
        return (h(Host, { key: '4efcd330bf11de04d4a3d98a53cbe7a1af5add36', role: "listitem", value: this.value }, h("div", { key: '73e87e967f4093114cc6457b1a2226b7eed49c42', class: "gux-container" }, h("button", { key: '56f774cb1d98c724bafb4d01ce095536d8f550d3', class: { 'gux-selected': this.selected }, type: "button", tabIndex: -1, disabled: this.disabled }, h("slot", { key: 'c6c605d5f0b08f3cf3ff25cfc116d05c86b781e6' })))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxMonthListItem.style = guxMonthListItemCss;

export { GuxMonthList as gux_month_list, GuxMonthListItem as gux_month_list_item };
