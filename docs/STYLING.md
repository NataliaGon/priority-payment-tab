# Styling

## Technology
1. We use `SCSS` with [`CSSModules`](https://github.com/css-modules/css-modules), both comes out of the box in the build process.

## Conventions

### Variables
1. Add variables under the `theme-variables` directory, in the natural variable family file.
for Example: $red in `_colors.scss`.
2. Variable name should be `$dash-separated`.
3. For colors with opacity, the opacity percent should be suffixed to variable name. e.g. `$gray30`

### Mixins
1. Add mixins under the `mixins` directory, in the natural mixin family file.
2. A mixin name should be `camelCase`.
3. Each mixin should have a single responsibility.

### Classes
1. Stick to the Component name, when naming classes. e.g. a class for `Dropdown` should be `dropdown` and not `select`.
2. class names should be `camelCase`.


## Best practices
1. For RTL support, add rules using the `withRTL` mixin: `@include withRTL { }`.
2. The convention for allowing styling of the component's root element is by exposing a `className` property.
