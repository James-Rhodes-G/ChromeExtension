import { getAssetPath } from "@stencil/core";
import { legacyIconNames } from "./icon-names-legacy";
import { deprecatedIconNamesMap } from "./icon-names-deprecated";
const deprecatedIconNames = Object.keys(deprecatedIconNamesMap);
const svgHTMLCache = new Map();
async function fetchIcon(iconName) {
    const iconResponse = await fetch(getAssetPath(`./icons/${iconName}.svg`));
    if (iconResponse.status === 200) {
        return iconResponse.text();
    }
    throw new Error(`[gux-icon] fetching failed for icon "${iconName}" with status "${iconResponse.statusText} (${iconResponse.status})".`);
}
function iconInfoToId(iconName) {
    return iconName.replace('/', '-');
}
export function getRootIconName(iconName) {
    if (legacyIconNames.includes(iconName)) {
        return `legacy/${iconName}`;
    }
    if (deprecatedIconNames.includes(iconName)) {
        return deprecatedIconNamesMap[iconName];
    }
    return iconName;
}
export async function getBaseSvgHtml(iconName) {
    const id = iconInfoToId(iconName);
    if (svgHTMLCache.has(id)) {
        return svgHTMLCache.get(id);
    }
    const svgHtml = fetchIcon(iconName)
        .then(svgText => svgText)
        .catch(err => {
        setTimeout(() => {
            throw err;
        }, 0);
        return getBaseSvgHtml('fa/square-x-regular');
    });
    svgHTMLCache.set(id, svgHtml);
    return svgHtml;
}
