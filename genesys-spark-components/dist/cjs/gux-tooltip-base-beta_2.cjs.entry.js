'use strict';

var index = require('./index-BLhHoh_r.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var usage = require('./usage-v50bi18B.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var overflowDetection = require('./overflow-detection-BCvNgBUy.js');
var findElementById = require('./find-element-by-id-BmYnM3YU.js');

const guxTooltipBaseCss = ":host{position:fixed;z-index:var(--gse-semantic-zIndex-tooltip);display:none;inline-size:max-content;max-inline-size:var(--gse-ui-tooltip-maxWidth);border-radius:var(--gse-ui-tooltip-borderRadius);box-shadow:var(--gse-ui-tooltip-boxShadow);opacity:0}:host(.gux-show){display:block;animation-name:fade-in;animation-duration:250ms;animation-delay:350ms;animation-fill-mode:forwards}.gux-container{box-sizing:border-box;display:flex;flex-direction:row;gap:var(--gse-ui-tooltip-gap);place-content:center flex-start;padding:var(--gse-ui-tooltip-padding);font-family:var(--gse-ui-tooltip-text-fontFamily);font-size:var(--gse-ui-tooltip-text-fontSize);font-weight:var(--gse-ui-tooltip-text-fontWeight);line-height:var(--gse-ui-tooltip-text-lineHeight);color:var(--gse-ui-tooltip-light-foregroundColor);pointer-events:none;background-color:var(--gse-ui-tooltip-light-backgroundColor);border:var(--gse-ui-tooltip-light-border-width) var(--gse-ui-tooltip-light-border-style) var(--gse-ui-tooltip-light-border-color);border-radius:var(--gse-ui-tooltip-borderRadius)}.gux-container ::slotted(gux-icon){align-self:center;inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size);color:var(--gse-ui-tooltip-light-foregroundColor)}.gux-container ::slotted(*){inline-size:100%;overflow-wrap:break-word;white-space:normal}.gux-container.gux-dark{color:var(--gse-ui-tooltip-dark-foregroundColor);background-color:var(--gse-ui-tooltip-dark-backgroundColor);border:var(--gse-ui-tooltip-dark-border-width) var(--gse-ui-tooltip-dark-border-style) var(--gse-ui-tooltip-dark-border-color)}.gux-container.gux-dark ::slotted(gux-icon){align-self:center;inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size);color:var(--gse-ui-tooltip-dark-iconColor)}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}";

const GuxTooltipBase = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pointerenterHandler = () => this.show();
        this.pointerleaveHandler = () => this.hide();
        this.focusinHandler = () => this.show();
        this.focusoutHandler = () => this.hide();
        this.forElementListeners = new Map([
            ['pointerenter', this.pointerenterHandler],
            ['pointerleave', this.pointerleaveHandler],
            ['focusin', this.focusinHandler],
            ['focusout', this.focusoutHandler],
            ['mousemove', this.handlePointerMove.bind(this)]
        ]);
        this.id = randomHtmlId.randomHTMLId('gux-tooltip-base');
        /**
         * Placement of the tooltip. Default is bottom-start
         */
        this.placement = 'bottom-start';
        this.offsetX = 0;
        this.offsetY = 0;
        this.accent = 'light';
        /**
         * Determines whether the text in the tooltip is read by screenreaders.
         * Use for cases where the forElement component handles the accessibility.
         */
        this.visualOnly = false;
        this.followMouse = false;
        /**
         * If tooltip is shown or not
         */
        this.isShown = false;
    }
    handleKeyDown(event) {
        if (event.key === 'Escape' && this.isShown) {
            this.hide();
        }
    }
    handlePointerenter() {
        this.show();
    }
    handlePointerleave() {
        this.hide();
    }
    handlePointerMove(event) {
        if (this.followMouse) {
            event.preventDefault();
            this.refElement = this.getRefElement(event.clientX, event.clientY);
            this.runUpdatePosition();
        }
    }
    /*
     * Show tooltip
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async showTooltip() {
        this.show();
    }
    /*
     * Hide tooltip
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async hideTooltip() {
        this.hide();
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        const ref = this.followMouse && this.refElement ? this.refElement : this.forElement;
        this.cleanupUpdatePosition = floatingUi_dom.autoUpdate(ref, this.root, () => this.updatePosition(ref), {
            ancestorScroll: true,
            elementResize: true,
            animationFrame: this.followMouse,
            ancestorResize: true
        });
    }
    updatePosition(ref) {
        const middleware = [
            floatingUi_dom.offset(12),
            floatingUi_dom.flip({
                fallbackAxisSideDirection: 'start',
                crossAxis: false
            }),
            floatingUi_dom.shift(),
            floatingUi_dom.hide(),
            overflowDetection.overflowDetection()
        ];
        void floatingUi_dom.computePosition(ref, this.root, {
            placement: this.placement,
            strategy: 'fixed',
            middleware: middleware
        }).then(({ x, y, middlewareData }) => {
            var _a;
            Object.assign(this.root.style, {
                left: `${x + this.offsetX}px`,
                top: `${y + this.offsetY}px`,
                visibility: ((_a = middlewareData.hide) === null || _a === void 0 ? void 0 : _a.referenceHidden) ? 'hidden' : 'visible'
            });
            //data-placement needed on the for e2e tests.
            this.root.setAttribute('data-placement', this.placement);
        });
    }
    show() {
        clearTimeout(this.hideDelayTimeout);
        this.isShown = true;
        afterNextRender.afterNextRender(() => {
            this.runUpdatePosition();
        });
    }
    hide() {
        this.hideDelayTimeout = setTimeout(() => {
            this.isShown = false;
            this.refElement = undefined;
            if (this.cleanupUpdatePosition) {
                this.cleanupUpdatePosition();
            }
        }, 350);
    }
    setForElement() {
        if (this.forElement) {
            if (!this.visualOnly) {
                const tooltipId = this.tooltipId ? this.tooltipId : this.id;
                this.forElement.setAttribute('aria-describedby', tooltipId);
            }
            this.forElementListeners.forEach((handler, type) => this.forElement.addEventListener(type, handler));
        }
    }
    disconnectForElement() {
        if (this.forElement) {
            this.forElement.removeAttribute('aria-describedby');
            this.forElementListeners.forEach((handler, type) => this.forElement.removeEventListener(type, handler));
        }
    }
    updateForElement() {
        this.disconnectForElement();
        this.setForElement();
    }
    getRefElement(cursorX, cursorY) {
        return {
            getBoundingClientRect() {
                return {
                    x: cursorX,
                    y: cursorY,
                    top: cursorY,
                    left: cursorX,
                    bottom: cursorY,
                    right: cursorX,
                    width: 10,
                    height: 10
                };
            }
        };
    }
    connectedCallback() {
        this.setForElement();
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.placement });
    }
    disconnectedCallback() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        this.disconnectForElement();
    }
    render() {
        return (index.h(index.Host, { key: '98c28c32aa5196c39c583bc5fd25fdcc6aeafc5d', id: this.tooltipId ? undefined : this.id, role: this.tooltipId && !this.isShown ? undefined : 'tooltip', class: { 'gux-show': this.isShown }, "aria-hidden": this.visualOnly }, index.h("div", { key: 'b6028bb11ee231748feae82bf4c9f2412cfb35c2', class: {
                'gux-container': true,
                [`gux-${this.accent}`]: true
            }, "data-placement": this.placement }, index.h("slot", { key: '41a0004706e0bb1482c3e82f92049edf5cea3eaf', name: "content" }))));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "offsetX": ["runUpdatePosition"],
        "offsetY": ["runUpdatePosition"],
        "forElement": ["updateForElement"]
    }; }
};
GuxTooltipBase.style = guxTooltipBaseCss;

const GuxTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.id = randomHtmlId.randomHTMLId('gux-tooltip');
        /**
         * Placement of the tooltip. Default is bottom-start
         */
        this.placement = 'bottom-start';
        this.accent = 'light';
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
        usage.trackComponent(this.root, { variant: this.placement });
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
            const forElement = findElementById.findElementById(this.root, this.for);
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
            console.error(`gux-tooltip: invalid element supplied to 'for': "${this.for}"`);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'dec2e09c13b69b06a53cbdc4960bac6122b23bab', id: this.id, role: this.role }, index.h("gux-tooltip-base-beta", { key: '27e945d1b66edc8bce373db4a7ce7008d30edfc9', forElement: this.forElement, placement: this.placement, accent: this.accent, tooltipId: this.id, visualOnly: this.visualOnly, ref: el => (this.baseTooltip = el) }, index.h("span", { key: '150d934b5aad6f476b0a351f317834ac17e6de8e', slot: "content" }, index.h("slot", { key: 'bd3602ad0e6f4ac30df9517589e3cb0a2d1a9b3d', name: "content" }, index.h("slot", { key: 'b7bd4b50d40a548e0506e3294b26b62c044c89d2' }))))));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "for": ["updateForElement"]
    }; }
};

exports.gux_tooltip_base_beta = GuxTooltipBase;
exports.gux_tooltip_beta = GuxTooltip;
