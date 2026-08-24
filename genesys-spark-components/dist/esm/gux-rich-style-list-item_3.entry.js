import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { g as getClosestElement } from './get-closest-element-Cd4R0amv.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as translationResources } from './en-DN3YAdAX.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { w as whenEventIsFrom } from './when-event-is-from-kLXvN2m9.js';
import { h as hasDisabledParent } from './gux-rich-text-editor.service-CJnB9AGA.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, s as shift } from './floating-ui.dom-C_pVuars.js';
import { n as next, p as previous } from './gux-list.service-BebXX5IS.js';
import './get-closest-element-BZb6pJEJ.js';

const guxRichStyleListItemCss = ":host{inline-size:100%;text-align:start;outline:none}:host([disabled]){pointer-events:none}:host([disabled=false]){pointer-events:auto}::slotted(gux-icon){inline-size:var(--gse-ui-menu-option-startIcon-height);block-size:var(--gse-ui-menu-option-startIcon-height);margin-inline-end:var(--gse-ui-menu-option-gap);vertical-align:middle}button{all:unset;box-sizing:border-box;inline-size:100%;min-block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);font-family:var(--gse-ui-menu-option-label-default-text-fontFamily);font-size:var(--gse-ui-menu-option-label-default-text-fontSize);font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);word-wrap:break-word;cursor:pointer;outline:none;outline-offset:calc(var(--gse-ui-menu-option-focus-border-width) * -1) !important;background-color:var(--gse-ui-menu-option-default-backgroundColor);border:none}button:focus-visible:not(:disabled){outline:var(--gse-ui-menu-option-focus-border-width) var(--gse-ui-menu-option-focus-border-style) var(--gse-ui-menu-option-focus-border-color);border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}button:hover:not(:disabled){background:var(--gse-ui-menu-option-hover-backgroundColor)}button:active:not(:disabled){font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight);background:var(--gse-ui-menu-option-selected-backgroundColor)}button:disabled{cursor:default;opacity:var(--gse-ui-menu-option-disabled-opacity)}::slotted(*){margin:0}";

const GuxRichStyleListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
    }
    onMouseUp() {
        this.focusParentList();
    }
    onMouseOver() {
        this.focusParentList();
    }
    focusParentList() {
        const parentList = getClosestElement('gux-rich-text-editor-list', this.root);
        if (parentList && parentList.shadowRoot.activeElement === null) {
            this.root.blur();
            parentList.focus({
                preventScroll: true
            });
        }
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: '41a3af25f4d4ca67bb03e36953d04622413b5cde', role: "listitem" }, h("button", { key: 'f3657ff8470ab0bc24bb72fcd21116a736612894', type: "button", tabIndex: -1, disabled: this.disabled }, h("gux-truncate", { key: '4b9627629b04d68cce683829149eaef973da78ae', "max-lines": 1 }, h("slot", { key: 'cd0b368cef0a503eddcb738b9386800fcf1e4686' })))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxRichStyleListItem.style = guxRichStyleListItemCss;

