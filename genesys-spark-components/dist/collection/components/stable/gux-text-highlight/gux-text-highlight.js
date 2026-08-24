import { h } from "@stencil/core";
import { getFuzzyReplacements, matchesFuzzy } from "../../../utils/string/search";
import { trackComponent } from "../../../utils/tracking/usage";
export class GuxTextHighlight {
    constructor() {
        /**
         * The way the text should be highlighted.
         */
        this.strategy = 'start';
        /**
         * The highlight color should be dimmed
         */
        this.dimmed = false;
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        if (this.highlight && this.text) {
            switch (this.strategy) {
                case 'start':
                    return this.renderStartsWith();
                case 'contains':
                    return this.renderContains();
                case 'fuzzy':
                    return this.renderFuzzy();
            }
        }
        return (h("span", { class: { 'gux-dimmed': this.dimmed } }, this.text));
    }
    renderStartsWith() {
        if (this.text.toLowerCase().startsWith(this.highlight.toLowerCase())) {
            const highlight = this.text.substring(0, this.highlight.length);
            const after = this.text.substring(this.highlight.length);
            return (h("span", { class: { 'gux-dimmed': this.dimmed } }, h("mark", null, highlight), after));
        }
        return (h("span", { class: { 'gux-dimmed': this.dimmed } }, this.text));
    }
    renderContains() {
        const html = {
            highlighted: '',
            remaining: this.text
        };
        while (html.remaining.toLowerCase().includes(this.highlight.toLowerCase())) {
            const index = html.remaining
                .toLowerCase()
                .indexOf(this.highlight.toLowerCase());
            const before = html.remaining.substring(0, index);
            const highlight = html.remaining.substring(index, index + this.highlight.length);
            html.highlighted += before + `<mark>${highlight}</mark>`;
            html.remaining = html.remaining.substring(index + highlight.length);
        }
        return (h("span", { class: { 'gux-dimmed': this.dimmed }, innerHTML: html.highlighted + html.remaining }));
    }
    renderFuzzy() {
        if (matchesFuzzy(this.highlight, this.text)) {
            const html = getFuzzyReplacements(this.highlight).reduce((acc, needle) => {
                const { 0: highlight, index, input } = acc.remaining.match(needle);
                const before = input.substring(0, index);
                const highlighted = `${acc.highlighted + before}<mark>${highlight}</mark>`;
                const remaining = input.substring(index + highlight.length);
                return { highlighted, remaining };
            }, {
                highlighted: '',
                remaining: this.text
            });
            return (h("span", { class: { 'gux-dimmed': this.dimmed }, innerHTML: html.highlighted + html.remaining }));
        }
        return (h("span", { class: { 'gux-dimmed': this.dimmed } }, this.text));
    }
    static get is() { return "gux-text-highlight"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-text-highlight.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-text-highlight.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The value to display."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "highlight": {
                "type": "string",
                "attribute": "highlight",
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
                    "text": "The text to highlight."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "strategy": {
                "type": "string",
                "attribute": "strategy",
                "mutable": false,
                "complexType": {
                    "original": "GuxTextHighlightStrategy",
                    "resolved": "\"contains\" | \"fuzzy\" | \"start\"",
                    "references": {
                        "GuxTextHighlightStrategy": {
                            "location": "import",
                            "path": "./gux-text-highlight.types",
                            "id": "src/components/stable/gux-text-highlight/gux-text-highlight.types.ts::GuxTextHighlightStrategy"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The way the text should be highlighted."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'start'"
            },
            "dimmed": {
                "type": "boolean",
                "attribute": "dimmed",
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
                    "text": "The highlight color should be dimmed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "root"; }
}
