# Primer

A starting point for responsive, accessible web design.

```sh
npm install @clairelizbet/primer
```

## Purpose

Primer selectively resets some user agent styles, similar to what
normalization stylesheets accomplish.

Spacing is applied in a way that adapts to text direction, orientation, and
writing mode.

- All body margins are removed
- Box sizing is set to `border-box`
- The System UI font is applied to the body
- The System monospace font is applied to preformatted text
- Paragraph and heading margins are set using `margin-block-end`

---

On top of this, Primer provides some baseline accessibility for your site by
applying appropriate text styles.

- Font size and paragraph spacing are set according to WCAG recommendations
- Apple Dynamic Type is enabled if available

---

Primer also adds a few carefully chosen adjustments to prevent undesirable
browser behavior.

- A minimum font size of 16px is applied to prevent some browsers
  (notably, iOS Safari) from zooming inputs
- The body's `min-height` is set to `100dvh` to avoid bugs with some vertical
  flex layouts

## License 📃

[![CC0 Public Domain](https://raw.githubusercontent.com/clairelizbet/licenses/main/creative-commons/cc-zero/cc-zero.svg)](license.md)
