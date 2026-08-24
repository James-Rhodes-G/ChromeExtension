import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import './get-closest-element-Cd4R0amv.js';

const clearSelection = "Clear {numberSelected} selected items";
var translationResources = {
	clearSelection: clearSelection
};

const guxDropdownMultiTagCss = ":host{display:inline-block}.gux-tag{display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:center;block-size:var(--gse-ui-tag-small-height);padding:var(--gse-ui-tag-removable-padding);font-family:var(--gse-ui-tag-textLarge-fontFamily);font-size:var(--gse-ui-tag-textLarge-fontSize);font-weight:var(--gse-ui-tag-textLarge-fontWeight);line-height:var(--gse-ui-tag-textLarge-lineHeight);color:var(--gse-ui-tag-accent1-bold-foregroundColor);background-color:var(--gse-ui-tag-accent1-bold-backgroundColor);border-radius:var(--gse-ui-tag-borderRadius)}.gux-tag .gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}.gux-tag .gux-tag-remove-button{all:unset;display:flex;place-content:center center;align-items:center;margin-inline-start:var(--gse-ui-tag-removable-gap)}.gux-tag .gux-tag-remove-button:not(:disabled):hover{cursor:pointer}.gux-tag .gux-tag-remove-button:focus-within .gux-tag-remove-icon{outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus)}.gux-tag.gux-disabled{opacity:var(--gse-ui-tag-disabled-opacity)}";

const GuxDropdownMultiTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internalclearselected = createEvent(this, "internalclearselected", 7);
        /**
         * Tag is disabled.
         */
        this.disabled = false;
        this.numberSelected = 0;
        this.label = '';
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Backspace':
            case 'Delete':
                this.removeTag(event);
        }
    }
    removeTag(event) {
        event.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.internalclearselected.emit();
    }
    renderRemoveButton() {
        return (h("button", { class: "gux-tag-remove-button", onClick: this.removeTag.bind(this), type: "button", disabled: this.disabled }, h("gux-icon", { class: "gux-tag-remove-icon", size: "small", "icon-name": "fa/xmark-large-regular", "screenreader-text": this.i18n('clearSelection', {
                numberSelected: this.numberSelected.toString()
            }) })));
    }
    async componentWillRender() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("div", { key: '736f46e03112b67563ab34cff27d60a81b74d06f', class: {
                'gux-tag': true,
                'gux-disabled': this.disabled
            }, "aria-disabled": this.disabled.toString() }, this.numberSelected.toString(), this.renderRemoveButton()));
    }
    get root() { return getElement(this); }
};
GuxDropdownMultiTag.style = guxDropdownMultiTagCss;

export { GuxDropdownMultiTag as gux_dropdown_multi_tag };
