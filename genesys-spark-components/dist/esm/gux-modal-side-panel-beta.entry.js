import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { r as randomHTMLId } from './random-html-id-D9jKBqIb.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxModalSidePanelCss = "dialog{inset-inline-start:auto;block-size:100%;min-block-size:100%;padding:0;margin:unset;border:none;transform:translateX(100%);transition:transform 0.2s ease-in-out}dialog.gux-open{transform:translateX(0%)}dialog::backdrop{background:var(--gse-ui-sidePanel-shroudColor);opacity:var(--gse-ui-sidePanel-shroud-opacity)}slot[name=description]::slotted(*){margin:0;font-family:var(--gse-ui-sidePanel-description-text-fontFamily) !important;font-size:var(--gse-ui-sidePanel-description-text-fontSize) !important;font-weight:var(--gse-ui-sidePanel-description-text-fontWeight) !important;line-height:var(--gse-ui-sidePanel-description-text-lineHeight) !important;color:var(--gse-ui-sidePanel-descriptionColor) !important}";

const GuxModalSidePanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.modalSidePanelDismiss = createEvent(this, "modalSidePanelDismiss", 7);
        this.open = false;
        this.size = 'medium';
        this.dialogElement = null;
    }
    syncOpenState() {
        if (this.open) {
            this.dialogElement.showModal();
        }
        else {
            this.dialogElement.close();
            this.modalSidePanelDismiss.emit();
        }
    }
    sidepaneldismissHandler() {
        this.open = false;
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                this.open = false;
                return;
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async showModal() {
        this.open = true;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async close() {
        this.open = false;
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.size });
    }
    componentDidLoad() {
        if (this.open) {
            this.dialogElement.showModal();
        }
    }
    render() {
        const titleID = randomHTMLId();
        return (h("dialog", { key: 'a0762489e7f0b45cbc00eaef77141f174cf89860', ref: el => (this.dialogElement = el), "aria-labelledby": titleID, class: { 'gux-open': this.open } }, h("gux-side-panel-beta", { key: 'e07a6eab666d7fa67bf932a42589edb7cc51541f', size: this.size }, h("div", { key: '5b9b231d4cb29f3707f8c77fd4e4f465ab3b3b53', slot: "heading", id: titleID }, h("slot", { key: '9d312a6c106e5c3a276b77350b30f83377b5299d', name: "heading" })), hasSlot(this.root, 'description') && (h("div", { key: 'c987c918bffd3a8fb8671d9cec836cc580fcc5f2', slot: "description" }, h("slot", { key: 'ac61b86567c6e9387cafa128b1fe6b36a9dfd40f', name: "description" }))), h("div", { key: 'bd9907df3b52f4214992970b47d2aa81f8b80da3', slot: "content" }, h("slot", { key: 'cd3e07787a0527d2f11b9cd8f2a8cc553e7f22a7', name: "content" })), h("div", { key: 'b9ad7f08ead8a67a61f29d826fc51df710ed68c7', slot: "footer" }, h("slot", { key: '8b237d105399c02ace67b9eebdf185db2f1c8f7f', name: "footer" })))));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "open": ["syncOpenState"]
    }; }
};
GuxModalSidePanel.style = guxModalSidePanelCss;

export { GuxModalSidePanel as gux_modal_side_panel_beta };
