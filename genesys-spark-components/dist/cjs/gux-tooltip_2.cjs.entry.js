'use strict';

var index = require('./index-BLhHoh_r.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var usage = require('./usage-v50bi18B.js');
var findElementById = require('./find-element-by-id-BmYnM3YU.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var overflowDetection = require('./overflow-detection-BCvNgBUy.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
var onResize = require('./on-resize-CtGi-x07.js');

const guxTooltipCss = ":host{position:fixed;z-index:var(--gse-semantic-zIndex-tooltip);display:none;inline-size:max-content;max-inline-size:var(--gse-ui-tooltip-maxWidth);border-radius:var(--gse-ui-tooltip-borderRadius);box-shadow:var(--gse-ui-tooltip-boxShadow);opacity:0}:host(.gux-show){display:block;animation-name:fade-in;animation-duration:250ms;animation-delay:350ms;animation-fill-mode:forwards}.gux-container{box-sizing:border-box;display:flex;flex-direction:row;gap:var(--gse-ui-tooltip-gap);place-content:center flex-start;padding:var(--gse-ui-tooltip-padding);font-family:var(--gse-ui-tooltip-text-fontFamily);font-size:var(--gse-ui-tooltip-text-fontSize);font-weight:var(--gse-ui-tooltip-text-fontWeight);line-height:var(--gse-ui-tooltip-text-lineHeight);color:var(--gse-ui-tooltip-light-foregroundColor);pointer-events:none;background-color:var(--gse-ui-tooltip-light-backgroundColor);border:var(--gse-ui-tooltip-light-border-width) var(--gse-ui-tooltip-light-border-style) var(--gse-ui-tooltip-light-border-color);border-radius:var(--gse-ui-tooltip-borderRadius)}.gux-container ::slotted(gux-icon){align-self:center;inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size);color:var(--gse-ui-tooltip-light-foregroundColor)}.gux-container ::slotted(*){inline-size:100%;overflow-wrap:break-word;white-space:normal}.gux-container.gux-dark{color:var(--gse-ui-tooltip-dark-foregroundColor);background-color:var(--gse-ui-tooltip-dark-backgroundColor);border:var(--gse-ui-tooltip-dark-border-width) var(--gse-ui-tooltip-dark-border-style) var(--gse-ui-tooltip-dark-border-color)}.gux-container.gux-dark ::slotted(gux-icon){align-self:center;inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size);color:var(--gse-ui-tooltip-dark-iconColor)}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}";

const GuxTooltip = class {
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
            ['focusout', this.focusoutHandler]
        ]);
        this.id = randomHtmlId.randomHTMLId('gux-tooltip');
        /**
         * Placement of the tooltip. Default is bottom-start
         */
        this.placement = 'bottom-start';
        this.accent = 'light';
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
        this.cleanupUpdatePosition = floatingUi_dom.autoUpdate(this.forElement, this.root, () => this.updatePosition(), {
            ancestorScroll: true,
            elementResize: true,
            animationFrame: false,
            ancestorResize: true
        });
    }
    updatePosition() {
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
        void floatingUi_dom.computePosition(this.forElement, this.root, {
            placement: this.placement,
            strategy: 'fixed',
            middleware: middleware
        }).then(({ x, y, middlewareData }) => {
            var _a;
            Object.assign(this.root.style, {
                left: `${x}px`,
                top: `${y}px`,
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
            if (this.cleanupUpdatePosition) {
                this.cleanupUpdatePosition();
            }
            this.isShown = false;
        }, 350);
    }
    getForElement() {
        if (this.for) {
            return findElementById.findElementById(this.root, this.for);
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
    setForElement() {
        this.forElement = this.getForElement();
        if (this.forElement) {
            this.forElement.setAttribute('aria-describedby', this.id);
            this.forElementListeners.forEach((handler, type) => this.forElement.addEventListener(type, handler));
        }
        else {
            this.logForAttributeError();
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
        return (index.h(index.Host, { key: '6c4e4b9fcea047ddaa15fef056db54e201dbe5b6', id: this.id, class: { 'gux-show': this.isShown }, role: "tooltip" }, index.h("div", { key: '95ecb5dc6de5bab5ca53b04aba2307fe30d138de', class: {
                'gux-container': true,
                [`gux-${this.accent}`]: true
            }, "data-placement": this.placement }, index.h("slot", { key: '2bbde39cc9a7ccdf305995b35f0a55cbaf04e242', name: "content" }, index.h("slot", { key: '7e78cba125baf81a59884cb0a44c16c3ecebabcf' })))));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "for": ["updateForElement"]
    }; }
};
GuxTooltip.style = guxTooltipCss;

function getTextContentFromNodes(elements) {
    return elements
        .reduce((acc, cv) => {
        if (cv.nodeName === 'SLOT') {
            const slotElements = cv.assignedNodes();
            return acc.concat(getTextContentFromNodes(slotElements));
        }
        return acc.concat(cv.textContent);
    }, [])
        .map(s => s.trim())
        .join(' ');
}

const guxTruncateCss = ":host{display:block;inline-size:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:inherit}::slotted(*){display:inline}.gux-truncate-multi-line{white-space:normal}.gux-truncate-multi-line .gux-truncate-slot-container{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1}gux-tooltip{font-weight:normal;line-height:normal;text-align:start;overflow-wrap:break-word;white-space:normal}.gux-truncate-slot-container>*{display:inline}.gux-truncate-slot-container{display:block;text-overflow:ellipsis}.gux-overflow-hidden{overflow:hidden}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxTruncate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Lines to wrap before truncating
         */
        this.tooltipPlacement = 'bottom-start';
    }
    async setShowTooltip() {
        var _a;
        await ((_a = this.tooltipElement) === null || _a === void 0 ? void 0 : _a.showTooltip());
    }
    async setHideTooltip() {
        var _a;
        await ((_a = this.tooltipElement) === null || _a === void 0 ? void 0 : _a.hideTooltip());
    }
    onMutation() {
        index.forceUpdate(this.root);
    }
    onResize() {
        index.forceUpdate(this.root);
    }
    getTooltipContent() {
        return getTextContentFromNodes(Array.from(this.root.childNodes)) || '';
    }
    needsTruncation() {
        const slotContainerElement = this.root.shadowRoot.querySelector('.gux-truncate-slot-container');
        return ((slotContainerElement === null || slotContainerElement === void 0 ? void 0 : slotContainerElement.scrollWidth) > (slotContainerElement === null || slotContainerElement === void 0 ? void 0 : slotContainerElement.offsetWidth) ||
            (slotContainerElement === null || slotContainerElement === void 0 ? void 0 : slotContainerElement.scrollHeight) > (slotContainerElement === null || slotContainerElement === void 0 ? void 0 : slotContainerElement.offsetHeight));
    }
    renderTooltip() {
        if (this.needsTruncation()) {
            return (index.h("gux-tooltip", { placement: this.tooltipPlacement, "aria-hidden": "true", ref: el => (this.tooltipElement = el) }, index.h("div", { slot: "content" }, this.getTooltipContent())));
        }
        return null;
    }
    render() {
        var _a;
        return (index.h("div", { key: '507d5a1b6bd9b45ce09502f5d404462d1d79e08c', class: {
                'gux-truncate-multi-line': Boolean(this.maxLines)
            } }, index.h("span", { key: '00270974409574b242d3e0afa5d082940103261a', class: {
                'gux-overflow-hidden': this.needsTruncation(),
                'gux-truncate-slot-container': true
            }, style: { webkitLineClamp: (_a = this.maxLines) === null || _a === void 0 ? void 0 : _a.toString() } }, index.h("slot", { key: '140f114f64e1223d81ff15b2ed2e16bbe06dca50' })), this.renderTooltip()));
    }
    get root() { return index.getElement(this); }
};
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true, characterData: true })
], GuxTruncate.prototype, "onMutation", null);
__decorate([
    onResize.OnResize()
], GuxTruncate.prototype, "onResize", null);
GuxTruncate.style = guxTruncateCss;

exports.gux_tooltip = GuxTooltip;
exports.gux_truncate = GuxTruncate;