const guxRichTextEditorMenuCss = ":host{display:block;max-inline-size:fit-content;white-space:normal}button{block-size:var(--gse-ui-button-default-height);padding:var(--gse-ui-button-default-paddingIconOnly);border-radius:var(--gse-ui-button-borderRadius)}.gux-list-container{inline-size:var(--gse-ui-contextMenu-menu-width);max-block-size:var(--gse-ui-contextMenu-menu-maxHeight);margin:0;overflow-y:auto;background:var(--gse-ui-menu-backgroundColor);border-color:var(--gse-ui-menu-border-color);border-style:var(--gse-ui-menu-border-style);border-width:var(--gse-ui-menu-border-width);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}";

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
const GuxRichTextEditorMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isOpen = false;
    }
    onClickOutside() {
        this.isOpen = false;
    }
    handleKeyDown(event) {
        const isListEvent = event.composedPath().includes(this.listElement);
        const isButtonEvent = event.composedPath().includes(this.button);
        switch (event.key) {
            case 'Escape': {
                if (isListEvent) {
                    event.preventDefault();
                    this.isOpen = false;
                    this.button.focus();
                }
                break;
            }
            case 'Tab': {
                this.isOpen = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter': {
                if (isButtonEvent && !this.isOpen) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusFirstListItem();
                }
                break;
            }
            case 'ArrowUp': {
                if (isButtonEvent && !this.isOpen) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusLastListItem();
                }
                break;
            }
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                if (event.composedPath().includes(this.button)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusFirstListItem();
                }
                break;
            }
        }
    }
    focusFirstListItem() {
        afterNextRender(() => {
            void this.listElement.guxFocusFirstItem();
        });
    }
    focusLastListItem() {
        afterNextRender(() => {
            void this.listElement.guxFocusLastItem();
        });
    }
    onActionClick() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.focusFirstListItem();
        }
    }
    onListClick(event) {
        whenEventIsFrom('gux-rich-style-list-item', event, () => {
            this.isOpen = false;
            this.button.focus();
        });
    }
    renderTooltip() {
        return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n('additionalActions'))));
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h(Host, { key: '87963618481ff58c090023c17beab8d53a9b073a' }, h("gux-popup", { key: 'bda2cc0cc677fdd9c879c89743e66f933bfaefa6', expanded: this.isOpen, offset: 4, "exceed-target-width": true }, h("div", { key: 'ecce9e9fce1bb889e36ef7f785b8d93cef132842', slot: "target" }, h("gux-button-slot", { key: '92f988d6ea66dc95a4e5f67a552ea2ff5c36cd6e', accent: "ghost" }, h("button", { key: '8cd5d5dff2e6041c76e5b6d8e71e99d670b68068', type: "button", onClick: () => this.onActionClick(), ref: el => (this.button = el), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), disabled: hasDisabledParent(this.root) }, h("gux-icon", { key: '6b2f6de7e1ea240023bd21343674c3932c0666ca', "icon-name": "fa/ellipsis-vertical-regular", decorative: true, size: "small" }), h("gux-screen-reader-beta", { key: '690c884ce0424d98f227385dc63920af27926efa' }, this.i18n('additionalActions'))), this.renderTooltip())), h("div", { key: '24e6a9160a117a401779d0dc73842326e4930435', slot: "popup", class: "gux-list-container" }, h("gux-rich-text-editor-list", { key: '64787b9c585a0ccfbe17faf0370f1001ce50ba6e', onClick: e => this.onListClick(e), ref: el => (this.listElement = el) }, h("slot", { key: '2a5161bb4ac3c07d89636a69aad5746ed55fc6e7' }))))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
__decorate([
    OnClickOutside({ triggerEvents: 'click' })
], GuxRichTextEditorMenu.prototype, "onClickOutside", null);
GuxRichTextEditorMenu.style = guxRichTextEditorMenuCss;

const guxRichTextEditorSubListCss = ":host{inline-size:100%;text-align:start;outline:none}:host([disabled]){pointer-events:none}:host([disabled=false]){pointer-events:auto}::slotted(gux-icon){inline-size:var(--gse-ui-menu-option-startIcon-height);block-size:var(--gse-ui-menu-option-startIcon-height);margin-inline-end:var(--gse-ui-menu-option-gap);vertical-align:middle}button{all:unset;box-sizing:border-box;inline-size:100%;min-block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);font-family:var(--gse-ui-menu-option-label-default-text-fontFamily);font-size:var(--gse-ui-menu-option-label-default-text-fontSize);font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);word-wrap:break-word;cursor:pointer;outline:none;outline-offset:calc(var(--gse-ui-menu-option-focus-border-width) * -1) !important;background-color:var(--gse-ui-menu-option-default-backgroundColor);border:none}button:focus-visible:not(:disabled){outline:var(--gse-ui-menu-option-focus-border-width) var(--gse-ui-menu-option-focus-border-style) var(--gse-ui-menu-option-focus-border-color);border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}button:hover:not(:disabled){background:var(--gse-ui-menu-option-hover-backgroundColor)}button:active:not(:disabled){font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight);background:var(--gse-ui-menu-option-selected-backgroundColor)}button:disabled{cursor:default;opacity:var(--gse-ui-menu-option-disabled-opacity)}::slotted(*){margin:0}button.gux-sub-list-button{display:flex;flex-direction:row;justify-content:space-between}button gux-icon{align-self:center;color:var(--gse-ui-menu-option-parentIcon-selected-foregroundColor)}.gux-sub-list-wrapper{position:fixed;inset-block-start:0;inset-inline-start:0;visibility:hidden;flex-direction:column;inline-size:130px;padding:var(--gse-ui-menu-padding);margin:0;background-color:var(--gse-ui-menu-backgroundColor);border:none;border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}.gux-sub-list-wrapper.gux-shown{visibility:visible}";

