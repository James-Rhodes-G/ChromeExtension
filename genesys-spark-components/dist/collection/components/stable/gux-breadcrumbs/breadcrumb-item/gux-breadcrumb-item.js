import { h, Host } from "@stencil/core";
import { logError } from "../../../../utils/error/log-error";
/**
 * @slot - content
 */
export class GuxBreadcrumbItem {
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
    static get is() { return "gux-breadcrumb-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-breadcrumb-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-breadcrumb-item.css"]
        };
    }
    static get properties() {
        return {
            "href": {
                "type": "string",
                "attribute": "href",
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
    static get elementRef() { return "root"; }
}
