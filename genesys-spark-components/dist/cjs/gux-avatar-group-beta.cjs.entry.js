'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var logError = require('./log-error-nWO_o1C3.js');
var guxAvatarGroup_service = require('./gux-avatar-group.service-BdqLlCpg.js');
require('./get-closest-element-CfyZl7i7.js');

const guxAvatarGroupCss = ":host{display:flex;align-items:center;inline-size:fit-content;padding-block:var(--gse-semantic-interactive-sm-padding);padding-inline:var(--gse-semantic-interactive-sm-padding) var(--gse-semantic-interactive-md-padding)}:host(:focus-visible){outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-add-item-overflow{padding-inline-start:calc(var(--gse-core-spacing-4xs) + 2px)}";

const GuxAvatarGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.processedGroupItems = [];
        this.quantity = 7;
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.quantity.toString() });
    }
    componentDidLoad() {
        this.setInitialFocusTarget();
    }
    componentWillRender() {
        this.processGroupItems();
        this.hideOverflowGroupItems();
    }
    onMouseOver(event) {
        this.hideCurrentTooltip(event);
    }
    getGroupItems() {
        return Array.from(this.root.children);
    }
    setInitialFocusTarget() {
        const groupItems = this.getGroupItems();
        if (groupItems.length > 0) {
            const firstGroupItem = groupItems[0];
            guxAvatarGroup_service.setFocusTarget(firstGroupItem);
        }
    }
    processGroupItems() {
        const groupItems = this.getGroupItems();
        this.validateChildElements(groupItems);
        this.processedGroupItems = groupItems.map((item, index) => {
            var _a, _b, _c;
            return {
                img: (_a = item.querySelector('img')) !== null && _a !== void 0 ? _a : null,
                name: (_b = item === null || item === void 0 ? void 0 : item.name) !== null && _b !== void 0 ? _b : '',
                accent: (_c = item === null || item === void 0 ? void 0 : item.accent) !== null && _c !== void 0 ? _c : null,
                isOverflow: index >= this.quantity,
                groupItem: item
            };
        });
    }
    hideOverflowGroupItems() {
        const overflowItems = this.processedGroupItems.filter(item => item.isOverflow);
        overflowItems.forEach(item => {
            item.groupItem.setAttribute('hidden', '');
        });
    }
    hideCurrentTooltip(event) {
        const target = event.target;
        const groupItems = this.getGroupItems();
        const addToGroup = this.root.shadowRoot.querySelector('gux-avatar-group-add-item-beta');
        const itemsWithTooltip = [...groupItems, addToGroup];
        const focusedChild = itemsWithTooltip.find(child => child === null || child === void 0 ? void 0 : child.matches(':focus-within'));
        if (focusedChild && focusedChild !== target) {
            focusedChild.hideTooltip();
        }
    }
    handleClick(event) {
        const clickedElement = event.target;
        if (clickedElement.tagName === 'GUX-AVATAR-GROUP-ITEM-BETA' &&
            !clickedElement.hasAttribute('hidden')) {
            guxAvatarGroup_service.resetFocusableSibling(clickedElement);
            guxAvatarGroup_service.setFocusTarget(clickedElement);
        }
    }
    validateChildElements(childElements) {
        if (childElements.length === 0) {
            logError.logWarn(this.root, 'gux-avatar-group-beta: No child elements detected. Please add some gux-avatar-item-beta tags to slot');
        }
        const validTagNames = [
            'GUX-AVATAR-GROUP-ITEM-BETA',
            'GUX-AVATAR-GROUP-ADD-ITEM-BETA',
            'GUX-AVATAR-OVERFLOW-BETA'
        ];
        const invalidElements = childElements.some(el => !validTagNames.includes(el.tagName));
        if (invalidElements) {
            logError.logWarn(this.root, 'gux-avatar-group-beta: Invalid child element detected. All child elements must be either buttons, anchor tags or gux-avatar-beta components');
        }
    }
    renderOverflowMenu() {
        if (this.root.children.length > this.quantity) {
            const overflowItems = this.processedGroupItems.filter(item => item.isOverflow &&
                item.groupItem.tagName === 'GUX-AVATAR-GROUP-ITEM-BETA');
            return (index.h("gux-avatar-overflow-beta", null, overflowItems.map(item => {
                var _a, _b;
                return (index.h("gux-avatar-overflow-item-beta", { name: item.name, accent: item.accent, onClick: () => item.groupItem.click() }, item.img ? (index.h("img", { slot: "image", src: (_a = item.img) === null || _a === void 0 ? void 0 : _a.src, alt: (_b = item.img) === null || _b === void 0 ? void 0 : _b.alt })) : null));
            })));
        }
        else {
            return null;
        }
    }
    renderAddToGroup() {
        const hasAddToGroup = this.processedGroupItems.find(item => item.groupItem.tagName === 'GUX-AVATAR-GROUP-ADD-ITEM-BETA');
        if (hasAddToGroup && this.root.children.length > this.quantity) {
            return (index.h("gux-avatar-group-add-item-beta", { class: "gux-add-item-overflow" }));
        }
        else {
            return null;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'caff2d754008cd36ad51558e76d5230b9cfd4168', role: "menu", onClick: this.handleClick.bind(this) }, index.h("slot", { key: 'a9a03fb8a3eb866785c032c0ca2037f1cc8a0833' }), this.renderOverflowMenu(), this.renderAddToGroup()));
    }
    get root() { return index.getElement(this); }
};
GuxAvatarGroup.style = guxAvatarGroupCss;

exports.gux_avatar_group_beta = GuxAvatarGroup;
