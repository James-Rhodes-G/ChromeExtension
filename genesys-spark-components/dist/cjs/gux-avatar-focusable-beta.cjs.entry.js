'use strict';

var index = require('./index-BLhHoh_r.js');
var logError = require('./log-error-nWO_o1C3.js');

const GuxAvatarFocusable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.validateSlot();
    }
    validateSlot() {
        var _a;
        this.slottedElement = this.root.querySelector('a, button, gux-avatar-change-photo-beta');
        if (this.slottedElement) {
            this.avatarElement = this.slottedElement.querySelector('gux-avatar-beta');
            if (!this.avatarElement) {
                logError.logWarn(this.root, 'Slotted element must contain a gux-avatar');
            }
        }
        else {
            logError.logWarn(this.root, 'An anchor tag, gux-avatar-change-photo-beta tag or button tag must be slotted into gux-avatar-focusable');
        }
        if (['A', 'BUTTON'].includes((_a = this.slottedElement) === null || _a === void 0 ? void 0 : _a.tagName)) {
            this.slottedElement.addEventListener('keyup', (event) => {
                this.handleKeyEvent(event);
            });
            this.slottedElement.addEventListener('focusout', () => {
                this.handleFocusOut();
            });
        }
    }
    disconnectedCallback() {
        var _a, _b, _c;
        if (['A', 'BUTTON'].includes((_a = this.slottedElement) === null || _a === void 0 ? void 0 : _a.tagName)) {
            (_b = this.slottedElement) === null || _b === void 0 ? void 0 : _b.removeEventListener('keyup', (event) => this.handleKeyEvent(event));
            (_c = this.slottedElement) === null || _c === void 0 ? void 0 : _c.removeEventListener('focusout', () => this.handleFocusOut());
        }
    }
    handleKeyEvent(event) {
        var _a, _b;
        switch (event.key) {
            case 'Tab': {
                if (this.slottedElement.matches(':focus-visible') &&
                    this.avatarElement) {
                    void ((_a = this.avatarElement) === null || _a === void 0 ? void 0 : _a.showTooltip());
                    this.hideTooltipTimeout = setTimeout(() => {
                        var _a;
                        void ((_a = this.avatarElement) === null || _a === void 0 ? void 0 : _a.hideTooltip());
                    }, 6000);
                }
                break;
            }
            default: {
                if (this.slottedElement.matches(':focus-visible') &&
                    this.avatarElement) {
                    void ((_b = this.avatarElement) === null || _b === void 0 ? void 0 : _b.hideTooltip());
                    clearTimeout(this.hideTooltipTimeout);
                }
                break;
            }
        }
    }
    handleFocusOut() {
        var _a;
        void ((_a = this.avatarElement) === null || _a === void 0 ? void 0 : _a.hideTooltip());
        clearTimeout(this.hideTooltipTimeout);
    }
    render() {
        return (index.h(index.Host, { key: 'c32aa2b991c4c8275379d174498c14715be4ebad' }, index.h("slot", { key: '93627d23004d26c9c8e72d6111a75c8585fa3f43' })));
    }
    get root() { return index.getElement(this); }
};

exports.gux_avatar_focusable_beta = GuxAvatarFocusable;
