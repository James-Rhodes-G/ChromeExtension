export function logError(component, message) {
    console.error(`[${component.tagName.toLowerCase()}] ${message}`, component);
}
export function logWarn(component, message) {
    console.warn(`[${component.tagName.toLowerCase()}] ${message}`, component);
}
