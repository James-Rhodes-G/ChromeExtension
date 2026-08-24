var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host } from "@stencil/core";
import { autoUpdate, computePosition, offset } from "@floating-ui/dom";
import { OnClickOutside } from "../../../../utils/decorator/on-click-outside";
import { trackComponent } from "../../../../utils/tracking/usage";
import { logWarn } from "../../../../utils/error/log-error";
import { groupKeyboardNavigation } from "../gux-avatar-group.service";
import { afterNextRenderTimeout } from "../../../../utils/dom/after-next-render";
/**
 * @slot - a number of gux-avatar-overflow-items
 */
export class GuxAvatarOverflow {
    constructor() {
        this.delayTime = 250;
        this.count = 0;
        this.expanded = false;
    }
    async componentWillLoad() {
        trackComponent(this.root);
    }
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
        clearTimeout(this.focusDelayTimeout);
        clearTimeout(this.hideDelayTimeout);
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    onClickOutside() {
        this.expanded = false;
    }
    onKeydown(event) {
        groupKeyboardNavigation(event, this.root);
        switch (event.key) {
            case 'Escape': {
                this.hide();
                const target = event.target;
                if (target.tagName === 'GUX-AVATAR-OVERFLOW-ITEM-BETA') {
                    this.focusDelayTimeout = afterNextRenderTimeout(() => {
                        var _a;
                        (_a = this.overflowButtonElement) === null || _a === void 0 ? void 0 : _a.focus();
                    });
                }
                break;
            }
            case 'Tab':
                this.hide();
                break;
        }
    }
    onClick(e) {
        e.stopPropagation();
        const target = e.target;
        if (target.tagName === 'GUX-AVATAR-OVERFLOW-ITEM-BETA') {
            // Reset scroll on menu when clicked to avoid scroll jump when reopened
            this.menuElement.scrollTop = 0;
            this.expanded = false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxClose() {
        this.hide();
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        if (this.root.isConnected) {
            this.cleanupUpdatePosition = autoUpdate(this.overflowButtonElement, this.menuElement, () => this.updatePosition(), {
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
            void computePosition(this.overflowButtonElement, this.menuElement, {
                placement: 'bottom-start',
                strategy: 'fixed',
                middleware: [
                    offset({
                        mainAxis: 4,
                        crossAxis: 4
                    })
                ]
            }).then(({ x, y }) => {
                Object.assign(this.menuElement.style, {
                    left: `${x}px`,
                    top: `${y}px`
                });
            });
        }
    }
    getCount() {
        const menuItems = Array.from(this.root.children);
        if (menuItems.some(item => item.tagName !== 'GUX-AVATAR-OVERFLOW-ITEM-BETA')) {
            logWarn(this.root, 'Only gux-avatar-overflow-item-beta elements are allowed as children.');
        }
        if (menuItems) {
            return menuItems.length;
        }
    }
    toggleOverflowMenu() {
        if (!this.expanded) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    show() {
        clearTimeout(this.hideDelayTimeout);
        this.expanded = true;
        this.hideDelayTimeout = afterNextRenderTimeout(() => {
            this.focusOnMenu();
        });
    }
    hide() {
        if (this.expanded) {
            this.hideDelayTimeout = setTimeout(() => {
                this.expanded = false;
            }, this.delayTime);
        }
    }
    focusOnMenu() {
        const overflowItems = Array.from(this.root.children);
        const nextFocusableElement = overflowItems[0];
        void nextFocusableElement.focus();
    }
    render() {
        return (h(Host, { key: '289b013c9d67271a08acc35a6f61cd90d2e733c5', role: "menuitem" }, h("button", { key: '48465ecf48d5f3a72924b6d4bb6d029550839367', class: "gux-avatar-overflow", ref: el => (this.overflowButtonElement = el), onClick: () => this.toggleOverflowMenu(), tabIndex: -1, "aria-haspopup": "true", "aria-expanded": this.expanded.toString() }, h("span", { key: '6743688d97606a5524c9746d2e808c2224106628', class: "gux-avatar-overflow-wrapper" }, h("span", { key: 'c8cf521169d3b6999d70d12bf95f902f7c2910a9', class: "gux-avatar-overflow-content" }, " +", this.getCount()))), h("div", { key: '6c9081633ec976b9fb380ee5c1fd77f2a71b424b', class: {
                'gux-menu-wrapper': true,
                'gux-shown': this.expanded
            }, ref: el => (this.menuElement = el) }, h("div", { key: 'f99f53607731b8121276ca8f9b1469ef980f2601', role: "menu", class: "gux-menu-content" }, h("slot", { key: 'e82d2ac9cf9f02d0acdbebb29a5dfd8df31e4d72' })))));
    }
    static get is() { return "gux-avatar-overflow-beta"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-avatar-overflow.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-avatar-overflow.css"]
        };
    }
    static get states() {
        return {
            "count": {},
            "expanded": {}
        };
    }
    static get methods() {
        return {
            "guxClose": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
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
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxAvatarOverflow.prototype, "onClickOutside", null);
