'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var getSlotTextContent = require('./get-slot-text-content-DZwcXMIm.js');
require('./get-closest-element-CfyZl7i7.js');

const clickToCopy = "Click to Copy";
const copySuccess = "Copied to Clipboard";
const copyFailure = "Copy failed. Please try again.";
var translationResources = {
	clickToCopy: clickToCopy,
	copySuccess: copySuccess,
	copyFailure: copyFailure
};

const guxCopyToClipboardCss = "button{all:unset}.gux-copy-to-clipboard-wrapper{display:inline-flex;align-items:center;max-inline-size:100%}.gux-copy-to-clipboard-wrapper .gux-copy-content{display:inherit;gap:var(--gse-ui-copyToClipboard-contentContainer-gap);align-items:inherit;max-inline-size:100%;cursor:pointer}.gux-copy-to-clipboard-wrapper .gux-copy-content ::slotted(*){padding:var(--gse-ui-copyToClipboard-label-padding);font-family:var(--gse-ui-copyToClipboard-label-text-fontFamily);font-size:var(--gse-ui-copyToClipboard-label-text-fontSize);font-weight:var(--gse-ui-copyToClipboard-label-text-fontWeight);line-height:var(--gse-ui-copyToClipboard-label-text-lineHeight);color:var(--gse-ui-copyToClipboard-label-foregroundColor);text-decoration:var(--gse-ui-copyToClipboard-label-text-textDecoration);border-radius:var(--gse-ui-copyToClipboard-label-borderRadius)}.gux-copy-to-clipboard-wrapper .gux-copy-content:hover ::slotted(*){background-color:var(--gse-ui-copyToClipboard-label-active-backgroundColor)}.gux-copy-to-clipboard-wrapper .gux-copy-content:hover gux-icon[icon-name=\"fa/copy-regular\"]{visibility:visible}.gux-copy-to-clipboard-wrapper .gux-copy-content gux-icon[icon-name=\"fa/copy-regular\"]{visibility:hidden;flex-shrink:0;padding:var(--gse-ui-copyToClipboard-iconContainer-padding);background-color:var(--gse-ui-copyToClipboard-label-active-backgroundColor);border-radius:var(--gse-ui-copyToClipboard-label-borderRadius)}.gux-copy-to-clipboard-wrapper:focus-visible{outline:none}.gux-copy-to-clipboard-wrapper:focus-visible ::slotted(*){background-color:var(--gse-ui-copyToClipboard-label-active-backgroundColor)}.gux-copy-to-clipboard-wrapper:focus-visible gux-icon[icon-name=\"fa/copy-regular\"]{visibility:visible}gux-tooltip.gux-show{display:inline-flex;align-items:center}gux-tooltip.gux-show .gux-tooltip-content{display:contents}gux-tooltip.gux-show .gux-tooltip-content>*{vertical-align:middle}gux-tooltip.gux-show gux-icon[icon-name=\"fa/circle-check-solid\"]{color:var(--gse-ui-copyToClipboard-tooltipIcon-success-foregroundColor)}gux-tooltip.gux-show gux-icon[icon-name=\"fa/circle-xmark-solid\"]{color:var(--gse-ui-copyToClipboard-tooltipIcon-error-foregroundColor)}";

const GuxCopyToClipboard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tooltipContent = 'clickToCopy';
    }
    onMouseleave() {
        this.resetTooltip();
    }
    onFocusout() {
        this.resetTooltip();
    }
    resetTooltip() {
        this.tooltipContent = 'clickToCopy';
    }
    async onCopyToClipboard() {
        const copyText = this.root.innerText;
        return navigator.clipboard
            .writeText(copyText)
            .then(() => {
            this.tooltipContent = 'copySuccess';
        })
            .catch(() => {
            this.tooltipContent = 'copyFailure';
        });
    }
    getIconName(tooltipContent) {
        switch (tooltipContent) {
            case 'copyFailure':
                return 'fa/circle-xmark-solid';
            case 'copySuccess':
                return 'fa/circle-check-solid';
        }
    }
    renderTooltipIcon() {
        const iconName = this.getIconName(this.tooltipContent);
        if (iconName) {
            return (index.h("gux-icon", { "icon-name": iconName, size: "small", decorative: true }));
        }
    }
    renderTooltip() {
        return (index.h("gux-tooltip", { placement: "bottom-end" }, index.h("div", { slot: "content", class: "gux-tooltip-content" }, this.renderTooltipIcon(), index.h("span", null, this.i18n(this.tooltipContent)))));
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (index.h("button", { key: '743c477dce108f8bc377e764794fa06f6331b60a', class: "gux-copy-to-clipboard-wrapper", onClick: this.onCopyToClipboard.bind(this), "aria-label": getSlotTextContent.getSlotTextContent(this.root, 'content') }, index.h("div", { key: '0d64efa090fa1204f90ae3fd91370889e02a7e48', class: "gux-copy-content" }, index.h("slot", { key: 'a67e11585ad450ff94b8fc037a342996211564e3', name: "content" }), index.h("gux-icon", { key: '8c0f272c28636ca675bc901dbaa5407302f0501d', "icon-name": "fa/copy-regular", size: "small", decorative: true })), this.renderTooltip()));
    }
    get root() { return index.getElement(this); }
};
GuxCopyToClipboard.style = guxCopyToClipboardCss;

exports.gux_copy_to_clipboard = GuxCopyToClipboard;
