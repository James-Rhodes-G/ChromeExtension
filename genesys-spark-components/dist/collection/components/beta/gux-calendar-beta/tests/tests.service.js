import { Temporal } from "@js-temporal/polyfill";
export async function validateSelectedDate(element, expectedDate) {
    const selectedDayElement = await findSelectedDayElement(element);
    await validateDate(selectedDayElement, expectedDate);
}
export async function validateHeaderMonth(element, expectedMonthAndYear) {
    const currentMonthAndYear = await element.find('pierce/.gux-header-month-and-year');
    expect(currentMonthAndYear.innerHTML).toBe(expectedMonthAndYear);
}
export async function findSelectedDayElement(element) {
    return element.find('pierce/gux-day-beta[aria-current="true"]');
}
export async function validateFocusedDay(element, expectedDate) {
    const focusedElement = await element.find('pierce/:focus');
    await validateDate(focusedElement, expectedDate);
}
export async function findDayElement(element, isoDate) {
    return await element.find(`pierce/.day-${isoDate}`);
}
export async function goToPreviousMonth(element, page) {
    const button = await element.find('pierce/.gux-left');
    await button.click();
    return await page.waitForChanges();
}
export async function goToNextMonth(element, page) {
    const button = await element.find('pierce/.gux-right');
    await button.click();
    return await page.waitForChanges();
}
async function validateDate(element, expectedDate) {
    const expectedLabel = Temporal.PlainDate.from(expectedDate).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    const labelElement = await element.find('pierce/.gux-sr-only');
    expect(labelElement.textContent).toBe(expectedLabel);
}
