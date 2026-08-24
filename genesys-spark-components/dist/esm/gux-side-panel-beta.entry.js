import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';

const guxSidePanelCss = ":host{display:block;inline-size:fit-content;block-size:100%}:host([size=large]){max-inline-size:50%}.gux-side-panel{position:relative;display:flex;flex-direction:column;inline-size:calc(100vw - var(--gse-ui-sidePanel-shoud-minWidth));block-size:inherit;background-color:var(--gse-ui-sidePanel-backgroundColor);box-shadow:var(--gse-ui-sidePanel-boxShadow)}.gux-side-panel.gux-side-panel-small{max-inline-size:var(--gse-ui-sidePanel-widthSize-sm)}.gux-side-panel.gux-side-panel-medium{max-inline-size:var(--gse-ui-sidePanel-widthSize-md)}.gux-side-panel.gux-side-panel-large{max-inline-size:var(--gse-ui-sidePanel-widthSize-lg)}.gux-side-panel>header{position:relative;padding:var(--gse-ui-sidePanel-header-padding);border-block-end:var(--gse-ui-sidePanel-divider-width) var(--gse-ui-sidePanel-divider-style) var(--gse-ui-sidePanel-divider-color)}.gux-side-panel .gux-side-panel-description{margin:var(--gse-ui-sidePanel-description-padding) !important}.gux-side-panel .gux-side-panel-content{flex:1 1 100%;padding:var(--gse-ui-sidePanel-body-padding);overflow-y:auto;font-family:var(--gse-ui-sidePanel-description-text-fontFamily);font-size:var(--gse-ui-sidePanel-description-text-fontSize);font-weight:var(--gse-ui-sidePanel-description-text-fontWeight);line-height:var(--gse-ui-sidePanel-description-text-lineHeight);color:var(--gse-ui-sidePanel-descriptionColor)}.gux-side-panel>footer{flex:0 0 auto;padding:var(--gse-ui-sidePanel-footer-padding);border-block-start:var(--gse-ui-sidePanel-divider-width) var(--gse-ui-sidePanel-divider-style) var(--gse-ui-sidePanel-divider-color)}.gux-side-panel-description ::slotted(*){margin:0;font-family:var(--gse-ui-sidePanel-description-text-fontFamily) !important;font-size:var(--gse-ui-sidePanel-description-text-fontSize) !important;font-weight:var(--gse-ui-sidePanel-description-text-fontWeight) !important;line-height:var(--gse-ui-sidePanel-description-text-lineHeight) !important;color:var(--gse-ui-sidePanel-descriptionColor) !important}";

const GuxSidePanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sidePanelDismiss = createEvent(this, "sidePanelDismiss", 7);
        this.size = 'small';
    }
    onDismissHandler() {
        this.sidePanelDismiss.emit();
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.size });
    }
    renderDescription() {
        if (hasSlot(this.root, 'description')) {
            return (h("div", { class: "gux-side-panel-description" }, h("slot", { name: "description" })));
        }
        return null;
    }
    render() {
        return (h(Host, { key: 'b57d810edc0a2ee6898f700206ca58d764cd561a', role: "complementary" }, h("div", { key: '8b0203fb024e49d65d204fe3ba98f95466065ae5', class: {
                'gux-side-panel': true,
                [`gux-side-panel-${this.size}`]: true
            } }, h("header", { key: 'ac661f82543e6b7c1a04b5857caeddc44f2d9edf' }, h("slot", { key: '55fcd81910e08d3e69dfdee1cc3c88de09157a81', name: "heading" })), h("gux-dismiss-button", { key: 'e9e358c0990a6c762672ec8ed6dab0afd9947ce8', onClick: this.onDismissHandler.bind(this) }), this.renderDescription(), h("div", { key: 'dd200672f94c8d86240009af60d00b088239510e', class: "gux-side-panel-content" }, h("slot", { key: '73f9de5408b009562ac56278fdaa4335e1de165d', name: "content" })), h("footer", { key: 'd85f5c6f66ab8ddee68cfcd0998a09de03930cdd' }, h("slot", { key: '154b790214c721b0cf20a286fb1083619ebb2b5d', name: "footer" })))));
    }
    get root() { return getElement(this); }
};
GuxSidePanel.style = guxSidePanelCss;

export { GuxSidePanel as gux_side_panel_beta };
