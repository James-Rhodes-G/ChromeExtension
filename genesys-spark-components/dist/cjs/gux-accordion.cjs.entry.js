'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxAccordionCss = "gux-accordion{-custom-noop:noop}";

const GuxAccordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        usage.trackComponent(this.root);
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
        return (index.h("slot", { key: 'eaaefcd1cca70e95575f2a04c632021ccc93787a' }));
    }
    get root() { return index.getElement(this); }
};
GuxAccordion.style = guxAccordionCss;

exports.gux_accordion = GuxAccordion;
