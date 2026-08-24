import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { r as randomHTMLId } from './random-html-id-D9jKBqIb.js';
import { a as logError } from './log-error-DxtJDeL9.js';

const guxAccordionSectionCss = ":host(:first-child) section{border-block-start:var(--gse-ui-accordion-wrapper-dividerBorder-width) var(--gse-ui-accordion-wrapper-dividerBorder-style) var(--gse-ui-accordion-wrapper-dividerBorder-color)}section.gux-disabled{cursor:default}section.gux-disabled>*{pointer-events:none;opacity:0.5}section{border-block-end:var(--gse-ui-accordion-wrapper-dividerBorder-width) var(--gse-ui-accordion-wrapper-dividerBorder-style) var(--gse-ui-accordion-wrapper-dividerBorder-color)}section .gux-header{all:unset;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;place-content:center flex-start;align-items:center;inline-size:100%;padding:var(--gse-ui-accordion-header-padding);margin:0;cursor:pointer}section .gux-header .gux-header-text{flex:1 1 auto;align-self:auto;font-weight:var(--gse-ui-accordion-header-label-defaultText-fontWeight);color:var(--gse-ui-accordion-header-default-foreground-labelColor);text-align:start}section .gux-header.gux-reverse-headings .gux-header-text{display:flex;flex-direction:column-reverse}section .gux-header ::slotted([slot=header]){padding:0;margin:0;font-family:var(--gse-ui-accordion-header-label-defaultText-fontFamily) !important;font-size:var(--gse-ui-accordion-header-label-defaultText-fontSize) !important;font-weight:var(--gse-ui-accordion-header-label-defaultText-fontWeight) !important;line-height:var(--gse-ui-accordion-header-label-defaultText-lineHeight) !important;color:var(--gse-ui-accordion-header-default-foreground-labelColor)}section .gux-header ::slotted([slot=subheader]){padding:0;margin-block:var(--gse-core-spacing-5xs) 0;margin-inline:0;font-family:var(--gse-ui-accordion-contentItem-defaultText-fontFamily) !important;font-size:var(--gse-ui-accordion-contentItem-defaultText-fontSize) !important;font-weight:var(--gse-ui-accordion-contentItem-defaultText-fontWeight) !important;line-height:var(--gse-ui-accordion-contentItem-defaultText-lineHeight) !important;color:var(--gse-ui-accordion-contentItem-foregroundColor)}section .gux-header ::slotted([slot=subheader]) .gux-reverse-headings{margin-block:0 var(--gse-core-spacing-5xs);margin-inline:0}section .gux-header ::slotted([slot=icon]){flex:0 0 auto;align-self:flex-start;inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size);margin-inline-end:var(--gse-ui-accordion-header-gap);color:var(--gse-ui-accordion-header-default-foreground-chevronIcon-closed)}section .gux-header ::slotted([slot=icon]) .gux-reverse-headings{align-self:flex-end}section .gux-header .gux-header-icon{flex:0 1 auto;align-items:center;align-self:auto;margin-inline-start:var(--gse-ui-accordion-header-gap);line-height:0;color:var(--gse-ui-accordion-header-default-foreground-chevronIcon-closed);transform-origin:center;transition:transform 0.5s ease}section .gux-header .gux-header-icon.gux-arrow-position-start{order:-1;margin-inline-end:var(--gse-ui-accordion-header-gap)}section .gux-header .gux-header-icon.gux-expanded{color:var(--gse-ui-accordion-header-default-foreground-chevronIcon-open);transform:rotate(-180deg)}section .gux-header:focus-visible{outline:var(--gse-ui-accordion-focusBorder-width) var(--gse-ui-accordion-focusBorder-style) var(--gse-ui-accordion-focusBorder-color);outline-offset:var(--gse-ui-accordion-focus-offset-gap);border-radius:var(--gse-ui-accordion-menuItem-focus-borderRadius)}section .gux-header:hover .gux-header-icon{color:var(--gse-ui-accordion-header-default-foreground-chevronIcon-hover)}section .gux-content{box-sizing:border-box;display:none}section .gux-content.gux-expanded{display:block}section .gux-content.gux-text-content-layout{padding:var(--gse-ui-accordion-contentItem-padding)}section .gux-content ::slotted([slot=content]){margin:0}";

const GuxAccordionSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxopened = createEvent(this, "guxopened", 7);
        this.guxclosed = createEvent(this, "guxclosed", 7);
        this.sectionId = randomHTMLId('gux-accordion-section');
        this.headerId = randomHTMLId('gux-accordion-header');
        /**
         * Position of the arrow chevron icon. Position can be 'start' or 'end'.
         */
        this.arrowPosition = 'end';
        /**
         * The content layout used in the accordion section. 'text' layout provides default padding, 'custom' removes default padding.
         */
        this.contentLayout = 'text';
        this.open = false;
        this.disabled = false;
        this.reverseHeadings = false;
    }
    watchOpen(open) {
        if (open) {
            this.guxopened.emit();
        }
        else {
            this.guxclosed.emit();
        }
    }
    toggle() {
        this.open = !this.open;
    }
    isArrowPositionBeforeText() {
        return this.arrowPosition === 'start';
    }
    handleSlotChange(slotname) {
        const slot = this.root.querySelector(`[slot="${slotname}"]`);
        slot.role = 'presentation';
        if (!slot || !/^H[1-6]$/.test(slot.nodeName)) {
            logError(this.root, `For accessibility reasons the ${slotname} slot should be filled with a HTML heading tag (h1 - h6).`);
        }
        if (slotname == 'header') {
            this.headingLevel = parseInt(slot.nodeName.replace('H', ''), 10);
        }
    }
    componentWillLoad() {
        this.hasIconSlot = !!this.root.querySelector('[slot="icon"]');
    }
    render() {
        return (h("section", { key: '674fc87bcc66d1d95e5cb276d5e70692e3cf51a8', class: { 'gux-disabled': this.disabled } }, h("div", { key: '9468ed945146ed3cc49211ad68cc4ae34d1a98ec', id: this.headerId, role: "heading", "aria-level": this.headingLevel }, h("button", { key: '81c4c2abab2b4023688b67e03fb7eec2ddec246a', class: {
                'gux-header': true,
                'gux-reverse-headings': this.reverseHeadings
            }, type: "button", "aria-expanded": this.open.toString(), "aria-controls": this.sectionId, disabled: this.disabled, onClick: this.toggle.bind(this) }, this.hasIconSlot && h("slot", { key: 'e10cf5069ca43a76e4f0cfe3f09e21313c949c59', name: "icon" }), h("div", { key: '4395ae449bcbd47d16dd08c84be5e174bc68a1cf', class: {
                'gux-header-text': true
            } }, h("slot", { key: 'd9f81cf111342ed803f0de96bc4837ad55683b46', onSlotchange: () => this.handleSlotChange('header'), name: "header" }), h("slot", { key: 'd087bbff228ccd623769c7d27684f9db038b7843', onSlotchange: () => this.handleSlotChange('subheader'), name: "subheader" })), h("div", { key: '84fd4c249ab6f1c5a024d0b885a4a2e839432f52', class: {
                'gux-header-icon': true,
                'gux-expanded': this.open,
                'gux-arrow-position-start': this.isArrowPositionBeforeText()
            } }, h("gux-icon", { key: '59f3304b140ad39781a3e41ed9623dd21a4c4e2e', decorative: true, "icon-name": "custom/chevron-down-small-regular", size: "small" })))), h("div", { key: 'e50b7aaebe532de57349ccb39644f4c326df05ff', id: this.sectionId, role: "region", "aria-labelledby": this.headerId, class: {
                'gux-content': true,
                'gux-expanded': this.open,
                'gux-text-content-layout': this.contentLayout === 'text'
            } }, h("slot", { key: 'ac483e88d40ddd8f7ee0030be7de192f690c4e6c', name: "content" }))));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "open": ["watchOpen"]
    }; }
};
GuxAccordionSection.style = guxAccordionSectionCss;

export { GuxAccordionSection as gux_accordion_section };
