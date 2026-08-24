import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { g as getClosestElement } from './get-closest-element-Cd4R0amv.js';
import { r as randomHTMLId } from './random-html-id-D9jKBqIb.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';

const guxOptionIconCss = ":host{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-menu-option-gap);place-content:stretch center;align-items:center;block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);font-family:var(--gse-ui-menu-option-label-default-text-fontFamily);font-size:var(--gse-ui-menu-option-label-default-text-fontSize);font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);word-wrap:break-word;cursor:pointer}:host .gux-option-wrapper{inline-size:100%}:host .gux-slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.gux-disabled){pointer-events:none;cursor:default;opacity:var(--gse-ui-menu-option-disabled-opacity)}:host(.gux-selected){font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight);background:var(--gse-ui-menu-option-selected-backgroundColor)}:host(:active:not(:disabled)){font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight)}:host(.gux-active){outline:var(--gse-ui-menu-option-focus-border-width) var(--gse-ui-menu-option-focus-border-style) var(--gse-ui-menu-option-focus-border-color);outline-offset:-2px;border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}:host(.gux-show-subtext){place-content:stretch flex-start;block-size:auto}:host(.gux-show-subtext) .gux-option-wrapper{display:flex;flex-direction:column}:host(.gux-show-subtext) slot[name=subtext]::slotted(*){font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);color:var(--gse-ui-menu-groupedMenu-subtext-foregroundColor)}:host(:hover:not(:disabled)){background:var(--gse-ui-menu-option-hover-backgroundColor)}:host(.gux-filtered){display:none}:host gux-icon{flex-shrink:0}:host .gux-option-wrapper{min-inline-size:0}";

const GuxOptionIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconPosition = 'start';
        this.active = false;
        this.selected = false;
        this.disabled = false;
        this.filtered = false;
        this.hovered = false;
        this.hasSubtext = false;
    }
    onmouseenter() {
        this.hovered = true;
    }
    onMouseleave() {
        this.hovered = false;
    }
    handleActive(active) {
        var _a, _b;
        if (active) {
            void ((_a = this.truncateElement) === null || _a === void 0 ? void 0 : _a.setShowTooltip());
        }
        else {
            void ((_b = this.truncateElement) === null || _b === void 0 ? void 0 : _b.setHideTooltip());
        }
    }
    componentWillLoad() {
        this.root.id = this.root.id || randomHTMLId('gux-option-icon');
        this.onSubtextChange();
    }
    onSubtextChange() {
        this.hasSubtext = hasSlot(this.root, 'subtext');
    }
    getAriaSelected() {
        if (this.disabled) {
            return false;
        }
        return this.selected ? 'true' : 'false';
    }
    hasDisabledParent() {
        const parentListbox = getClosestElement('gux-listbox', this.root);
        return parentListbox === null || parentListbox === void 0 ? void 0 : parentListbox.disabled;
    }
    renderMaybeIcon(position) {
        if (position !== this.iconPosition) {
            return null;
        }
        let iconStyle = null;
        // If the icon color is set and we don't have a background highlight that
        // might cause contrast problems, set the color style.
        if (this.iconColor !== null && !(this.hovered || this.active)) {
            iconStyle = { color: this.iconColor };
        }
        return (h("gux-icon", { decorative: this.iconSrText == null, "screenreader-text": this.iconSrText, "icon-name": this.iconName, style: iconStyle, size: "small" }));
    }
    render() {
        return (h(Host, { key: '7f26c292345951dff79122bac08f2b3629382701', role: "option", class: {
                'gux-active': this.active,
                'gux-disabled': this.disabled || this.hasDisabledParent(),
                'gux-filtered': this.filtered,
                'gux-hovered': this.hovered,
                'gux-selected': this.selected,
                'gux-show-subtext': this.hasSubtext
            }, "aria-selected": this.getAriaSelected(), "aria-disabled": this.disabled.toString() }, this.renderMaybeIcon('start'), h("div", { key: '3c6f0d146fb3ac83f204ae35e4beabf2f310a988', class: "gux-option-wrapper" }, h("gux-truncate", { key: '384177cb96af49bc8adbae6c328b7e0e29c7b69a', "tooltip-placement": "right", ref: el => (this.truncateElement = el) }, h("slot", { key: '2479d98605eda40e572cb5381dd3791ab0c2742e' })), h("slot", { key: '3682267ba448c0ae3064497bc5d5806bdfc2e129', onSlotchange: () => this.onSubtextChange(), name: "subtext" })), this.renderMaybeIcon('end')));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "active": ["handleActive"]
    }; }
};
GuxOptionIcon.style = guxOptionIconCss;

export { GuxOptionIcon as gux_option_icon };
