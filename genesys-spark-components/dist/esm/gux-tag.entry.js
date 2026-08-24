import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './get-closest-element-Cd4R0amv.js';

const tag = "tag with label: {label}";
var tagResources = {
	tag: tag,
	"tag-disabled": "disabled tag with label: {label}",
	"remove-tag": "Remove tag with label: {label}"
};

const guxTagCss = ":host{display:inline-block;border-radius:var(--gse-ui-tag-borderRadius)}.gux-tag{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-tag-removable-gap);place-content:stretch flex-start;align-items:center;block-size:var(--gse-ui-tag-small-height);padding:var(--gse-ui-tag-padding);font-family:var(--gse-ui-tag-textSmall-fontFamily);font-size:var(--gse-ui-tag-textSmall-fontSize);font-weight:var(--gse-ui-tag-textSmall-fontWeight);line-height:var(--gse-ui-tag-textSmall-lineHeight);color:var(--gse-ui-tag-default-bold-foregroundColor);background-color:var(--gse-ui-tag-default-bold-backgroundColor);border-radius:var(--gse-ui-tag-borderRadius)}.gux-tag.gux-size-large{block-size:var(--gse-ui-tag-large-height);font-family:var(--gse-ui-tag-textLarge-fontFamily);font-size:var(--gse-ui-tag-textLarge-fontSize);font-weight:var(--gse-ui-tag-textLarge-fontWeight);line-height:var(--gse-ui-tag-textLarge-lineHeight)}.gux-tag.gux-size-large .gux-tag-remove-button:focus-within .gux-tag-remove-icon{outline-offset:10px}.gux-tag.gux-disabled{position:relative;user-select:none;opacity:var(--gse-ui-tag-disabled-opacity)}.gux-tag gux-tooltip-title{white-space:nowrap;cursor:default}.gux-tag gux-tooltip-title ::slotted(gux-icon){font-size:var(--gse-ui-tag-button-size)}.gux-tag .gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}.gux-tag .gux-tag-remove-button{all:unset;display:flex;place-content:center center;align-items:center}.gux-tag .gux-tag-remove-button:not(:disabled):hover{cursor:pointer}.gux-tag .gux-tag-remove-button .gux-tag-remove-icon{inline-size:var(--gse-ui-tag-button-size);block-size:var(--gse-ui-tag-button-size);margin-inline-end:-4px}.gux-tag .gux-tag-remove-button:focus-within .gux-tag-remove-icon{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-ui-color-focus);outline-offset:5px;border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}.gux-tag.gux-accent-default{color:var(--gse-ui-tag-default-bold-foregroundColor);background-color:var(--gse-ui-tag-default-bold-backgroundColor)}.gux-tag.gux-accent-default.gux-emphasis-subtle{color:var(--gse-ui-tag-default-subtle-foregroundColor);background-color:var(--gse-ui-tag-default-subtle-backgroundColor)}.gux-tag.gux-accent-1{color:var(--gse-ui-tag-accent1-bold-foregroundColor);background-color:var(--gse-ui-tag-accent1-bold-backgroundColor)}.gux-tag.gux-accent-1.gux-emphasis-subtle{color:var(--gse-ui-tag-accent1-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent1-subtle-backgroundColor)}.gux-tag.gux-accent-2{color:var(--gse-ui-tag-accent2-bold-foregroundColor);background-color:var(--gse-ui-tag-accent2-bold-backgroundColor)}.gux-tag.gux-accent-2.gux-emphasis-subtle{color:var(--gse-ui-tag-accent2-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent2-subtle-backgroundColor)}.gux-tag.gux-accent-3{color:var(--gse-ui-tag-accent3-bold-foregroundColor);background-color:var(--gse-ui-tag-accent3-bold-backgroundColor)}.gux-tag.gux-accent-3.gux-emphasis-subtle{color:var(--gse-ui-tag-accent3-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent3-subtle-backgroundColor)}.gux-tag.gux-accent-4{color:var(--gse-ui-tag-accent4-bold-foregroundColor);background-color:var(--gse-ui-tag-accent4-bold-backgroundColor)}.gux-tag.gux-accent-4.gux-emphasis-subtle{color:var(--gse-ui-tag-accent4-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent4-subtle-backgroundColor)}.gux-tag.gux-accent-5{color:var(--gse-ui-tag-accent5-bold-foregroundColor);background-color:var(--gse-ui-tag-accent5-bold-backgroundColor)}.gux-tag.gux-accent-5.gux-emphasis-subtle{color:var(--gse-ui-tag-accent5-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent5-subtle-backgroundColor)}.gux-tag.gux-accent-6{color:var(--gse-ui-tag-accent6-bold-foregroundColor);background-color:var(--gse-ui-tag-accent6-bold-backgroundColor)}.gux-tag.gux-accent-6.gux-emphasis-subtle{color:var(--gse-ui-tag-accent6-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent6-subtle-backgroundColor)}.gux-tag.gux-accent-7{color:var(--gse-ui-tag-accent7-bold-foregroundColor);background-color:var(--gse-ui-tag-accent7-bold-backgroundColor)}.gux-tag.gux-accent-7.gux-emphasis-subtle{color:var(--gse-ui-tag-accent7-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent7-subtle-backgroundColor)}.gux-tag.gux-accent-8{color:var(--gse-ui-tag-accent8-bold-foregroundColor);background-color:var(--gse-ui-tag-accent8-bold-backgroundColor)}.gux-tag.gux-accent-8.gux-emphasis-subtle{color:var(--gse-ui-tag-accent8-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent8-subtle-backgroundColor)}.gux-tag.gux-accent-9{color:var(--gse-ui-tag-accent9-bold-foregroundColor);background-color:var(--gse-ui-tag-accent9-bold-backgroundColor)}.gux-tag.gux-accent-9.gux-emphasis-subtle{color:var(--gse-ui-tag-accent9-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent9-subtle-backgroundColor)}.gux-tag.gux-accent-10{color:var(--gse-ui-tag-accent10-bold-foregroundColor);background-color:var(--gse-ui-tag-accent10-bold-backgroundColor)}.gux-tag.gux-accent-10.gux-emphasis-subtle{color:var(--gse-ui-tag-accent10-subtle-foregroundColor);background-color:var(--gse-ui-tag-accent10-subtle-backgroundColor)}.gux-tag.gux-accent-inherit{color:inherit;background-color:inherit}";

const GuxTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxdelete = createEvent(this, "guxdelete", 7);
        this.accent = 'default';
        this.disabled = false;
        this.removable = false;
        this.size = 'small';
        this.emphasis = 'bold';
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Backspace':
            case 'Delete':
                this.removeTag();
        }
    }
    removeTag() {
        if (this.disabled || !this.removable) {
            return;
        }
        this.guxdelete.emit();
    }
    onSlotChange(event) {
        const slotAssignedNodes = event.composedPath()[0].assignedNodes();
        this.label = slotAssignedNodes
            .map(nodeItem => nodeItem.textContent.trim())
            .join('');
    }
    renderTagTitle() {
        return (h("gux-tooltip-title", null, h("span", null, h("slot", { "aria-hidden": "true", onSlotchange: this.onSlotChange.bind(this) }))));
    }
    renderSrText() {
        return (h("div", { class: "gux-sr-only" }, this.disabled
            ? this.i18n('tag-disabled', { label: this.label })
            : this.i18n('tag', { label: this.label })));
    }
    renderRemoveButton() {
        if (this.removable) {
            return (h("button", { class: "gux-tag-remove-button", onClick: this.removeTag.bind(this), type: "button", disabled: this.disabled }, h("gux-icon", { class: "gux-tag-remove-icon", "icon-name": "fa/xmark-large-regular", decorative: true }), h("gux-screen-reader-beta", null, this.i18n('remove-tag', { label: this.label }))));
        }
    }
    componentWillLoad() {
        trackComponent(this.root, {
            variant: this.removable ? 'removable' : 'permenant'
        });
    }
    async componentWillRender() {
        this.i18n = await buildI18nForComponent(this.root, tagResources);
    }
    render() {
        return (h("div", { key: '1ce83ca8403a1dfea1923387c536468e50915071', class: {
                'gux-tag': true,
                [`gux-accent-${this.accent}`]: true,
                'gux-disabled': this.disabled,
                [`gux-size-${this.size}`]: true,
                [`gux-emphasis-${this.emphasis}`]: true
            }, "aria-disabled": this.disabled.toString() }, this.renderTagTitle(), this.renderSrText(), this.renderRemoveButton()));
    }
    get root() { return getElement(this); }
};
GuxTag.style = guxTagCss;

export { GuxTag as gux_tag };
