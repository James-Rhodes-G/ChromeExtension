'use strict';

var index = require('./index-BLhHoh_r.js');
var getClosestElement = require('./get-closest-element-CfyZl7i7.js');
var getSlotTextContent = require('./get-slot-text-content-DZwcXMIm.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');

const guxSegmentedControlItemCss = "button{all:unset}.gux-container{block-size:var(--gse-ui-segmentedControl-height);border-color:var(--gse-ui-segmentedControl-divider-color);border-style:var(--gse-ui-segmentedControl-divider-style);border-width:var(--gse-ui-segmentedControl-divider-width);border-inline-end:none;border-radius:var(--gse-ui-segmentedControl-button-middle-borderRadius)}.gux-container.gux-start{border-inline-start-color:var(--gse-ui-segmentedControl-divider-color);border-radius:var(--gse-ui-segmentedControl-button-start-borderRadius)}.gux-container.gux-start .gux-segmented-control-item{border-radius:3px 0 0 3px}.gux-container.gux-end{border-style:var(--gse-ui-segmentedControl-divider-style);border-width:var(--gse-ui-segmentedControl-divider-width);border-inline-end-color:var(--gse-ui-segmentedControl-divider-color);border-radius:var(--gse-ui-segmentedControl-button-end-borderRadius)}.gux-container.gux-end .gux-segmented-control-item{border-radius:0 3px 3px 0}.gux-container.gux-start.gux-end{border-radius:var(--gse-ui-segmentedControl-borderRadius)}.gux-container.gux-parent-disabled{pointer-events:none;user-select:none;border-color:color-mix(in srgb, var(--gse-ui-segmentedControl-divider-color) 50%, rgba(0, 0, 0, 0))}.gux-container .gux-segmented-control-item{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-segmentedControl-button-gap);place-content:stretch flex-start;align-items:center;block-size:100%;padding:var(--gse-ui-segmentedControl-button-padding);line-height:0;color:var(--gse-ui-segmentedControl-button-default-foregroundColor);cursor:pointer;background-color:var(--gse-ui-segmentedControl-button-default-backgroundColor)}.gux-container .gux-segmented-control-item.gux-icon-only{padding:var(--gse-ui-segmentedControl-iconOnly-padding)}.gux-container .gux-segmented-control-item.gux-icon-only .gux-text.gux-icon-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}.gux-container .gux-segmented-control-item:hover{color:var(--gse-ui-segmentedControl-button-hover-foregroundColor);background-color:var(--gse-ui-segmentedControl-button-hover-backgroundColor)}.gux-container .gux-segmented-control-item[disabled]{color:var(--gse-ui-segmentedControl-button-disabled-foregroundColor);pointer-events:none;cursor:default;background-color:var(--gse-ui-segmentedControl-button-disabled-backgroundColor);opacity:var(--gse-ui-segmentedControl-button-disabled-opacity)}.gux-container .gux-segmented-control-item.gux-selected{color:var(--gse-ui-segmentedControl-button-active-foregroundColor);background-color:var(--gse-ui-segmentedControl-button-active-backgroundColor)}.gux-container .gux-segmented-control-item:focus-visible{position:relative;z-index:var(--gse-semantic-zIndex-showFocus);outline-offset:var(--gse-ui-segmentedControl-focus-offset);outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-container .gux-segmented-control-item .gux-icon slot[name=icon]::slotted(gux-icon){inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size)}";

const GuxSegmentedControlItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selected = false;
        this.disabled = false;
        this.iconOnly = false;
    }
    onClick(e) {
        if (this.disabled || this.hasDisabledParent()) {
            e.stopPropagation();
        }
    }
    isInStartPosition() {
        const parentSegmentControl = getClosestElement.getClosestElement('gux-segmented-control-beta', this.root);
        const children = Array.from(parentSegmentControl.children);
        const index = children.findIndex(i => i === this.root);
        return index === 0;
    }
    isInEndPosition() {
        const parentSegmentControl = getClosestElement.getClosestElement('gux-segmented-control-beta', this.root);
        const children = Array.from(parentSegmentControl.children);
        const index = children.findIndex(i => i === this.root);
        return index === children.length - 1;
    }
    hasDisabledParent() {
        const parentSegmentControl = getClosestElement.getClosestElement('gux-segmented-control-beta', this.root);
        return parentSegmentControl.disabled;
    }
    renderTooltip() {
        if (this.iconOnly) {
            return (index.h("gux-tooltip", null, index.h("div", { slot: "content" }, getSlotTextContent.getSlotTextContent(this.root, 'text'))));
        }
    }
    renderIconSlot() {
        if (hasSlot.hasSlot(this.root, 'icon')) {
            return (index.h("div", { class: {
                    'gux-icon': true,
                    'gux-icon-only': this.iconOnly
                } }, index.h("slot", { name: "icon" })));
        }
    }
    render() {
        return (index.h("div", { key: '793138dadd46ea3397776690e101cdcac0bbd382', class: {
                'gux-container': true,
                'gux-parent-disabled': this.hasDisabledParent(),
                'gux-start': this.isInStartPosition(),
                'gux-end': this.isInEndPosition()
            } }, index.h("button", { key: '42e5a00697a2c0deb577e4ba6fee1923371a26ec', class: {
                'gux-segmented-control-item': true,
                'gux-icon-only': this.iconOnly,
                'gux-selected': this.selected
            }, type: "button", "aria-current": this.selected ? 'true' : 'false', disabled: this.disabled || this.hasDisabledParent() }, this.renderIconSlot(), index.h("div", { key: '21fbcc98545dcd37f2bc115493d8dd38b30abfa0', class: {
                'gux-text': true,
                'gux-icon-only': this.iconOnly
            } }, index.h("slot", { key: 'e467fb435d4f2c777c55fc6873394eb499f02ab8', name: "text" }))), this.renderTooltip()));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxSegmentedControlItem.style = guxSegmentedControlItemCss;

exports.gux_segmented_control_item = GuxSegmentedControlItem;
