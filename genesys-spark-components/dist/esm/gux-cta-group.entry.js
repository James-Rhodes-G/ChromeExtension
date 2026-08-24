import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { l as logWarn } from './log-error-DxtJDeL9.js';

const guxCtaGroupCss = ":host{display:block}.gux-cta-group{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-ctaGroup-gap);justify-content:start}.gux-cta-group.gux-end-align{flex-direction:row-reverse;justify-content:end}.gux-cta-group ::slotted(gux-button){flex:0 1 auto;min-inline-size:0}";

const GuxCTAGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets the buttons alignment
         */
        this.align = 'start';
        /**
         * Defines if the primary button should have a danger accent
         */
        this.dangerous = false;
    }
    validatePrimarySlot(slottedElement) {
        if (!slottedElement) {
            logWarn(this.root, 'You must slot a primary CTA.');
            return;
        }
        const validButtonTags = [
            'GUX-BUTTON',
            'GUX-ACTION-BUTTON',
            'GUX-BUTTON-MULTI',
            'GUX-BUTTON-SLOT'
        ];
        const slottedTagName = slottedElement.tagName;
        if (!validButtonTags.includes(slottedTagName)) {
            logWarn(this.root, `You must slot a button element in the primary slot.`);
        }
        if (this.dangerous) {
            slottedElement.accent = 'danger';
        }
        else if (slottedElement.accent !== 'primary') {
            slottedElement.accent = 'primary';
        }
    }
    validateSecondarySlot(slottedElement) {
        if (slottedElement) {
            const slottedTagName = slottedElement.tagName;
            const validButtonTags = [
                'GUX-BUTTON',
                'GUX-ACTION-BUTTON',
                'GUX-BUTTON-MULTI',
                'GUX-BUTTON-SLOT'
            ];
            if (!validButtonTags.includes(slottedTagName)) {
                logWarn(this.root, `You must slot a button element in the secondary slot.`);
            }
            else if (slottedElement.accent !== 'secondary') {
                slottedElement.accent = 'secondary';
            }
        }
    }
    validateDismissSlot(slottedElement) {
        if (slottedElement) {
            const slottedTagName = slottedElement.tagName;
            const validButtonTags = ['GUX-BUTTON', 'GUX-BUTTON-SLOT'];
            if (!validButtonTags.includes(slottedTagName)) {
                logWarn(this.root, `You must slot a gux-button or gux-button-slot in the dismiss slot.`);
            }
            else if (slottedElement.accent !== 'ghost') {
                slottedElement.accent = 'ghost';
            }
        }
    }
    componentWillLoad() {
        this.validatePrimarySlot(this.root.querySelector('[slot=primary]'));
        this.validateSecondarySlot(this.root.querySelector('[slot=secondary]'));
        this.validateDismissSlot(this.root.querySelector('[slot=dismiss]'));
    }
    render() {
        return (h("div", { key: '2d0d16094015def93abded1fa432a367fb2eccf1', class: `gux-cta-group gux-${this.align}-align` }, h("slot", { key: '33058a762539821802457d1544d141ed2fe6d3b2', name: "primary" }), h("slot", { key: '98c7963a90bef02f28b003666b1037d7442c181a', name: "secondary" }), h("slot", { key: 'f1f9a8c8a2070a5ea3f918d819e642b32e4e9a37', name: "dismiss" })));
    }
    get root() { return getElement(this); }
};
GuxCTAGroup.style = guxCtaGroupCss;

export { GuxCTAGroup as gux_cta_group };
