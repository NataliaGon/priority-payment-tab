# Component guidelines

## UX Specification

Components are designed according to [Zeplin](https://app.zeplin.io/project/5bd1671e06ae940a149fd5fc) design created by UX guild.

## Naming

A component will be named with a `CamelCase` convention.

## Structure

Every component folder should be a single component.

The following structure is the basic structure for a component.

### Component Specific Files

```
priority-style-react
|
|__src
|  |__ComponentName
|  |    index.ts                              # entry file for the component
|  |    ComponentName.tsx                     # the actual component
|  |    SubComponentName.tsx                  # subcomponent
|  |    ComponentName.scss                    # the component stylesheet
|  |    README.md                             # (optional) additional information of the component
|__stories
|  |__ComponentName
|  |    index.story.tsx                       # entry file for all component documentation
```


#### index.ts
- Every component should have an index file exporting the default entry for easy importing.

#### ComponentName.tsx
- The actual component. A component can be either a simple standalone component or composition of other components.


#### SubComponentName.tsx
- A related subcomponent. Exported as `ComponentName.SubComponentName`.

#### ComponentName.scss
- Almost every component will have a styling sheet.
- Read the [Styling section](./STYLING.md) for more information.

## API

1. *className*: The convention for allowing styling of the component's root element is by exposing a `className` property.
2. *xxxProps*: If the component is wrapping another component (or native DOM element) and its props is needed - pass it with the convention of xxxProps. for example inputProps tooltipProps, etc..
3. *dataHook*: Every component should accept a `dataHook` property which is applied as a `data-hook` attribute on the component's root element. This attribute is use as a selector in tests. A component can extend `WixComponent` in order to be a pure component and have the `dataHook` prop applied automatically.

## Implementation

1. Use `classnames` library in order to apply dependent css class names.
2. Use function components for stateless UI components and class components for rich state-full components.

## Documentation

1. **IMPORTANT** Add `ComponentNameProps` interface to each component and document each property with a `/** */` comment on above.

## Typography

1. For common typography, components should use the `Text` or `Heading` components.
2. In some cases where you can not use a component, you can use the `typography-helpers.scss` file directly.