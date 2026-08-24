import { EventEmitter, JSX } from '../../../stencil-public-runtime';
import { Alpha2Code, Region } from './gux-phone.types';
export declare class GuxPhoneInput {
    private i18n;
    private inputElement;
    private listboxElement;
    private fieldButtonElement;
    private phoneUtil;
    private regionObjects;
    private displayFormat;
    private displayType;
    private valueWhenFocused;
    private regionAlphaCodeWhenFocused;
    root: HTMLElement;
    value: string;
    /**
     * Default ISO 3166-1 alpha-2 region code.
     */
    defaultRegion: Alpha2Code;
    labelId: string;
    hasError: boolean;
    disabled: boolean;
    required: boolean;
    phoneNumberFormat: 'E164' | 'INTERNATIONAL' | 'NATIONAL';
    phoneNumberType: 'FIXED_LINE' | 'TOLL_FREE';
    guxregionselect: EventEmitter<string>;
    private regionOptions;
    private expanded;
    private region;
    setRegionAlpha2Code(alpha2Code: Alpha2Code): Promise<void>;
    setRegionDialCode(dialCode: string): Promise<void>;
    getRegion(): Promise<Region>;
    getFormattedNumber(format?: typeof this.phoneNumberFormat): Promise<string>;
    getExtension(): Promise<string>;
    isPossibleNumber(): Promise<boolean>;
    isValidNumber(): Promise<boolean>;
    updateValue(number: string): void;
    focusSelectedItemAfterRender(expanded: boolean): void;
    setDisplayFormat(format: typeof this.phoneNumberFormat): void;
    setDisplayType(format: typeof this.phoneNumberType): void;
    onInternallistboxoptionsupdated(event: CustomEvent): void;
    onBlur(event: FocusEvent): void;
    onFocus(event: FocusEvent): void;
    onFocusout(): void;
    onFocusin(event: FocusEvent): void;
    onClickOutside(): void;
    componentWillLoad(): Promise<void>;
    componentDidRender(): void;
    componentDidLoad(): void;
    private initialValueParse;
    private parseDisplayFormat;
    private parsePhoneNumberType;
    /** Returns parsed phone number object or null if utility threw an error (unknown region or impossible to parse number) */
    private parsePhoneNumber;
    private onInputChange;
    private regionObjectToRegion;
    private _setRegionAlpha2Code;
    private updateInputWithNewRegion;
    private get defaultRegionCode();
    /** Gets example number with fallbacks to handle missing data in the library. */
    private getExampleNumber;
    private getRegionFromValue;
    private isNationalNumber;
    private getRegionFromDialCode;
    private stopPropagationOfInternalFocusEvents;
    private fieldButtonClick;
    private collapseListbox;
    private setInput;
    private setListBox;
    private renderExpandIcon;
    private renderCountryButton;
    private renderButtonDisplay;
    private renderInput;
    private renderTarget;
    private getRegionOptions;
    private renderPopup;
    render(): JSX.Element;
}
