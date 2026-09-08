# React Native Boilerplate Context

I am building a production-ready React Native boilerplate from scratch using **React Native CLI**, **TypeScript**, and **Yarn**. This boilerplate will be the foundation for all of my future projects, beginning with a modern chat application.
# Parts of BoilerPlate
✅ Theme (done)
Atoms
    AppText
    AppButton
    AppInput
    AppIcon
    AppImage
    PressableOpacity (optional)
Molecules
    SearchBar
    Avatar
    Badge
    ChatTile
    MessageBubble
Organisms
    ChatHeader
    ChatInput
    InboxList
Navigation
API layer
Storage
State management
## General Philosophy

* Keep the architecture simple and maintainable.
* Do not over-engineer or introduce unnecessary abstractions.
* Prefer reusable components only when they solve a real problem.
* Prioritize readability over clever code.
* If two approaches are equally good, choose the simpler one.
* Avoid creating files or utilities that provide little practical value.

---

## Folder Architecture

I follow Atomic Design.

```text
src/
│
├── assets/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── index.ts
│
├── hooks/
├── navigation/
├── screens/
├── services/
├── theme/
├── types/
├── utils/
└── App.tsx
```

---

## Theme Philosophy

The theme should contain only reusable design tokens.

Current files:

```text
theme/
├── colors.ts
├── sizes.ts
├── typography.ts
├── responsive.ts
├── shadows.ts
└── index.ts
```

Files intentionally NOT included:

* spacing.ts
* radius.ts
* layout.ts
* animation.ts
* icon.ts
* theme.ts

Reason: they currently do not solve a repeated problem.

---

## Sizes

There is only one sizing system.

```ts
Sizes.sm
Sizes.md
Sizes.lg
```

The same sizes are used for spacing, border radius, icon sizes, etc.

No separate spacing.ts or radius.ts unless they become different in the future.

---

## Responsive Design

Scaling is applied only when styles are used.

Example:

```ts
paddingHorizontal: scale(Sizes.md)

fontSize: moderateScale(Typography.fontSize.md)

marginTop: verticalScale(Sizes.lg)
```

Sizes themselves always remain raw values.

---

## Colors

Colors are generated dynamically.

Primary, secondary, success, warning and error palettes are automatically generated using chroma-js.

Gray palette is manually defined.

The color structure looks like this:

```ts
Colors.primary.c500
Colors.secondary.c600
Colors.success.c500
Colors.gray.c300

Colors.common.white
Colors.common.black
Colors.common.transparent

Colors.semantic.text
Colors.semantic.background
Colors.semantic.surface
Colors.semantic.border
Colors.semantic.placeholder
Colors.semantic.link
Colors.semantic.error
```

Components should always use semantic colors whenever possible instead of raw gray shades.

Example:

Good:

```ts
Colors.semantic.text
```

Avoid:

```ts
Colors.gray.c900
```

---

## Typography

Typography is centralized.

Contains:

* fontFamily
* fontSize
* fontWeight
* lineHeight
* letterSpacing

---

## Shadows

There is an applyShadow() helper.

Example:

```ts
applyShadow({
    level: 'md',
    color: Colors.common.black,
})
```

The helper hides platform differences between iOS and Android.

---

## Imports

Use path alias.

Example:

```ts
import { Colors, Sizes } from '@/theme';
```

instead of long relative imports.

---

## Component Philosophy

Components should stay lightweight.

Avoid creating components with dozens of props.

Bad example:

```tsx
<AppText
    variant="bodyLarge"
    weight="semiBold"
    color="primary"
    align="center"
    underline
    italic
/>
```

Prefer simple APIs and allow style overrides where appropriate.

---

## Coding Style

* Prefer composition over inheritance.
* Prefer utility functions over complex abstractions.
* Use TypeScript strictly.
* Use type inference whenever possible.
* Use interfaces only when they improve readability.
* Keep files small and focused.
* Use descriptive names.
* Avoid premature optimization.

---

## Goal

The first application built on this boilerplate is a modern chat application with:

* Inbox screen
* Chat screen
* Settings screen

The UI should be modern, clean and consistent.

When suggesting architecture or code, always prefer long-term maintainability over unnecessary complexity.
