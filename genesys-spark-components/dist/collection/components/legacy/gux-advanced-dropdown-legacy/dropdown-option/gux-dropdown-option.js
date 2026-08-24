import { h } from "@stencil/core";
// RegExp escape string from http://stackoverflow.com/a/3561711/23528
const escapeRegexStr = /[-/\\^$*+?.()|[\]{}]/g;
function escapeRegex(input) {
    return input.replace(escapeRegexStr, '\\$&');
}
export class GuxDropdownOption {
    /**
     * Gets the value rendered by the drop down item.
     */
    getDisplayedValue() {
        return Promise.resolve(this.text);
    }
    /**
     * Determines if the search input matches this option.
     *
     * @param searchInput The input string being searched for.
     */
    shouldFilter(searchInput) {
        this.highlight = searchInput;
        this.highlightIndex = -1;
        if (!searchInput) {
            return Promise.resolve(false);
        }
        const regex = new RegExp(escapeRegex(searchInput), 'gi');
        const regexResult = regex.exec(this.text);
        const filter = regexResult === null;
        if (!filter) {
            this.highlightIndex = regexResult.index;
        }
        return Promise.resolve(filter);
    }
    componentDidLoad() {
        this.root.onclick = () => {
            this.onItemClicked();
        };
        this.root.onkeydown = (e) => {
            switch (e.key) {
                case ' ':
                case 'Enter':
                    this.selected = true;
                    this.selectedChanged.emit(this.value);
                    break;
            }
        };
    }
    hostData() {
        return {
            tabindex: '0'
        };
    }
    render() {
        return (h("div", { key: '5e04a1dcfcfc30f675e15113f6d6bb61c1d90b51', class: "gux-dropdown-option", title: this.text }, this.textWithHighlights()));
    }
    textWithHighlights() {
        if (!this.highlight || !this.text) {
            return (h("span", null, this.text));
        }
        if (this.highlightIndex < 0) {
            return (h("span", null, this.text));
        }
        const preface = this.text.substring(0, this.highlightIndex);
        const actualHighlight = this.text.substring(this.highlightIndex, this.highlightIndex + this.highlight.length);
        const suffix = this.text.substring(preface.length + this.highlight.length);
        return (h("span", null, preface, h("strong", null, actualHighlight), suffix));
    }
    onItemClicked() {
        this.selected = true;
        this.selectedChanged.emit(this.value);
    }
    static get is() { return "gux-dropdown-option"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-dropdown-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-dropdown-option.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "The content of this attribute represents the value to be submitted on 'input' changes,\nshould this option be selected. If this attribute is omitted, the value is taken from\nthe text content of the option element."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "If this Boolean attribute is set, this option is not checkable. It won't receive any\nbrowsing events, like mouse clicks or focus-related ones."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "filtered": {
                "type": "boolean",
                "attribute": "filtered",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If this Boolean attribute is set, the option is not visible to the select control.\nThis does not mean that it clears the selection if it was previously selected.\n\nShould only be used by internal users."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If present, this Boolean attribute indicates that the option is currently selected."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
            "highlight": {}
        };
    }
    static get events() {
        return [{
                "method": "selectedChanged",
                "name": "selectedChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Occurs when the item has been selected."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "getDisplayedValue": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "Gets the value rendered by the drop down item.",
                    "tags": []
                }
            },
            "shouldFilter": {
                "complexType": {
                    "signature": "(searchInput: string) => Promise<boolean>",
                    "parameters": [{
                            "name": "searchInput",
                            "type": "string",
                            "docs": "The input string being searched for."
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Determines if the search input matches this option.",
                    "tags": [{
                            "name": "param",
                            "text": "searchInput The input string being searched for."
                        }]
                }
            }
        };
    }
    static get elementRef() { return "root"; }
}
