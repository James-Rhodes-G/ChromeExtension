'use strict';

var index = require('./index-BLhHoh_r.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');

const guxPopupCss = ".gux-target-container.gux-disabled{pointer-events:none;cursor:default;opacity:0.5}.gux-popup-container{position:fixed;z-index:var(--gse-semantic-zIndex-popup);visibility:hidden;inline-size:max-content;background-color:var(--gse-ui-menu-backgroundColor)}.gux-popup-container.gux-expanded{visibility:visible}.gux-sr-only-clip:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}";

const GuxPopup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalexpanded = index.createEvent(this, "internalexpanded", 7);
        this.internalcollapsed = index.createEvent(this, "internalcollapsed", 7);
        /**
         * Placement of the popup. Default is bottom-start
         */
        this.placement = 'bottom-start';
        this.expanded = false;
        this.disabled = false;
        /**
         * Number of pixels the popup is offset from the target.
         */
        this.offset = 2;
        /**
         * set if parent component design allows for popup exceeding target width
         */
        this.exceedTargetWidth = false;
        /**
         * set if parent component design is inline
         */
        this.inline = false;
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        this.cleanupUpdatePosition = floatingUi_dom.autoUpdate(this.targetElementContainer, this.popupElementContainer, () => this.updatePosition(), {
            ancestorScroll: true,
            elementResize: true,
            animationFrame: true,
            ancestorResize: true
        });
    }
    updatePosition() {
        if (this.targetElementContainer && this.popupElementContainer) {
            const exceedTargetWidth = this.exceedTargetWidth;
            const inline = this.inline;
            void floatingUi_dom.computePosition(this.targetElementContainer, this.popupElementContainer, {
                strategy: 'fixed',
                placement: this.placement,
                middleware: [
                    floatingUi_dom.offset(this.offset),
                    floatingUi_dom.flip(),
                    floatingUi_dom.size({
                        apply({ rects, elements }) {
                            if (exceedTargetWidth && !inline) {
                                // These elements should be at least as wide the target but can expand beyond
                                Object.assign(elements.floating.style, {
                                    minWidth: `${rects.reference.width}px`
                                });
                            }
                            else if (!inline) {
                                // Everything else is constrained to the width of the target.
                                // Note: if the contents overflow the flip and shift middleware will not detect it
                                Object.assign(elements.floating.style, {
                                    width: `${rects.reference.width}px`
                                });
                            }
                        }
                    }),
                    floatingUi_dom.shift(),
                    floatingUi_dom.hide()
                ]
            }).then(({ x, y, middlewareData }) => {
                const { referenceHidden } = middlewareData.hide;
                if (!isNaN(x)) {
                    Object.assign(this.popupElementContainer.style, {
                        left: `${x}px`
                    });
                }
                if (!isNaN(y)) {
                    Object.assign(this.popupElementContainer.style, {
                        top: `${y}px`
                    });
                }
                if (referenceHidden) {
                    this.popupElementContainer.classList.add('gux-sr-only-clip');
                }
                else {
                    this.popupElementContainer.classList.remove('gux-sr-only-clip');
                }
            });
        }
    }
    onExpandedChange(expanded) {
        if (expanded) {
            this.internalexpanded.emit();
        }
        else {
            this.internalcollapsed.emit();
        }
    }
    // do not runUpdatePosition on load unless expanded to avoid performance issues: COMUI-3140
    componentDidLoad() {
        if (this.expanded) {
            this.runUpdatePosition();
        }
    }
    componentDidUpdate() {
        if (this.expanded) {
            this.runUpdatePosition();
        }
        else if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    disconnectedCallback() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    render() {
        return (index.h("div", { key: '819dae1406daa2fd628032b4d9928904a1b91c27', class: {
                'gux-target-container': true,
                'gux-disabled': this.disabled
            }, "aria-disabled": this.disabled.toString(), ref: (el) => (this.targetElementContainer = el) }, index.h("slot", { key: '129ccebfc2224dcbd3f79be7d17f6260d31fa7ea', name: "target" }), index.h("div", { key: '00fce897eb9ae9e34cc1fabdda1411077b4e7ea4', class: {
                'gux-popup-container': true,
                'gux-expanded': this.expanded && !this.disabled
            }, ref: (el) => (this.popupElementContainer = el) }, index.h("slot", { key: '0965f03d6c86d64be6f4cb6ac31d961e86e7d574', name: "popup" }))));
    }
    static get watchers() { return {
        "expanded": ["onExpandedChange"]
    }; }
};
GuxPopup.style = guxPopupCss;

exports.gux_popup = GuxPopup;
