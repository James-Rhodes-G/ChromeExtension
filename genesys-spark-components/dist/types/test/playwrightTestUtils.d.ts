import { AxeResults } from 'axe-core';
import { E2EPage } from '@stencil/playwright';
import { RenderConfig } from './commonTestUtils';
import { toHaveNoViolations, AxeExclusion, AxeScanDetails } from './expectToHaveNoViolations';
export declare const expect: import("@playwright/test").Expect<{
    toHaveNoViolations: typeof toHaveNoViolations;
}>;
export declare function runAxe(page: E2EPage): Promise<AxeResults>;
export declare function analyze(page: E2EPage, element?: string, extraActions?: ExtraActionsFn, performA11yCheck?: boolean, disableAnimations?: boolean, axeScanDetails?: AxeScanDetails): Promise<void>;
export declare function snap(page: E2EPage, element?: string, performA11yCheck?: boolean, disableAnimations?: boolean, axeScanDetails?: AxeScanDetails): Promise<void>;
export declare function setContent(page: E2EPage, html: string): Promise<void>;
type CheckRendersParams = {
    renderConfigs: RenderConfig[];
    element?: string;
    extraActions?: ExtraActionsFn;
    performA11yCheck?: boolean;
    disableAnimations?: boolean;
    skip?: boolean;
    axeExclusions?: AxeExclusion[];
};
export declare function checkRenders({ renderConfigs, element, extraActions, performA11yCheck, disableAnimations, skip, axeExclusions }: CheckRendersParams): Promise<void>;
type ExtraActionsFn = (page: E2EPage) => Promise<void>;
export { RenderConfig } from './commonTestUtils';
export { test, E2EPage } from '@stencil/playwright';
export { AxeExclusion, AxeScanDetails } from './expectToHaveNoViolations';
