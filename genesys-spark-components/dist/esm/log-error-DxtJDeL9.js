function logError(component, message) {
    console.error(`[${component.tagName.toLowerCase()}] ${message}`, component);
}
function logWarn(component, message) {
    console.warn(`[${component.tagName.toLowerCase()}] ${message}`, component);
}

export { logError as a, logWarn as l };
