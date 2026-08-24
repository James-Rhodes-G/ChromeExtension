'use strict';

var getClosestElement = require('./get-closest-element-CIMI0Cx4.js');

/**
 * Provides an [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
 * object for formatting dates and times. Unlike the native version, `locale` is
 * an optional argument. If not provided, the function will try to determine the
 * locale from the DOM, where it should be set for a11y reasons.
 * @param locale optional locale to use for formatting
 * @param options options to pass to the Intl.DateTimeFormat constructor
 * @returns a new DateTimeFormat
 */
function dateTimeFormat(localeOrOptions, options) {
    let locale = undefined;
    if (typeof localeOrOptions === 'string') {
        locale = localeOrOptions;
    }
    else {
        options = localeOrOptions;
    }
    if (locale != undefined) {
        return new Intl.DateTimeFormat(locale, options);
    }
    else {
        const userLocale = determineDisplayLocale();
        return new Intl.DateTimeFormat(userLocale, options);
    }
}
/**
 * Makes a best effort to return the locale that should be used for a given element
 * by checking language tags on ancestors. If no element is provided, it will
 * start with the document's <body> tag. If no locale can be found, it will use
 * the browser's locale preference. It will also try to add a region to regionless
 * locales when there is a partial match with the browser's locale.
 * @returns a locale string (e.g. 'en-US', 'en', 'de-DE', etc)
 */
function determineDisplayLocale(element = document.body) {
    var _a;
    const domLocale = (_a = getClosestElement.getClosestElement(element, '*[lang]')) === null || _a === void 0 ? void 0 : _a.lang;
    const domLocaleWithOverride = domLocaleOverride(domLocale);
    if (!domLocaleWithOverride || browserHasRegionData(domLocaleWithOverride)) {
        // If we can't find a locale in the DOM, or we find a locale without a region that matches the
        // users's browser locale, use the browser locale.
        return navigator.language;
    }
    else {
        return domLocaleWithOverride;
    }
}
/**
 * Returns true if the provided locale only has a language, but the user's
 * browser settings have the same language with a locale.
 * @param localeString The locale to check
 * @returns true if the region can be guessed from the browser settings.
 */
function browserHasRegionData(localeString) {
    var _a;
    return (browserLocaleOverride(localeString) ||
        (localeString.length == 2 &&
            ((_a = navigator.language) === null || _a === void 0 ? void 0 : _a.startsWith(`${localeString}-`))));
}
// Currently, login page and web-directory store the English user selection as `en-us`.
// We will remove this override once those apps migrate from using en-us to en as part of a future epic.
function domLocaleOverride(localeString) {
    if ((localeString === null || localeString === void 0 ? void 0 : localeString.toLowerCase()) === 'en-us') {
        return 'en';
    }
    else {
        return localeString;
    }
}
function browserLocaleOverride(localeString) {
    var _a, _b;
    switch (localeString.toLowerCase()) {
        case 'zh-cn':
            return Boolean((_a = navigator.language) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith('zh-sg'));
        case 'zh-tw':
            return Boolean((_b = navigator.language) === null || _b === void 0 ? void 0 : _b.toLowerCase().startsWith('zh-hk'));
        default:
            return false;
    }
}
function getFormat(locale) {
    const date = new Date('July 5, 2000 15:00:00 UTC+00:00');
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    const dateTimeFormat = new Intl.DateTimeFormat(locale, options);
    const parts = dateTimeFormat.formatToParts(date);
    const dateString = parts
        .map(({ type, value }) => {
        switch (type) {
            case 'day':
                return `dd`;
            case 'month':
                return `mm`;
            case 'year':
                return `yyyy`;
            default:
                return value;
        }
    })
        .join('');
    // review locales with two character date delimiters https://inindca.atlassian.net/browse/COMUI-2679
    return dateString.replace(/\s/g, '').replace(/‏/g, '');
}

exports.dateTimeFormat = dateTimeFormat;
exports.determineDisplayLocale = determineDisplayLocale;
exports.getFormat = getFormat;
