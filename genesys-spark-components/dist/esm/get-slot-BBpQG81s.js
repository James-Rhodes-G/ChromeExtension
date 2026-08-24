function getSlot(element, slotName) {
    // This is a neater solution but our spec test do not support :scope selector
    // return element?.querySelector(`:scope > *[slot=${slotName}]`);
    for (const child of element.children) {
        if (child.matches(`[slot=${slotName}]`)) {
            return child;
        }
    }
    return null;
}

export { getSlot as g };
