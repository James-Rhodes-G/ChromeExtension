import { h } from "@stencil/core";
import { getDesiredLocale } from "../../../i18n/index";
import * as sparkIntl from "../../../genesys-spark-utils/intl";
import { Temporal } from "@js-temporal/polyfill";
import { formatPlainDate } from "../../../utils/date/temporal";
/**
 * The gux-day component is how we render a day within an calendar. It should
 * not be used stand-alone.
 */
export class GuxDay {
    /* Watcher to sync the internal date with the day attribute on changes */
    onDayPropChange() {
        this.readDateFromProp();
    }
    /**
     * Syncs the internal rich `date` from the string `day` prop. Needs
     * to run when connected to the DOM, and when the prop changes.
     */
    readDateFromProp() {
        this.date = Temporal.PlainDate.from(this.day);
    }
    async connectedCallback() {
        this.readDateFromProp();
        const locale = getDesiredLocale(this.root);
        this.readerFormatter = sparkIntl.dateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    render() {
        return (h("button", { key: '4282bb9b77fc4238e0748cc142f4e422ab29be41', type: "button", disabled: this.disabled }, h("slot", { key: '54b746f12a4a7d95468f983e6cb5bbeba0733061' }, h("span", { key: '712abfbeb57c6b477f46ad8999d0931ab12017b8', "aria-hidden": "true" }, this.date.day), h("span", { key: 'be8a82a9454f700a5b2966db75395e1d7b6ad789', class: "gux-sr-only" }, formatPlainDate(this.readerFormatter, this.date)))));
    }
    static get is() { return "gux-day-beta"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-day.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-day.css"]
        };
    }
    static get properties() {
        return {
            "day": {
                "type": "string",
                "attribute": "day",
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
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "date": {}
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "day",
                "methodName": "onDayPropChange"
            }];
    }
}
