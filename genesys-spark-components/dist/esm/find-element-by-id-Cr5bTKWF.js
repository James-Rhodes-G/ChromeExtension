function getContainingDocument(node) {
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return node;
    }
    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        return node;
    }
    return node.ownerDocument;
}
function findElementById(root, forElementId) {
    let priorRoot = null;
    let rootNode = root.getRootNode();
    let forElement;
    while (rootNode && rootNode !== priorRoot && !forElement) {
        const doc = getContainingDocument(rootNode);
        forElement = doc === null || doc === void 0 ? void 0 : doc.getElementById(forElementId);
        // Keep track of the prior root to stop if a node returns itself as its root
        priorRoot = rootNode;
        rootNode = rootNode.getRootNode();
    }
    return forElement;
}

export { findElementById as f };
