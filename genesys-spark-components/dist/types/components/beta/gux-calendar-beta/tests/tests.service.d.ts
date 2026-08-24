import { E2EElement, E2EPage } from '@stencil/core/testing';
export declare function validateSelectedDate(element: E2EElement, expectedDate: string): Promise<void>;
export declare function validateHeaderMonth(element: E2EElement, expectedMonthAndYear: string): Promise<void>;
export declare function findSelectedDayElement(element: E2EElement): Promise<E2EElement>;
export declare function validateFocusedDay(element: E2EElement, expectedDate: string): Promise<void>;
export declare function findDayElement(element: E2EElement, isoDate: string): Promise<E2EElement>;
export declare function goToPreviousMonth(element: E2EElement, page: E2EPage): Promise<void>;
export declare function goToNextMonth(element: E2EElement, page: E2EPage): Promise<void>;
