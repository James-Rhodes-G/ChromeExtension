import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
import { getSlotTextContent } from "../../../utils/dom/get-slot-text-content";
/**
 * @slot content - Slot for content
 */
export class GuxCopyToClipboard {
    constructor() {
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
            return (h("gux-icon", { "icon-name": iconName, size: "small", decorative: true }));
        }
    }
    renderTooltip() {
        return (h("gux-tooltip", { placement: "bottom-end" }, h("div", { slot: "content", class: "gux-tooltip-content" }, this.renderTooltipIcon(), h("span", null, this.i18n(this.tooltipContent)))));
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("button", { key: '743c477dce108f8bc377e764794fa06f6331b60a', class: "gux-copy-to-clipboard-wrapper", onClick: this.onCopyToClipboard.bind(this), "aria-label": getSlotTextContent(this.root, 'content') }, h("div", { key: '0d64efa090fa1204f90ae3fd91370889e02a7e48', class: "gux-copy-content" }, h("slot", { key: 'a67e11585ad450ff94b8fc037a342996211564e3', name: "content" }), h("gux-icon", { key: '8c0f272c28636ca675bc901dbaa5407302f0501d', "icon-name": "fa/copy-regular", size: "small", decorative: true })), this.renderTooltip()));
    }
    static get is() { return "gux-copy-to-clipboard"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-copy-to-clipboard.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-copy-to-clipboard.css"]
        };
    }
    static get states() {
        return {
            "tooltipContent": {}
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "mouseleave",
                "method": "onMouseleave",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
