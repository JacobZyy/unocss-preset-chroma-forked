# unocss-preset-chroma-forked

<p>
  <a href="https://nodejs.org/en/about/releases/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/node/v/unocss-preset-chroma" alt="node version">
  </a>
</p>

## origin repositry
[unocss-preset-chroma](https://github.com/chu121su12/unocss-preset-chroma)

This preset in on the recommand list of unocss community presets, but the package on npm is is no longer available because the dist folder lost source files.
I found that the developer raised an issue with the original author, but received no response.
So I create this repositry to fix these problems

> chroma-js gradient for UnoCSS.


## Installation

```sh
npm i unocss-preset-chroma unocss --save-dev # with npm
yarn add unocss-preset-chroma unocss -D # with yarn
pnpm add unocss-preset-chroma unocss -D # with pnpm
```

## Usage

```js
// unocss.config.js
import { presetUno, defineConfig } from 'unocss'
import { presetChroma } from 'unocss-preset-chroma'

export default defineConfig({
  presets: [
    presetUno(), // for color theme
    presetChroma(),
  ],
})
```

## Utilities

- Shorthand gradient + stops:

  `chroma-(linear|radial|conic)-(rgb|lab|hsl|lch)-<colors>`

  Where `<colors>` is dash-separated hex color.

- Stops only:

  `chroma-stops-(rgb|lab|hsl|lch)-<color-1>-<color-2>-<color-n>`

- Shape:

  `chroma-shape-[contour/size/potiion/direction/etc]`

- Base gradient function (`background-image`):

  `chroma-(linear|radial|conic)`

### Type of `ChromaOptions`

```ts
export interface ChromaOptions {
  /**
   * Class prefix for matching gradient rules.
   *
   * @defaultValue `chroma-`
   */
  prefix?: string
  /**
   * Number of gradient steps to generate.
   *
   * @defaultValue 7
   */
  steps?: number
}
```

## Acknowledgement

- [Polychroma](https://polychroma.app/)
- [chroma.js](https://vis4.net/chromajs/)
- [Make Beautiful Gradients](https://www.joshwcomeau.com/css/make-beautiful-gradients/) by Josh Comeau

## License

MIT

## Demo

Clone the repo, run `pnpm dev`.
