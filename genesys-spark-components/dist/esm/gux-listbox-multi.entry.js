import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { d as clearActiveOptions, h as hasActiveOption, s as setInitialActiveOption, e as setLastOptionActive, f as setFirstOptionActive, i as hasPreviousOption, j as setPreviousOptionActive, k as hasNextOption, l as setNextOptionActive, m as actOnActiveOption, n as goToOption, o as onClickedOption, c as convertValueToArray, a as getOptionDefaultSlot } from './gux-listbox.service-B_WlCjG2.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { w as whenEventIsFrom } from './when-event-is-from-kLXvN2m9.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import './get-closest-element-Cd4R0amv.js';

const add = "Add {name}";
const noMatches = "No matches";
const loading = "Loading...";
var translationResources = {
	add: add,
	noMatches: noMatches,
	loading: loading
};

const guxListboxMultiCss = ":host{box-sizing:border-box;display:block;max-block-size:var(--gse-ui-menu-maxHeight);padding:var(--gse-ui-menu-padding);overflow:hidden auto;outline:none;scrollbar-color:var(--gse-ui-menu-scrollbar-foregroundColor);background:var(--gse-ui-menu-backgroundColor);border:var(--gse-ui-menu-border-width) var(--gse-ui-menu-border-style) var(--gse-ui-menu-border-color);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}.gux-message-container{display:flex;flex-direction:column;flex-wrap:nowrap;place-content:stretch center;align-items:center}.gux-message-container .gux-no-matches{box-sizing:border-box;block-size:var(--gse-ui-menu-option-height);padding-block:var(--gse-ui-dropdown-gap);font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor)}";

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
const GuxListboxMulti = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internallistboxoptionsupdated = createEvent(this, "internallistboxoptionsupdated", 7);
        this.loading = false;
        this.filter = '';
        this.textInput = '';
        this.filterType = 'none';
        /* This is used by child components to keep track of this component's disabled state */
        this.disabled = false;
        this.listboxOptions = [];
        this.hasExactMatch = false;
    }
    onMutation() {
        afterNextRender(() => {
            this.updateOnSlotChange();
        });
    }
    onBlur() {
        clearActiveOptions(this.root);
    }
    selectNewCustomOption(event) {
        this.updateValue(event.detail);
    }
    onKeydown(event) {
        var _a;
        if (!hasActiveOption(this.root)) {
            event.preventDefault();
            setInitialActiveOption(this.root);
            return;
        }
        switch (event.key) {
            case 'Enter':
                event.preventDefault();
                if ((_a = this.optionCreateElement) === null || _a === void 0 ? void 0 : _a.active) {
                    void this.optionCreateElement.guxEmitInternalCreateNewOption();
                    afterNextRender(() => {
                        setInitialActiveOption(this.root);
                    });
                }
                else {
                    actOnActiveOption(this.root, value => this.updateValue(value));
                }
                return;
            case 'ArrowDown':
                event.preventDefault();
                if (hasNextOption(this.root)) {
                    event.stopPropagation();
                    setNextOptionActive(this.root);
                }
                else {
                    setFirstOptionActive(this.root);
                }
                return;
            case 'ArrowUp': {
                event.preventDefault();
                if (hasPreviousOption(this.root)) {
                    event.stopPropagation();
                    setPreviousOptionActive(this.root);
                }
                else {
                    setLastOptionActive(this.root);
                }
                return;
            }
            case 'Home': {
                event.preventDefault();
                setFirstOptionActive(this.root);
                return;
            }
            case 'End': {
                event.preventDefault();
                setLastOptionActive(this.root);
                return;
            }
            case ' ': {
                event.preventDefault();
                return;
            }
        }
        if (event.key.length === 1) {
            goToOption(this.root, event.key);
            return;
        }
    }
    onKeyup(event) {
        var _a;
        switch (event.key) {
            case ' ':
                if ((_a = this.optionCreateElement) === null || _a === void 0 ? void 0 : _a.active) {
                    void this.optionCreateElement.guxEmitInternalCreateNewOption();
                    afterNextRender(() => {
                        setInitialActiveOption(this.root);
                    });
                }
                else {
                    actOnActiveOption(this.root, value => this.updateValue(value));
                }
                return;
        }
    }
    onMousemove() {
        clearActiveOptions(this.root);
    }
    onClick(event) {
        whenEventIsFrom('gux-option-multi', event, (option) => {
            onClickedOption(option, value => this.updateValue(value));
        });
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSelectActive() {
        actOnActiveOption(this.root, value => this.updateValue(value));
    }
    getHasExactMatch() {
        let hasExactMatch = false;
        this.hasExactMatch = false;
        this.listboxOptions.forEach(listboxOption => {
            var _a, _b;
            if (((_b = (_a = listboxOption.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.trim()) ==
                this.textInput.toLowerCase().trim()) {
                hasExactMatch = true;
                this.hasExactMatch = true;
            }
        });
        return hasExactMatch;
    }
    updateOptionMultiCreateValue() {
        if (this.optionCreateElement) {
            this.optionCreateElement.value = this.textInput;
            this.optionCreateElement.filtered =
                !this.textInput || this.getHasExactMatch();
        }
    }
    // value as an array
    getSelectedValues() {
        return convertValueToArray(this.value);
    }
    updateOnSlotChange() {
        this.setListboxOptions();
        this.updateListboxOptions();
    }
    getOptionCreateElement() {
        this.optionCreateElement = this.root.querySelector('gux-create-option');
    }
    // get list of listbox option elements
    setListboxOptions() {
        this.listboxOptions = Array.from(this.root.children).filter(element => element.tagName === 'GUX-OPTION-MULTI');
        this.internallistboxoptionsupdated.emit();
    }
    updateListboxOptions() {
        this.listboxOptions.forEach(listboxOption => {
            var _a;
            listboxOption.selected = this.getSelectedValues().includes(listboxOption.value);
            if (this.filterType !== 'custom' && this.filterType !== 'none') {
                listboxOption.filtered = !((_a = getOptionDefaultSlot(listboxOption)) === null || _a === void 0 ? void 0 : _a.textContent.trim().toLowerCase().startsWith(this.textInput.toLowerCase()));
            }
        });
    }
    updateValue(newValue) {
        if (!this.getSelectedValues().includes(newValue)) {
            const newArray = [...this.getSelectedValues(), newValue];
            this.value = newArray.join(',');
        }
        else {
            const newArray = this.getSelectedValues().filter(e => e !== newValue);
            this.value = newArray.length ? newArray.join(',') : undefined;
        }
        simulateNativeEvent(this.root, 'input');
        simulateNativeEvent(this.root, 'change');
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.setListboxOptions();
        this.getOptionCreateElement();
    }
    componentWillRender() {
        this.setListboxOptions();
        this.updateListboxOptions();
        this.allListboxOptionsFiltered =
            this.listboxOptions.filter(listboxOption => !listboxOption.filtered)
                .length === 0;
    }
    // The slot must always be rendered so onSlotchange can be called
    renderHiddenSlot() {
        return (h("div", { hidden: true }, h("slot", { onSlotchange: () => this.setListboxOptions() })));
    }
    renderLoading() {
        return [
            h("div", { class: "gux-message-container" }, h("gux-radial-loading", { context: "modal" }), h("span", null, this.i18n('loading'))),
            this.renderHiddenSlot()
        ];
    }
    renderAllListboxOptionsFiltered() {
        if (this.allListboxOptionsFiltered) {
            return [
                h("div", { class: "gux-message-container" }, h("div", { class: "gux-no-matches" }, this.emptyMessage || this.i18n('noMatches'))),
                this.renderHiddenSlot()
            ];
        }
    }
    renderCreateOptionSlot() {
        return (h("slot", { name: "create" }));
    }
    render() {
        if (this.loading) {
            return this.renderLoading();
        }
        return (h(Host, { role: "listbox", "aria-multiselectable": "true", tabindex: 0 }, h("slot", { onSlotchange: () => this.updateOnSlotChange() }), this.renderAllListboxOptionsFiltered(), this.renderCreateOptionSlot()));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "textInput": ["updateOptionMultiCreateValue"]
    }; }
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxListboxMulti.prototype, "onMutation", null);
GuxListboxMulti.style = guxListboxMultiCss;

export { GuxListboxMulti as gux_listbox_multi };
