import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const conversion = /[ +]/g;
const expressions = new Map();
const replacements = new Map();
function matchesFuzzy(sourceWord, targetWord) {
    let exp = expressions.get(sourceWord);
    if (!exp) {
        exp = convertToRegex(sourceWord);
        expressions.set(sourceWord, exp);
    }
    return exp.test(targetWord);
}
function getFuzzyReplacements(sourceWord) {
    return sourceWord
        .split(conversion)
        .map(makeRegexSafe)
        .map(word => {
        let exp = replacements.get(word);
        if (!exp) {
            exp = new RegExp(word, 'i');
            replacements.set(word, exp);
        }
        return exp;
    });
}
function makeRegexSafe(str) {
    return str.replace(/[\^$*+?.(){}[\]\\]/g, '\\$&');
}
function convertToRegex(word) {
    const parts = word.split(conversion).map(makeRegexSafe);
    if (parts.length === 1) {
        return new RegExp(parts[0], 'i');
    }
    let newexp = `(`;
    parts.forEach((part, index) => {
        newexp += part + ').*';
        if (index !== parts.length - 1) {
            newexp += `(`;
        }
    });
    return new RegExp(newexp + '$', 'i');
}

const guxTextHighlightCss = "span mark{background-color:var(--gse-ui-search-match-firstLevel-backgroundColor)}.gux-dimmed mark{background-color:var(--gse-ui-search-match-subsequentLevel-backgroundColor)}";

const GuxTextHighlight = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get root() { return getElement(this); }
};
GuxTextHighlight.style = guxTextHighlightCss;

export { GuxTextHighlight as gux_text_highlight };
