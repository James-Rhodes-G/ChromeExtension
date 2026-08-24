import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';

const guxListItemCss = ":host{inline-size:100%;text-align:start;outline:none}:host([disabled]){pointer-events:none}:host([disabled=false]){pointer-events:auto}::slotted(gux-icon){inline-size:var(--gse-ui-menu-option-startIcon-height);block-size:var(--gse-ui-menu-option-startIcon-height);margin-inline-end:var(--gse-ui-menu-option-gap);vertical-align:middle}button{all:unset;box-sizing:border-box;inline-size:100%;min-block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);font-family:var(--gse-ui-menu-option-label-default-text-fontFamily);font-size:var(--gse-ui-menu-option-label-default-text-fontSize);font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);word-wrap:break-word;cursor:pointer;outline:none;outline-offset:calc(var(--gse-ui-menu-option-focus-border-width) * -1) !important;background-color:var(--gse-ui-menu-option-default-backgroundColor);border:none}button:focus-visible:not(:disabled){outline:var(--gse-ui-menu-option-focus-border-width) var(--gse-ui-menu-option-focus-border-style) var(--gse-ui-menu-option-focus-border-color);border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}button:hover:not(:disabled){background:var(--gse-ui-menu-option-hover-backgroundColor)}button:active:not(:disabled){font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight);background:var(--gse-ui-menu-option-selected-backgroundColor)}button:disabled{cursor:default;opacity:var(--gse-ui-menu-option-disabled-opacity)}";

const GuxListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
    }
    render() {
        return (h(Host, { key: '58b4b87f804d304bc00e519f35f31476bcd5fd4d', role: "listitem" }, h("button", { key: '22a7f84a96bd64ad8005075625273a8879d6ee29', type: "button", tabIndex: -1, disabled: this.disabled, "data-testid": "list-item-button" }, h("slot", { key: '774aecf35cddf804daab45b2ccd2fec333670307' }))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxListItem.style = guxListItemCss;

export { GuxListItem as gux_list_item };
