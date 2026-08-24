import { autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
import { Host, h } from "@stencil/core";
import { next, previous } from "../../../../stable/gux-list/gux-list.service";
/**
 * @slot - collection of gux-rich-style-list-item elements.
 */
export class GuxRichTextEditorSubList {
    constructor() {
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
    static get is() { return "gux-rich-text-editor-sub-list"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-text-editor-sub-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-text-editor-sub-list.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
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
                "name": "mouseenter",
                "method": "onMouseEnter",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseleave",
                "method": "onMouseLeave",
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
                "method": "onFocusIn",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusOut",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
