export const GUX_AVATAR_AUTO_ACCENT = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];
export function getAvatarAccentClass(accent, name) {
    if (accent !== 'auto') {
        return `gux-accent-${accent}`;
    }
    const hashedName = name === null || name === void 0 ? void 0 : name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hashedNameAccent = (hashedName % Math.max(...GUX_AVATAR_AUTO_ACCENT)).toString();
    return `gux-accent-${hashedNameAccent}`;
}
