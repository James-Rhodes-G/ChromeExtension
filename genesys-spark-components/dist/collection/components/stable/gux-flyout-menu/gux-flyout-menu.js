import { h, Host } from "@stencil/core";
import { autoUpdate, computePosition, arrow, flip, offset, shift } from "@floating-ui/dom";
import { afterNextRenderTimeout } from "../../../utils/dom/after-next-render";
import { trackComponent } from "../../../utils/tracking/usage";
import { hideDelay } from "./gux-menu/gux-menu.common";
import translationResources from "./i18n/en.json";
import { buildI18nForComponent } from "../../../i18n";
/**
 * @slot target - target element
 * @slot menu - gux-menu element
 */
export class GuxFlyoutMenu {
    constructor() {
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
                    this.hideDelayTimeout = afterNextRenderTimeout(() => {
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
                    this.hideDelayTimeout = afterNextRenderTimeout(() => {
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
            }, hideDelay);
        }
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        if (this.root.isConnected) {
            this.cleanupUpdatePosition = autoUpdate(this.targetElement, this.menuContentElement, () => this.updatePosition(), {
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
        // This is 12 because this makes the arrow look aligned
        const arrowLen = 12;
        if (this.root) {
            void computePosition(this.targetElement, this.menuContentElement, {
                placement: 'bottom-start',
                strategy: 'fixed',
                middleware: [
                    offset(16),
                    flip(),
                    shift(),
                    arrow({
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
                        [staticSide]: `${-arrowLen}px`,
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
        this.hideDelayTimeout = afterNextRenderTimeout(() => {
            void this.announceElement.guxAnnounce(this.i18n('onMenuFocus'));
        });
        const menu = this.root.querySelector('gux-menu');
        const menuItems = Array.from(menu.children);
        const nextFocusableElement = menuItems[0];
        void nextFocusableElement.guxFocus();
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
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
        return (h(Host, { key: '7ad3efd714c201938298cf87b5acc6e86a4618c0', tabIndex: 0, "aria-haspopup": "true" }, h("gux-announce-beta", { key: 'f2c96a97da0e807e8a0506b12b01e7d9dc4e03f1', ref: el => (this.announceElement = el) }), h("span", { key: '92702bfb121a185695edac754f6bc29371b7f635', ref: el => (this.targetElement = el) }, h("slot", { key: '6b6e3221ea75d5f498466c178e1229f1eb27e675', name: "target" })), h("div", { key: '701eb459b5a0f71395b55c5785f549bef720d23d', class: {
                'gux-flyout-menu-content': true,
                'gux-shown': this.isShown
            }, ref: el => (this.menuContentElement = el) }, h("div", { key: 'acf809c3553c47e9c7807695dd4598251268ed7a', ref: (el) => (this.arrowElement = el), class: "gux-arrow" }, h("div", { key: 'efea8e265eee0be91e5a95867b869fe0d7c92f6d', class: "gux-arrow-caret" })), h("slot", { key: '7ab7ae4ec3ade19ff50e2eec0d0fc1b20d3d7c93', name: "menu" }))));
    }
    static get is() { return "gux-flyout-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-flyout-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-flyout-menu.css"]
        };
    }
    static get states() {
        return {
            "isShown": {}
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keyup",
                "method": "onKeyup",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "mouseenter",
                "method": "onmouseenter",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseleave",
                "method": "onMouseleave",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "onFocusin",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
