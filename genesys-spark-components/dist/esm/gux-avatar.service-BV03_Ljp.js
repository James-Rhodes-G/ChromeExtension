function generateInitials(name) {
    var _a, _b, _c;
    const nameArray = (_a = name === null || name === void 0 ? void 0 : name.split(' ')) !== null && _a !== void 0 ? _a : [];
    if (nameArray.length > 1) {
        return nameArray[0].charAt(0) + nameArray[nameArray.length - 1].charAt(0);
    }
    return ((_b = nameArray[0]) === null || _b === void 0 ? void 0 : _b.charAt(0)) + ((_c = nameArray[0]) === null || _c === void 0 ? void 0 : _c.charAt(1));
}

const GUX_AVATAR_AUTO_ACCENT = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];
function getAvatarAccentClass(accent, name) {
    if (accent !== 'auto') {
        return `gux-accent-${accent}`;
    }
    const hashedName = name === null || name === void 0 ? void 0 : name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hashedNameAccent = (hashedName % Math.max(...GUX_AVATAR_AUTO_ACCENT)).toString();
    return `gux-accent-${hashedNameAccent}`;
}

export { generateInitials as a, getAvatarAccentClass as g };
