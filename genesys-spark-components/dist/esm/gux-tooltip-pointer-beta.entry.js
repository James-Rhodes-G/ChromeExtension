import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { f as findElementById } from './find-element-by-id-Cr5bTKWF.js';
import { r as randomHTMLId } from './random-html-id-D9jKBqIb.js';

const GuxTooltipPointer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.id = randomHTMLId('gux-tooltip-pointer');
        this.accent = 'light';
        this.placement = 'bottom-start';
        /**
         * Determines whether the text in the tooltip is read by screenreaders.
         * Use for cases where the forElement component handles the accessibility.
         */
        this.visualOnly = false;
    }
    /*
     * Show tooltip
     */
    async showTooltip() {
        return await this.baseTooltip.showTooltip();
    }
    /*
     * Hide tooltip
     */
    async hideTooltip() {
        return await this.baseTooltip.hideTooltip();
    }
    updateForElement() {
        this.forElement = this.getForElement();
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.placement });
    }
    componentDidLoad() {
        if (this.baseTooltip) {
            this.tooltipObserver = new MutationObserver(() => {
                var _a;
                this.role = (_a = this.baseTooltip) === null || _a === void 0 ? void 0 : _a.role;
            });
            this.tooltipObserver.observe(this.baseTooltip, {
                childList: true,
                attributes: true,
                attributeFilter: ['role']
            });
        }
    }
    connectedCallback() {
        this.updateForElement();
    }
    disconnectedCallback() {
        if (this.tooltipObserver) {
            this.tooltipObserver.disconnect();
        }
    }
    getForElement() {
        if (this.for) {
            const forElement = findElementById(this.root, this.for);
            if (!forElement) {
                this.logForAttributeError();
            }
            return forElement;
        }
        else {
            return this.root.parentElement;
        }
    }
    logForAttributeError() {
        if (this.root.isConnected) {
            console.error(`gux-tooltip-pointer: invalid element supplied to 'for': "${this.for}"`);
        }
    }
    render() {
        return (h(Host, { key: 'a09b1f5780b2e245ccf6dbae26dd424a0c98183c', id: this.id, role: this.role }, h("gux-tooltip-base-beta", { key: '5663264ae1cccc111d9396633ce3e0d995ecb33c', forElement: this.forElement, placement: this.placement, accent: this.accent, tooltipId: this.id, visualOnly: this.visualOnly, ref: el => (this.baseTooltip = el), followMouse: true }, h("span", { key: 'f767e9a7024e0628e37adee398789d3c5bcc1d3e', slot: "content" }, h("slot", { key: 'a95aba49553d11f989f1e68fa8631366b6f14e0c', name: "content" }, h("slot", { key: '74e6c8b8403f07b5d468fcc0eae2867c77e1adfa' }))))));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "for": ["updateForElement"]
    }; }
};

export { GuxTooltipPointer as gux_tooltip_pointer_beta };
