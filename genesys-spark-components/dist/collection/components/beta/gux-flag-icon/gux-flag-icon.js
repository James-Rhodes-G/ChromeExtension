import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
import { spritesheetDataUrl } from "./sprite-utils/sprites.generated";
export class GuxFlagIconBeta {
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        trackComponent(this.root);
    }
    render() {
        var _a;
        return (h("span", { key: '83abdfad7fc40121981dcee3120e539a5d44a4a5', role: "img", class: 'gux-flag-' + ((_a = this.flag) === null || _a === void 0 ? void 0 : _a.toLowerCase()), style: { backgroundImage: `url(${spritesheetDataUrl})` }, "aria-label": this.getLabel() }));
    }
    getLabel() {
        return (this.screenreaderText ||
            this.i18n(this.flag) ||
            this.i18n('unknownRegion'));
    }
    static get is() { return "gux-flag-icon-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-flag-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-flag-icon.css"]
        };
    }
    static get properties() {
        return {
            "flag": {
                "type": "string",
                "attribute": "flag",
                "mutable": false,
                "complexType": {
                    "original": "GuxFlagCode",
                    "resolved": "\"AD\" | \"AE\" | \"AF\" | \"AG\" | \"AI\" | \"AL\" | \"AM\" | \"AO\" | \"AR\" | \"AS\" | \"AT\" | \"AU\" | \"AW\" | \"AX\" | \"AZ\" | \"BA\" | \"BB\" | \"BD\" | \"BE\" | \"BF\" | \"BG\" | \"BH\" | \"BI\" | \"BJ\" | \"BL\" | \"BM\" | \"BN\" | \"BO\" | \"BQ\" | \"BR\" | \"BS\" | \"BT\" | \"BV\" | \"BW\" | \"BY\" | \"BZ\" | \"CA\" | \"CC\" | \"CD\" | \"CF\" | \"CG\" | \"CH\" | \"CI\" | \"CK\" | \"CL\" | \"CM\" | \"CN\" | \"CO\" | \"CR\" | \"CU\" | \"CV\" | \"CW\" | \"CX\" | \"CY\" | \"CZ\" | \"DE\" | \"DJ\" | \"DK\" | \"DM\" | \"DO\" | \"DZ\" | \"EC\" | \"EE\" | \"EG\" | \"EH\" | \"ER\" | \"ES\" | \"ET\" | \"FI\" | \"FJ\" | \"FK\" | \"FM\" | \"FO\" | \"FR\" | \"GA\" | \"GB\" | \"GD\" | \"GE\" | \"GF\" | \"GG\" | \"GH\" | \"GI\" | \"GL\" | \"GM\" | \"GN\" | \"GP\" | \"GQ\" | \"GR\" | \"GS\" | \"GT\" | \"GU\" | \"GW\" | \"GY\" | \"HK\" | \"HN\" | \"HR\" | \"HT\" | \"HU\" | \"ID\" | \"IE\" | \"IL\" | \"IM\" | \"IN\" | \"IO\" | \"IQ\" | \"IR\" | \"IS\" | \"IT\" | \"JE\" | \"JM\" | \"JO\" | \"JP\" | \"KE\" | \"KG\" | \"KH\" | \"KI\" | \"KM\" | \"KN\" | \"KP\" | \"KR\" | \"KW\" | \"KY\" | \"KZ\" | \"LA\" | \"LB\" | \"LC\" | \"LI\" | \"LK\" | \"LR\" | \"LS\" | \"LT\" | \"LU\" | \"LV\" | \"LY\" | \"MA\" | \"MC\" | \"MD\" | \"ME\" | \"MF\" | \"MG\" | \"MH\" | \"MK\" | \"ML\" | \"MM\" | \"MN\" | \"MO\" | \"MP\" | \"MQ\" | \"MR\" | \"MS\" | \"MT\" | \"MU\" | \"MV\" | \"MW\" | \"MX\" | \"MY\" | \"MZ\" | \"NA\" | \"NC\" | \"NE\" | \"NF\" | \"NG\" | \"NI\" | \"NL\" | \"NO\" | \"NP\" | \"NR\" | \"NU\" | \"NZ\" | \"OM\" | \"PA\" | \"PE\" | \"PF\" | \"PG\" | \"PH\" | \"PK\" | \"PL\" | \"PM\" | \"PN\" | \"PR\" | \"PS\" | \"PT\" | \"PW\" | \"PY\" | \"QA\" | \"RE\" | \"RO\" | \"RS\" | \"RU\" | \"RW\" | \"SA\" | \"SB\" | \"SC\" | \"SD\" | \"SE\" | \"SG\" | \"SH\" | \"SI\" | \"SJ\" | \"SK\" | \"SL\" | \"SM\" | \"SN\" | \"SO\" | \"SR\" | \"SS\" | \"ST\" | \"SV\" | \"SX\" | \"SY\" | \"SZ\" | \"TC\" | \"TD\" | \"TG\" | \"TH\" | \"TJ\" | \"TK\" | \"TL\" | \"TM\" | \"TN\" | \"TO\" | \"TR\" | \"TT\" | \"TV\" | \"TW\" | \"TZ\" | \"UA\" | \"UG\" | \"US\" | \"UY\" | \"UZ\" | \"VA\" | \"VC\" | \"VE\" | \"VG\" | \"VI\" | \"VN\" | \"VU\" | \"WF\" | \"WS\" | \"XK\" | \"YE\" | \"YT\" | \"ZA\" | \"ZM\" | \"ZW\"",
                    "references": {
                        "GuxFlagCode": {
                            "location": "import",
                            "path": "./sprite-utils/sprites.generated",
                            "id": "src/components/beta/gux-flag-icon/sprite-utils/sprites.generated.ts::GuxFlagCode"
                        }
                    }
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
            "screenreaderText": {
                "type": "string",
                "attribute": "screenreader-text",
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
