import { GuxFormFieldLabelPosition } from './gux-form-field.types';
export declare function clearInput(input: HTMLInputElement): void;
export declare function hasContent(input: HTMLInputElement | HTMLTextAreaElement): boolean;
export declare function getComputedLabelPosition(label: HTMLElement, labelPosition: GuxFormFieldLabelPosition): GuxFormFieldLabelPosition;
export declare function validateFormIds(root: HTMLElement, input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLGuxTimePickerElement | HTMLGuxPhoneInputBetaElement | HTMLGuxTimeZonePickerBetaElement): void;
export declare function setSlotAriaAttribute(root: HTMLElement, attribute: 'aria-labelledby' | 'aria-describedby', input: HTMLGuxListboxElement | HTMLGuxListboxMultiElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, slotName: string): void;
export declare function setSlotAriaLabelledby(root: HTMLElement, input: HTMLGuxListboxElement | HTMLGuxListboxMultiElement, slotName: string): void;
export declare function setSlotAriaDescribedby(root: HTMLElement, input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLGuxListboxElement | HTMLGuxListboxMultiElement, slotName: string): void;
export declare function getSlottedInput(root: HTMLElement, inputSelector: string): HTMLInputElement;
