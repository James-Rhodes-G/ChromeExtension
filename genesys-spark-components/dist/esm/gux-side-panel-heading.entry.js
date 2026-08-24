import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxSidePanelHeadingCss = ":host{display:block}h1,h2,h3,h4,h5,h6{display:flex;flex:0 0 auto;gap:var(--gse-ui-sidePanel-header-iconGap);align-items:center;inline-size:100%;padding:0;margin:0;font-family:var(--gse-ui-sidePanel-heading-text-fontFamily);font-size:var(--gse-ui-sidePanel-heading-text-fontSize);font-weight:var(--gse-ui-sidePanel-heading-text-fontWeight);line-height:var(--gse-ui-sidePanel-heading-text-lineHeight);color:var(--gse-ui-sidePanel-headerColor)}";

const GuxSidePanelHeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Heading level, 1-6.
         */
        this.level = 1;
    }
    componentWillLoad() {
        trackComponent(this.root);
        this.headingTag = `h${this.level}`;
    }
    render() {
        return (h(this.headingTag, { key: 'e541b6cece24122f1129d9991a21f181c50d5c10' }, this.iconName && (h("gux-icon", { key: 'd1fa01f7b0bd0c3ef624732c00706054c36e2031', decorative: true, size: "medium", "icon-name": this.iconName })), h("gux-truncate", { key: 'bd0d23e52850a7f7cdd75e7029d29ad1bc61f1af' }, h("slot", { key: '723db6a92fc63ae8b5a46fcc732d43c2c7d79a86' }))));
    }
    get root() { return getElement(this); }
};
GuxSidePanelHeading.style = guxSidePanelHeadingCss;

export { GuxSidePanelHeading as gux_side_panel_heading };
