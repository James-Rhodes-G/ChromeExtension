import { NewSpecPageOptions } from '../stencil-public-runtime';
import { RenderConfig } from './commonTestUtils';
export declare function newSpecPage(opts: NewSpecPageOptions): Promise<import("@stencil/core/internal").SpecPage>;
export declare function checkRenders(renderConfigs: RenderConfig[], components: unknown[], language?: string): Promise<void>;
export { RenderConfig } from './commonTestUtils';
