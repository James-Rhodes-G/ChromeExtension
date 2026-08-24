import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { a as logError } from './log-error-DxtJDeL9.js';

const guxBreadcrumbItemCss = ".gux-breadcrumb-generation{display:flex;flex-direction:row;flex-wrap:nowrap;place-content:flex-start flex-start;align-items:center;min-block-size:var(--gse-ui-breadcrumbs-secondary-height)}.gux-breadcrumb-generation .gux-breadcrumb-content{font-family:var(--gse-ui-links-inLine-small-text-fontFamily);font-size:var(--gse-ui-links-inLine-small-text-fontSize);font-weight:var(--gse-ui-links-inLine-small-text-fontWeight);line-height:var(--gse-ui-links-inLine-small-text-lineHeight);text-decoration:none;color:var(--gse-ui-links-default-foregroundColor);pointer-events:none}.gux-breadcrumb-generation .gux-breadcrumb-content.gux-active{color:var(--gse-ui-links-active-foregroundColor)}.gux-breadcrumb-generation .gux-breadcrumb-separator{padding:var(--gse-ui-breadcrumbs-secondary-separator-padding);font-family:var(--gse-ui-breadcrumbs-secondary-separator-typography-fontFamily);font-size:var(--gse-ui-breadcrumbs-secondary-separator-typography-fontSize);font-weight:var(--gse-ui-breadcrumbs-secondary-separator-typography-fontWeight);line-height:var(--gse-ui-breadcrumbs-secondary-separator-typography-lineHeight);color:var(--gse-ui-breadcrumbs-separator-color)}.gux-breadcrumb-generation.gux-primary{min-block-size:var(--gse-ui-breadcrumbs-primary-height)}.gux-breadcrumb-generation.gux-primary .gux-breadcrumb-content{font-family:var(--gse-ui-links-inLine-medium-text-fontFamily);font-size:var(--gse-ui-links-inLine-medium-text-fontSize);font-weight:var(--gse-ui-links-inLine-medium-text-fontWeight);line-height:var(--gse-ui-links-inLine-medium-text-lineHeight);text-decoration:none}.gux-breadcrumb-generation.gux-primary .gux-breadcrumb-separator{padding:var(--gse-ui-breadcrumbs-primary-separator-padding);font-family:var(--gse-ui-breadcrumbs-primary-separator-typography-fontFamily);font-size:var(--gse-ui-breadcrumbs-primary-separator-typography-fontSize);font-weight:var(--gse-ui-breadcrumbs-primary-separator-typography-fontWeight);line-height:var(--gse-ui-breadcrumbs-primary-separator-typography-lineHeight)}";

const GuxBreadcrumbItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getAccent() {
        const container = this.root.closest('gux-breadcrumbs');
        if (container) {
            return container.accent;
        }
        else {
            logError(this.root, 'This component must be a child of a gux-breadcrumbs component.');
        }
    }
    isActiveBreadcrumb() {
        const parentNode = this.root.parentNode;
        const children = parentNode.children;
        return children[children.length - 1] === this.root;
    }
    getBreadcrumb(accent) {
        if (this.isActiveBreadcrumb()) {
            return (h("span", { class: "gux-breadcrumb-content gux-active", "aria-current": "page" }, h("slot", null)));
        }
        if (this.href) {
            return (h("gux-link-beta", { size: accent === 'secondary' ? 'small' : 'medium', standalone: true }, h("a", { href: this.href }, h("slot", null))));
        }
        return (h("span", { class: "gux-breadcrumb-content" }, h("slot", null)));
    }
    getSeparatorIcon() {
        if (this.isActiveBreadcrumb()) {
            return null;
        }
        return (h("span", { class: "gux-breadcrumb-separator", "aria-hidden": "true" }, "/"));
    }
    render() {
        const accent = this.getAccent();
        return (h(Host, { key: '9864718c7a85867dc8ae13c77b71ee2d47595345', role: "listitem" }, h("span", { key: '321aa9a3d13bc88107c1f4296b8acbb0194ebb2b', class: `gux-breadcrumb-generation gux-${accent}` }, this.getBreadcrumb(accent), this.getSeparatorIcon())));
    }
    get root() { return getElement(this); }
};
GuxBreadcrumbItem.style = guxBreadcrumbItemCss;

export { GuxBreadcrumbItem as gux_breadcrumb_item };
