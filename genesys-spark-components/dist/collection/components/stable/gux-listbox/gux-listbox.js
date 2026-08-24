import { h, Host } from "@stencil/core";
import { actOnActiveOption, clearActiveOptions, goToOption, hasActiveOption, hasPreviousOption, hasNextOption, getListOptions, onClickedOption, setFirstOptionActive, setInitialActiveOption, setLastOptionActive, setNextOptionActive, setPreviousOptionActive, matchOption, convertValueToArray } from "./gux-listbox.service";
import { optionTagSelector } from "./options/option-types";
import { buildI18nForComponent } from "../../../i18n";
import { whenEventIsFrom } from "../../../utils/dom/when-event-is-from";
import simulateNativeEvent from "../../../utils/dom/simulate-native-event";
import { trackComponent } from "../../../utils/tracking/usage";
import translationResources from "./i18n/en.json";
/**
 * The listbox component provides keyboard bindings and a11y patterns for selecting
 * from a list of options.
 *
 * @slot - collection of elements conforming to the ListboxOptionElement interface
 */
export class GuxListbox {
    constructor() {
        this.loading = false;
        this.filter = '';
        this.filterType = 'none';
        /* This is used by child components to keep track of this component's disabled state */
        this.disabled = false;
        this.selectedValues = [];
        this.listboxOptions = [];
    }
    onBlur() {
        clearActiveOptions(this.root);
    }
    onKeydown(event) {
        if (!hasActiveOption(this.root)) {
            event.preventDefault();
            setInitialActiveOption(this.root);
            return;
        }
        switch (event.key) {
            case 'Enter':
                event.preventDefault();
                actOnActiveOption(this.root, value => this.updateValue(value));
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
        switch (event.key) {
            case ' ':
                actOnActiveOption(this.root, value => this.updateValue(value));
                return;
        }
    }
    onMousemove() {
        clearActiveOptions(this.root);
    }
    onClick(event) {
        // If it's got a value attribute, that's good enough.
        whenEventIsFrom(optionTagSelector, event, (option) => {
            onClickedOption(option, value => this.updateValue(value));
        });
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSelectActive() {
        actOnActiveOption(this.root, value => this.updateValue(value));
    }
    setListboxOptions() {
        this.selectedValues = convertValueToArray(this.value);
        this.listboxOptions = getListOptions(this.root);
        this.internallistboxoptionsupdated.emit();
    }
    updateValue(newValue) {
        if (this.value !== newValue) {
            this.value = newValue;
        }
        simulateNativeEvent(this.root, 'input');
        simulateNativeEvent(this.root, 'change');
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.setListboxOptions();
    }
    componentWillRender() {
        this.listboxOptions.forEach(listboxOption => {
            listboxOption.selected = listboxOption.value === this.value;
            if (this.filterType !== 'custom' && this.filterType !== 'none') {
                listboxOption.filtered = !matchOption(listboxOption, this.filter);
            }
        });
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
        return [
            h("div", { class: "gux-message-container" }, h("div", { class: "gux-no-matches" }, this.emptyMessage || this.i18n('noMatches'))),
            this.renderHiddenSlot()
        ];
    }
    render() {
        if (this.loading) {
            return this.renderLoading();
        }
        if (this.allListboxOptionsFiltered) {
            return this.renderAllListboxOptionsFiltered();
        }
        return (h(Host, { role: "listbox", tabindex: 0 }, h("slot", { onSlotchange: () => this.setListboxOptions() })));
    }
    static get is() { return "gux-listbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-listbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-listbox.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
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
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": false,
                "defaultValue": "false"
            },
            "filter": {
                "type": "string",
                "attribute": "filter",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "filterType": {
                "type": "string",
                "attribute": "filter-type",
                "mutable": false,
                "complexType": {
                    "original": "GuxFilterTypes",
                    "resolved": "\"custom\" | \"none\" | \"starts-with\"",
                    "references": {
                        "GuxFilterTypes": {
                            "location": "import",
                            "path": "../gux-dropdown/gux-dropdown.types",
                            "id": "src/components/stable/gux-dropdown/gux-dropdown.types.ts::GuxFilterTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'none'"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": false,
                "defaultValue": "false"
            },
            "emptyMessage": {
                "type": "string",
                "attribute": "empty-message",
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
            "selectedValues": {},
            "listboxOptions": {},
            "allListboxOptionsFiltered": {}
        };
    }
    static get events() {
        return [{
                "method": "internallistboxoptionsupdated",
                "name": "internallistboxoptionsupdated",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "guxSelectActive": {
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
                "name": "blur",
                "method": "onBlur",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
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
                "name": "mousemove",
                "method": "onMousemove",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
