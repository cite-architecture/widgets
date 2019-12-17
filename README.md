# widgets

Generic, modular widgets for web presentation of CITE texts and data

## Contents

- **Shared** `shared`: Individual widgets have minimal CSS, only that necessary to do their job. The `shared/` directory contains CSS that should work with all widgets to harmonize and normalize presentation. Of course, this is intended as a template which any user will modify.
- **Text & Commentary Widget** `text_commentary`: Javascript + CSS for simple showing and hiding of commentary text. Two demonstration HTML files, one very simple, and one with output from [the `citewriter` library](https://github.com/cite-architecture/citewriter).
- **URN Toggle Widget** `urn_toggle`: Javascript + CSS for expanding and collapsing, by degrees, the display of CTS- and CITE2-URNs, from a passage-component or object-selector only, up to a full URN. **TBD**.
- **Aligned Elements Widget** `aligned_elements`: Javascript + CSS for aligning elements in parallel.
- **Preview Image Widget** `preview_image`: Javascript + CSS for "zooming" an image-preview when the mouse hovers over it.
- **ShowHide Widget** `showHide`: Javascript + CSS for toggling the visibility of an element, with an animated reveal triangle.