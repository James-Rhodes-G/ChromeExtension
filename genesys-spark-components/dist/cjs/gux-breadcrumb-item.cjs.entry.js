'use strict';

var index = require('./index-BLhHoh_r.js');
var logError = require('./log-error-nWO_o1C3.js');

const guxBreadcrumbItemCss = ".gux-breadcrumb-generation{display:flex;flex-direction:row;flex-wrap:nowrap;place-content:flex-start flex-start;align-items:center;min-block-size:var(--gse-ui-breadcrumbs-secondary-height)}.gux-breadcrumb-generation .gux-breadcrumb-content{font-family:var(--gse-ui-links-inLine-small-text-fontFamily);font-size:var(--gse-ui-links-inLine-small-text-fontSize);font-weight:var(--gse-ui-links-inLine-small-text-fontWeight);line-height:var(--gse-ui-links-inLine-small-text-lineHeight);text-decoration:none;color:var(--gse-ui-links-default-foregroundColor);pointer-events:none}.gux-breadcrumb-generation .gux-breadcrumb-content.gux-active{color:var(--gse-ui-links-active-foregroundColor)}.gux-breadcrumb-generation .gux-breadcrumb-separator{padding:var(--gse-ui-breadcrumbs-secondary-separator-padding);font-family:var(--gse-ui-breadcrumbs-secondary-separator-typography-fontFamily);font-size:var(--gse-ui-breadcrumbs-secondary-separator-typography-fontSize);font-weight:var(--gse-ui-breadcrumbs-secondary-separator-typography-fontWeight);line-height:var(--gse-ui-breadcrumbs-secondary-separator-typography-lineHeight);color:var(--gse-ui-breadcrumbs-separator-color)}.gux-breadcrumb-generation.gux-primary{min-block-size:var(--gse-ui-breadcrumbs-primary-height)}.gux-breadcrumb-generation.gux-primary .gux-breadcrumb-content{font-family:var(--gse-ui-links-inLine-medium-text-fontFamily);font-size:var(--gse-ui-links-inLine-medium-text-fontSize);font-weight:var(--gse-ui-links-inLine-medium-text-fontWeight);line-height:var(--gse-ui-links-inLine-medium-text-lineHeight);text-decoration:none}.gux-breadcrumb-generation.gux-primary .gux-breadcrumb-separator{padding:var(--gse-ui-breadcrumbs-primary-separator-padding);font-family:var(--gse-ui-breadcrumbs-primary-separator-typography-fontFamily);font-size:var(--gse-ui-breadcrumbs-primary-separator-typography-fontSize);font-weight:var(--gse-ui-breadcrumbs-primary-separator-typography-fontWeight);line-height:var(--gse-ui-breadcrumbs-primary-separator-typography-lineHeight)}";

const GuxBreadcrumbItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getAccent() {
        const container = this.root.closest('gux-breadcrumbs');
        if (container) {
            return container.accent;
        }
        else {
            logError.logError(this.root, 'This component must be a child of a gux-breadcrumbs component.');
        }
    }
    isActiveBreadcrumb() {
        const parentNode = this.root.parentNode;
        const children = parentNode.children;
        return children[children.length - 1] === this.root;
    }
    getBreadcrumb(accent) {
        if (this.isActiveBreadcrumb()) {
            return (index.h("span", { class: "gux-breadcrumb-content gux-active", "aria-current": "page" }, index.h("slot", null)));
        }
        if (this.href) {
            return (index.h("gux-link-beta", { size: accent === 'secondary' ? 'small' : 'medium', standalone: true }, index.h("a", { href: this.href }, index.h("slot", null))));
        }
        return (index.h("span", { class: "gux-breadcrumb-content" }, index.h("slot", null)));
    }
    getSeparatorIcon() {
        if (this.isActiveBreadcrumb()) {
            return null;
        }
        return (index.h("span", { class: "gux-breadcrumb-separator", "aria-hidden": "true" }, "/"));
    }
    render() {
        const accent = this.getAccent();
        return (index.h(index.Host, { key: '9864718c7a85867dc8ae13c77b71ee2d47595345', role: "listitem" }, index.h("span", { key: '321aa9a3d13bc88107c1f4296b8acbb0194ebb2b', class: `gux-breadcrumb-generation gux-${accent}` }, this.getBreadcrumb(accent), this.getSeparatorIcon())));
    }
    get root() { return index.getElement(this); }
};
GuxBreadcrumbItem.style = guxBreadcrumbItemCss;

exports.gux_breadcrumb_item = GuxBreadcrumbItem;
