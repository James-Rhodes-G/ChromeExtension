'use strict';

// Remove with this ticket https://inindca.atlassian.net/browse/COMUI-2598
const readRegionalDatesCookie = () => {
    return !!document.cookie
        .split('; ')
        .find(cookie => cookie.startsWith('spark-enable-regional-dates'));
};

// Remove with this ticket https://inindca.atlassian.net/browse/COMUI-2598
const readRegionalDatesVar = () => {
    return !!window['GUX_OPTIONS_enableRegionalDates'];
};

// Remove with this ticket https://inindca.atlassian.net/browse/COMUI-2598
function useRegionalDates() {
    return !!readRegionalDatesCookie() || !!readRegionalDatesVar();
}

exports.useRegionalDates = useRegionalDates;
