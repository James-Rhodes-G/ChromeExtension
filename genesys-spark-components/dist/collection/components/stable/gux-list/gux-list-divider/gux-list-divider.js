import { h, Host } from "@stencil/core";
export class GuxListDivider {
    render() {
        return (h(Host, { key: '3746ba873e6e1a8553b4a38859f549713f2e369f', role: "presentation" }));
    }
    static get is() { return "gux-list-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-list-divider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-list-divider.css"]
        };
    }
}
