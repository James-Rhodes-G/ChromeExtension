import { JSX } from '../../../../../stencil-public-runtime';
import { GuxFormFieldIndicatorMark } from '../../gux-form-field.types';
export declare class GuxFormFieldLabelIndicator {
    private i18n;
    private root;
    variant: GuxFormFieldIndicatorMark;
    required: boolean;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
