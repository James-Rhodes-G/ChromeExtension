export function generateInitials(name) {
    var _a, _b, _c;
    const nameArray = (_a = name === null || name === void 0 ? void 0 : name.split(' ')) !== null && _a !== void 0 ? _a : [];
    if (nameArray.length > 1) {
        return nameArray[0].charAt(0) + nameArray[nameArray.length - 1].charAt(0);
    }
    return ((_b = nameArray[0]) === null || _b === void 0 ? void 0 : _b.charAt(0)) + ((_c = nameArray[0]) === null || _c === void 0 ? void 0 : _c.charAt(1));
}
