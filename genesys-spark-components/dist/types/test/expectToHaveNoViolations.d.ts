import { Result } from 'axe-core';
export type AxeExclusion = {
    issueId: string;
    target?: string;
    exclusionReason: string;
};
export type AxeScanDetails = {
    axeExclusions: AxeExclusion[];
    axeScanContext?: string;
};
export declare function toHaveNoViolations(axeViolations: Result[], axeScanDetails: AxeScanDetails): {
    message: () => string;
    pass: boolean;
};