const GuxRichTextEditorSubList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isShown = false;
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Enter':
                event.stopPropagation();
                this.focusOnSubList();
                break;
            case 'ArrowUp':
                if (!(this.root === event.target)) {
                    event.preventDefault();
                    event.stopPropagation();
                    previous(this.root, ['gux-rich-style-list-item']);
                }
                break;
            case 'ArrowDown':
                if (!(this.root === event.target)) {
                    event.preventDefault();
                    event.stopPropagation();
                    next(this.root, ['gux-rich-style-list-item']);
                }
                break;
            case 'ArrowRight':
                event.stopPropagation();
                this.show();
                this.focusOnSubList();
                break;
            case 'ArrowLeft':
            case 'Escape':
                if (!(this.root === event.target)) {
                    event.stopPropagation();
                }
                this.buttonElement.focus();
                break;
        }
    }
    onMouseEnter() {
        this.show();
    }
    onMouseLeave() {
        this.hide();
    }
    onClick(event) {
        if (event.target.nodeName === 'GUX-RICH-STYLE-LIST-ITEM') {
            this.hide();
            return;
        }
    }
    onFocusIn() {
        this.show();
    }
    onFocusOut() {
        this.hide();
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
    focusOnSubList() {
        if (this.subListContentElement.contains(document.activeElement)) {
            return;
        }
        const listItems = Array.from(this.root.children);
        const nextFocusableElement = listItems[0];
        void nextFocusableElement.focus();
    }
    show() {
        this.isShown = true;
    }
    hide() {
        if (this.isShown) {
            this.isShown = false;
        }
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        if (this.root.isConnected) {
            this.cleanupUpdatePosition = autoUpdate(this.buttonElement, this.subListElement, () => this.updatePosition(), {
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
        if (this.subListElement) {
            void computePosition(this.buttonElement, this.subListElement, {
                placement: 'right-start',
                strategy: 'fixed',
                middleware: [offset(4), flip(), shift()]
            }).then(({ x, y }) => {
                Object.assign(this.subListElement.style, {
                    left: `${x}px`,
                    top: `${y}px`
                });
            });
        }
    }
    render() {
        return (h(Host, { key: '6c04828b2b70f3fb9501dc149fccf906666a9b9a' }, h("button", { key: '23cc870a28a4f7ede901e4977ddbe727967c50b0', type: "button", class: {
                'gux-sub-list-button': true,
                'gux-sub-list-button-active': this.isShown
            }, tabIndex: -1, role: "listitem", ref: el => (this.buttonElement = el), "aria-haspopup": "true", "aria-expanded": this.isShown.toString() }, h("span", { key: 'fcb2655ea9302ae41b18712cffdb77705b48f0ff', class: "gux-sub-list-button-text" }, this.label), h("gux-icon", { key: 'a550b458c0afa42304563a328f88640ff90f5450', size: "small", "icon-name": "custom/chevron-right-small-regular", decorative: true })), h("div", { key: '440e3e6c1a621789e057905ee827b7a44f5f8822', ref: el => (this.subListElement = el), class: {
                'gux-sub-list-wrapper': true,
                'gux-shown': this.isShown
            } }, h("div", { key: '8c754de0755b60681b218b992430bbe48df95928', role: "list", class: "gux-sub-list-content", ref: el => (this.subListContentElement = el) }, h("slot", { key: '78820afe906ef501b240082c6f105cc3f117da81' })))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxRichTextEditorSubList.style = guxRichTextEditorSubListCss;

export { GuxRichStyleListItem as gux_rich_style_list_item, GuxRichTextEditorMenu as gux_rich_text_editor_menu, GuxRichTextEditorSubList as gux_rich_text_editor_sub_list };
