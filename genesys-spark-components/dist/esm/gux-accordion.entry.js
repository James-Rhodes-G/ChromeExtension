import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxAccordionCss = "gux-accordion{-custom-noop:noop}";

const GuxAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.singleOpenSection = false;
    }
    handleGuxopened(event) {
        if (this.singleOpenSection) {
            this.getAccordionSections().forEach(section => {
                if (section !== event.target) {
                    this.closeSection(section);
                }
            });
        }
    }
    componentWillLoad() {
        if (this.singleOpenSection) {
            this.getAccordionSections().reduceRight((openFound, section) => {
                if (openFound) {
                    this.closeSection(section);
                }
                return openFound || section.open;
            }, false);
        }
        trackComponent(this.root);
    }
    getAccordionSections() {
        return Array.from(this.root.children);
    }
    closeSection(section) {
        if (!section.disabled) {
            section.open = false;
        }
    }
    render() {
        return (h("slot", { key: 'eaaefcd1cca70e95575f2a04c632021ccc93787a' }));
    }
    get root() { return getElement(this); }
};
GuxAccordion.style = guxAccordionCss;

export { GuxAccordion as gux_accordion };
