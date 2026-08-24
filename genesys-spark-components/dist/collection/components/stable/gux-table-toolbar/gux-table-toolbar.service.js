export function setAccent(actions, accent) {
    [].concat(actions).forEach(action => {
        if (action != null) {
            action.accent = accent;
        }
    });
}
export function setActionsIconOnlyProp(iconOnly, ...actionSets) {
    actionSets
        .flat()
        .filter(action => action !== null &&
        action !== undefined &&
        !(action === null || action === void 0 ? void 0 : action.hasAttribute('icon-only')))
        .forEach(action => (action.iconOnly = iconOnly));
}
