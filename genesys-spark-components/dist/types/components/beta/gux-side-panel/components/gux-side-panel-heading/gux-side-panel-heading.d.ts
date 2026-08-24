import { GuxSidePanelHeadingLevel } from '../../gux-side-panel.types';
import { GuxIconIconName } from '../../../../stable/gux-icon/gux-icon.types';
/**
 * @slot - The heading text
 */
export declare class GuxSidePanelHeading {
    private root;
    /**
     * Heading level, 1-6.
     */
    level: GuxSidePanelHeadingLevel;
    iconName: GuxIconIconName;
    private headingTag;
    componentWillLoad(): void;
    render(): JSX.Element;
}
