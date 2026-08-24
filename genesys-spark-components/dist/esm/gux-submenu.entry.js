import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, s as shift } from './floating-ui.dom-C_pVuars.js';
import { a as afterNextRenderTimeout } from './after-next-render-Bg4q97BS.js';
import { m as menuNavigation, h as hideDelay } from './gux-menu.common-QGDBFOq1.js';

const guxSubmenuCss = ":host{display:block;flex:1 1 auto;align-self:auto}:host .gux-submenu-button{all:unset;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:center;inline-size:var(--gse-ui-flyoutMenu-width);block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);background-color:var(--gse-ui-menu-option-default-backgroundColor)}:host .gux-submenu-button:focus-within,:host .gux-submenu-button:hover{background-color:var(--gse-ui-menu-option-hover-backgroundColor)}:host .gux-submenu-button.gux-submenu-button-active{font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);color:var(--gse-ui-menu-option-shortcut-selected-foregroundColor);background-color:var(--gse-ui-menu-option-selected-backgroundColor)}:host .gux-submenu-button .gux-submenu-button-text{flex:1 1 auto;align-self:auto;order:0;margin-inline-end:var(--gse-ui-menu-option-gap);overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}:host .gux-submenu-button .gux-submenu-open-icon{flex:0 0 auto;align-self:auto;order:0}:host .gux-submenu-wrapper{position:fixed;inset-block-start:0;inset-inline-start:0;visibility:hidden;flex-direction:column;padding:var(--gse-ui-menu-padding);margin:0;background-color:var(--gse-ui-menu-backgroundColor);border:none;border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow);opacity:0}:host .gux-submenu-wrapper.gux-shown{visibility:visible;animation-name:fade-in;animation-duration:100ms;animation-delay:350ms;animation-fill-mode:forwards}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}";

const GuxSubmenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isShown = false;
    }
    /**
     * Focus on the components button element
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus() {
        this.buttonElement.focus();
    }
    onKeydown(event) {
        menuNavigation(event, this.root);
        switch (event.key) {
            case 'Enter':
                event.stopPropagation();
                this.hideDelayTimeout = afterNextRenderTimeout(() => {
                    this.focusOnSubmenu();
                });
                void this.guxFocus();
                break;
            case 'ArrowRight':
                event.stopPropagation();
                this.show();
                this.hideDelayTimeout = afterNextRenderTimeout(() => {
                    this.focusOnSubmenu();
                });
                break;
            case 'ArrowLeft':
            case 'Escape':
                if (!(this.root === event.target)) {
                    event.stopPropagation();
                }
                void this.guxFocus();
                break;
        }
    }
    // Using 'keyup' here because the native click handler behavior
    // for buttons is triggered on keyup when using the space key
    onKeyup(event) {
        switch (event.key) {
            case ' ':
                this.hideDelayTimeout = afterNextRenderTimeout(() => {
                    this.focusOnSubmenu();
                });
                void this.guxFocus();
                break;
        }
    }
    onmouseenter() {
        this.show();
    }
    onMouseleave() {
        this.hide();
    }
    onClick(event) {
        if (event.target.nodeName === 'GUX-MENU-OPTION') {
            this.hide();
            return;
        }
        event.stopPropagation();
    }
    onFocusin() {
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
            this.cleanupUpdatePosition = autoUpdate(this.buttonElement, this.submenuElement, () => this.updatePosition(), {
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
        if (this.submenuElement) {
            void computePosition(this.buttonElement, this.submenuElement, {
                placement: 'right-start',
                strategy: 'fixed',
                // gse-ui-flyoutMenu-parenting-gap
                middleware: [offset(4), flip(), shift()]
            }).then(({ x, y }) => {
                Object.assign(this.submenuElement.style, {
                    left: `${x}px`,
                    top: `${y - 8}px` //TODO https://inindca.atlassian.net/browse/COMUI-2480
                });
            });
        }
    }
    focusOnSubmenu() {
        if (this.submenuContentElement.contains(document.activeElement)) {
            return;
        }
        const menuItems = Array.from(this.root.children);
        const nextFocusableElement = menuItems[0];
        void nextFocusableElement.guxFocus();
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
        return (h(Host, { key: '6b7e91ec42d7960b344d59407c9a89ea8666e32a' }, h("button", { key: 'e5b59a39c084eff76454799bdc799b05aca52959', type: "button", class: {
                'gux-submenu-button': true,
                'gux-submenu-button-active': this.isShown
            }, role: "menuitem", tabIndex: -1, ref: el => (this.buttonElement = el), "aria-haspopup": "true", "aria-expanded": this.isShown.toString() }, h("span", { key: '63c7252401b34b26ecd67994c590edcbbb18776b', class: "gux-submenu-button-text" }, this.label), h("gux-icon", { key: '7b3ac1e4a44b6e2e0d827d458ab5a9f6ba9daa3e', class: "gux-submenu-open-icon", "icon-name": "custom/chevron-right-small-regular", decorative: true, size: "small" })), h("div", { key: '0678dc9499e9b927f4a0212832407bbe06785bba', ref: el => (this.submenuElement = el), class: {
                'gux-submenu-wrapper': true,
                'gux-shown': this.isShown
            } }, h("div", { key: '0e361310e24daaecfa946fce6b06696a06a43d7c', role: "menu", class: "gux-submenu-content", ref: el => (this.submenuContentElement = el) }, h("slot", { key: '19f8cd9928b11e23a103f8f6cb91a496fe4e77b5' })))));
    }
    get root() { return getElement(this); }
};
GuxSubmenu.style = guxSubmenuCss;

export { GuxSubmenu as gux_submenu };
