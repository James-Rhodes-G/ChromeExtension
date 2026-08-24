'use strict';

var index = require('./index-BLhHoh_r.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var usage = require('./usage-v50bi18B.js');
var guxMenu_common = require('./gux-menu.common-B8_9UAPe.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const onMenuFocus = "Use the right arrow to enter the submenu, and the left arrow to return to the previous menu";
const onTargetFocus = "A popup has appeared. Press the down arrow to enter the menu";
var translationResources = {
	onMenuFocus: onMenuFocus,
	onTargetFocus: onTargetFocus
};

const guxFlyoutMenuCss = ":host{z-index:var(--gse-semantic-zIndex-popover);color:var(--gse-ui-menu-option-label-foregroundColor);cursor:default}:host(:focus){outline:none}:host(:focus-visible){outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-flyout-menu-content{position:fixed;display:none;border:none;border-radius:var(--gse-ui-menu-borderRadius);opacity:0}.gux-flyout-menu-content.gux-shown{display:flex;animation-name:fade-in;animation-duration:100ms;animation-delay:350ms;animation-fill-mode:forwards}.gux-flyout-menu-content .gux-arrow{position:absolute;inline-size:var(--gse-ui-popover-anchor-width);block-size:var(--gse-ui-popover-anchor-height);padding-block-end:4px;overflow:hidden}.gux-flyout-menu-content .gux-arrow-caret{inline-size:0;block-size:0;border-block-start:calc(var(--gse-ui-popover-anchor-width) / 2) solid var(--gse-ui-popover-backgroundColor);border-inline-start:calc(var(--gse-ui-popover-anchor-width) / 2) solid transparent;border-inline-end:calc(var(--gse-ui-popover-anchor-width) / 2) solid transparent;filter:drop-shadow(0 0 4px var(--gse-semantic-effects-boxShadow))}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}";

const GuxFlyoutMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isShown = false;
    }
    onKeydown(event) {
        event.stopPropagation();
        if (this.isShown) {
            switch (event.key) {
                case 'Escape':
                case 'ArrowLeft':
                case 'ArrowUp':
                    this.root.focus();
                    return;
                case 'ArrowDown':
                    event.preventDefault();
                    this.focusOnMenu();
                    return;
                case 'Enter':
                    this.hideDelayTimeout = afterNextRender.afterNextRenderTimeout(() => {
                        this.focusOnMenu();
                    });
                    return;
            }
        }
    }
    // Using 'keyup' here because the native click handler behavior
    // for buttons is triggered on keyup when using the space key
    onKeyup(event) {
        event.stopPropagation();
        switch (event.key) {
            case ' ':
                if (this.root === event.target) {
                    this.focusOnMenu();
                }
                else {
                    this.hideDelayTimeout = afterNextRender.afterNextRenderTimeout(() => {
                        this.root.focus();
                    });
                }
                return;
        }
    }
    onmouseenter() {
        this.show();
    }
    onMouseleave() {
        this.hide();
    }
    onClick(event) {
        if (event.detail !== 0) {
            this.hide();
        }
        this.root.focus();
    }
    onFocusin() {
        if (!this.isShown) {
            void this.announceElement.guxAnnounce(this.i18n('onTargetFocus'));
        }
        this.show();
    }
    onFocusout() {
        this.hide();
    }
    show() {
        clearTimeout(this.hideDelayTimeout);
        this.isShown = true;
    }
    hide() {
        if (this.isShown) {
            this.hideDelayTimeout = setTimeout(() => {
                this.isShown = false;
            }, guxMenu_common.hideDelay);
        }
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        if (this.root.isConnected) {
            this.cleanupUpdatePosition = floatingUi_dom.autoUpdate(this.targetElement, this.menuContentElement, () => this.updatePosition(), {
                ancestorScroll: true,
                elementResize: true,
                animationFrame: true,
                ancestorResize: true
            });
        }
        else {
            this.disconnectedCallback();
        }
    }
    updatePosition() {
        if (this.root) {
            void floatingUi_dom.computePosition(this.targetElement, this.menuContentElement, {
                placement: 'bottom-start',
                strategy: 'fixed',
                middleware: [
                    floatingUi_dom.offset(16),
                    floatingUi_dom.flip(),
                    floatingUi_dom.shift(),
                    floatingUi_dom.arrow({
                        element: this.arrowElement,
                        padding: 16
                    })
                ]
            }).then(({ x, y, middlewareData, placement }) => {
                var _a;
                Object.assign(this.menuContentElement.style, {
                    left: `${x}px`,
                    top: `${y}px`
                });
                const side = placement.split('-')[0];
                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right'
                }[side];
                const arrowRotation = {
                    top: 0,
                    right: 90,
                    bottom: 180,
                    left: -90
                }[side];
                if (middlewareData.arrow) {
                    const { x, y } = middlewareData.arrow;
                    Object.assign((_a = this.arrowElement) === null || _a === void 0 ? void 0 : _a.style, {
                        left: x != null ? `${x}px` : '',
                        top: y != null ? `${y}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: `${ -12}px`,
                        transform: `rotate(${arrowRotation}deg)`
                    });
                }
            });
        }
    }
    focusOnMenu() {
        if (this.menuContentElement.contains(document.activeElement)) {
            return;
        }
        this.hideDelayTimeout = afterNextRender.afterNextRenderTimeout(() => {
            void this.announceElement.guxAnnounce(this.i18n('onMenuFocus'));
        });
        const menu = this.root.querySelector('gux-menu');
        const menuItems = Array.from(menu.children);
        const nextFocusableElement = menuItems[0];
        void nextFocusableElement.guxFocus();
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    componentDidLoad() {
        if (this.isShown) {
            this.runUpdatePosition();
        }
    }
    componentDidUpdate() {
        if (this.isShown) {
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
        return (index.h(index.Host, { key: '7ad3efd714c201938298cf87b5acc6e86a4618c0', tabIndex: 0, "aria-haspopup": "true" }, index.h("gux-announce-beta", { key: 'f2c96a97da0e807e8a0506b12b01e7d9dc4e03f1', ref: el => (this.announceElement = el) }), index.h("span", { key: '92702bfb121a185695edac754f6bc29371b7f635', ref: el => (this.targetElement = el) }, index.h("slot", { key: '6b6e3221ea75d5f498466c178e1229f1eb27e675', name: "target" })), index.h("div", { key: '701eb459b5a0f71395b55c5785f549bef720d23d', class: {
                'gux-flyout-menu-content': true,
                'gux-shown': this.isShown
            }, ref: el => (this.menuContentElement = el) }, index.h("div", { key: 'acf809c3553c47e9c7807695dd4598251268ed7a', ref: (el) => (this.arrowElement = el), class: "gux-arrow" }, index.h("div", { key: 'efea8e265eee0be91e5a95867b869fe0d7c92f6d', class: "gux-arrow-caret" })), index.h("slot", { key: '7ab7ae4ec3ade19ff50e2eec0d0fc1b20d3d7c93', name: "menu" }))));
    }
    get root() { return index.getElement(this); }
};
GuxFlyoutMenu.style = guxFlyoutMenuCss;

exports.gux_flyout_menu = GuxFlyoutMenu;
