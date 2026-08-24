import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import './get-closest-element-Cd4R0amv.js';

const additionalActions = "Additional Actions";
var translationResources = {
	additionalActions: additionalActions
};

const guxTableToolbarMenuButtonCss = ":host{display:none;-webkit-user-select:none;user-select:none}:host(.gux-show-menu){display:block}.gux-menu-button{display:flex;color:var(--gse-ui-button-secondary-default-foregroundColor);cursor:pointer;border:none}.gux-menu-button gux-icon{align-self:center}.gux-list-container{inline-size:min-content;margin:0;overflow-y:auto;background:var(--gse-ui-menu-backgroundColor);border-color:var(--gse-ui-menu-border-color);border-style:var(--gse-ui-menu-border-style);border-width:var(--gse-ui-menu-border-width);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}";

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
const GuxTableToolbarMenuButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.expanded = false;
    }
    handleKeyDown(event) {
        const composedPath = event.composedPath();
        switch (event.key) {
            case 'Escape':
                this.expanded = false;
                if (composedPath.includes(this.listElement)) {
                    event.preventDefault();
                    this.dropdownButton.focus();
                }
                break;
            case 'Tab': {
                this.expanded = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter':
                if (composedPath.includes(this.dropdownButton)) {
                    event.preventDefault();
                    this.expanded = true;
                    this.focusFirstItemInPopupList();
                }
                break;
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                const composedPath = event.composedPath();
                if (composedPath.includes(this.dropdownButton)) {
                    this.expanded = true;
                    this.focusFirstItemInPopupList();
                }
                break;
            }
        }
    }
    toggle() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.focusPopupList();
        }
    }
    onClickOutside() {
        this.expanded = false;
    }
    focusPopupList() {
        afterNextRender(() => {
            this.listElement.focus();
        });
    }
    focusFirstItemInPopupList() {
        afterNextRender(() => {
            void this.listElement.guxFocusFirstItem();
        });
    }
    renderTooltip() {
        if (!this.expanded) {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n('additionalActions'))));
        }
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: 'acc9a3590854223ac99cff9f9fdb79f0c45e3b34', class: { 'gux-show-menu': this.showMenu } }, h("gux-popup", { key: '3dfcd0901cb7ecf4d8f68a541b571d69ab9c8dc4', expanded: this.expanded, "exceed-target-width": true }, h("div", { key: '48ef9657c0d9ff9adde14179a323730f9f7e60ae', slot: "target", class: "gux-toolbar-menu-container" }, h("gux-button-slot", { key: '807bff8898b9560a2faf723ad865bb0f7368b83d', accent: "secondary" }, h("button", { key: '8637791c122ee1683fcd56f9ab559c763689b4e6', class: "gux-menu-button", type: "button", ref: el => (this.dropdownButton = el), onMouseUp: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.expanded.toString() }, h("gux-icon", { key: '20ef23bd4d57592356bb35af6c77eb8dd994a5cf', "icon-name": "fa/ellipsis-regular", size: "small", decorative: true }), h("gux-screen-reader-beta", { key: '8bd9ed576b8ba2bcb0d2adca54d99e00a62f9fea' }, this.i18n('additionalActions'))), this.renderTooltip())), h("div", { key: '41658ed678031a071d6967b41c285d9dee280cc5', class: "gux-list-container", slot: "popup" }, h("gux-list", { key: '703000ebf60b1d1e0b35496e18d81a98d8cc056a', ref: el => (this.listElement = el) }, h("slot", { key: '07bfabc74212d389991a201f6dcf78cdfcb1bf1e' }))))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxTableToolbarMenuButton.prototype, "onClickOutside", null);
GuxTableToolbarMenuButton.style = guxTableToolbarMenuButtonCss;

export { GuxTableToolbarMenuButton as gux_table_toolbar_menu_button };
