import { type Preset } from 'unocss';
/**
 * @public
 */
export interface ChromaOptions {
    /**
     * Class prefix for matching gradient rules.
     *
     * @defaultValue `chroma-`
     */
    prefix?: string;
    /**
     * Number of gradient steps to generate.
     *
     * @defaultValue 7
     */
    steps?: number;
}
export declare function presetChroma(options?: ChromaOptions): Preset;
export default presetChroma;
