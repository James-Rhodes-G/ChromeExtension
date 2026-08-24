'use strict';

var index = require('./index-BLhHoh_r.js');
var onMutation = require('./on-mutation-MIY4v9bf.js');

const guxOptionGroupCss = ".gux-option-group{display:block;flex:1 1 auto;align-self:auto}.gux-option-group .gux-option-group-label{display:block;padding:var(--gse-ui-menu-groupedMenu-title-padding);color:var(--gse-ui-menu-groupedMenu-title-foregroundColor);font-family:var(--gse-semantic-heading-overline-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-overline-fontSize);line-height:var(--gse-semantic-heading-overline-lineHeight);text-transform:var(--gse-semantic-heading-overline-textCase);letter-spacing:var(--gse-semantic-heading-overline-letterSpacing);font-weight:var(--gse-semantic-heading-overline-fontWeight)}:host(.gux-filtered){display:none}";

const GuxOptionGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // @Prop()
        // disabled: boolean;
        // TOOD: GDS-2328
        this.filtered = false;
        this.showDivider = true;
    }
    componentDidLoad() {
        this.rootParent = this.root.parentNode;
        if (this.rootParent) {
            this.parentObserver = onMutation.onMutation(this.rootParent, () => {
                var _a;
                const visibleOptions = Array.from((_a = this.root) === null || _a === void 0 ? void 0 : _a.children).filter((child) => this.isOption(child) && !child.filtered).length > 0;
                this.filtered = !visibleOptions;
                if (!this.filtered) {
                    this.showDivider =
                        this.hasVisibleNextSibling(this.root) && visibleOptions;
                }
            });
        }
    }
    disconnectedCallback() {
        if (this.rootParent) {
            this.parentObserver.disconnect();
        }
    }
    isOption(item) {
        const optionTypes = ['GUX-OPTION', 'GUX-OPTION-ICON'];
        return optionTypes.includes(item.tagName);
    }
    hasVisibleNextSibling(element) {
        let nextOption = element.nextElementSibling;
        if (nextOption === null) {
            return false;
        }
        while (nextOption && nextOption.classList.contains('gux-filtered')) {
            nextOption = nextOption.nextElementSibling;
        }
        return Boolean(nextOption);
    }
    renderDivider() {
        if (this.showDivider) {
            return (index.h("gux-list-divider", null));
        }
    }
    render() {
        return (index.h(index.Host, { key: 'd9e11e6d18f276576a4f7c935dd7aec903cfab7a', class: { 'gux-filtered': this.filtered } }, index.h("div", { key: '248400d1b8dee6df27cc3033273436eb600b4c4c', class: "gux-option-group" }, index.h("div", { key: '262994ef17a5b1b07a32865df907cfc66d940c61', class: "gux-option-group-label", role: "presentation" }, this.label), index.h("div", { key: '096d8807a3246c8a884104ebecdf420c823ed8f8', role: "group" }, index.h("slot", { key: 'abe716d70cd0964e69a07aef07d346c0ccb24015' })), this.renderDivider())));
    }
    get root() { return index.getElement(this); }
};
GuxOptionGroup.style = guxOptionGroupCss;

exports.gux_option_group_beta = GuxOptionGroup;
