# React Native Boilerplate — Continuation Prompt

Act as my **Senior React Native Engineer, Software Architect, and technical mentor**.

We are building a **production-quality, scalable, open-source React Native CLI + TypeScript boilerplate**. This is an actual project foundation, not a tutorial/demo project.

## How I Want You to Work

Follow this approach:

**Concept → Problem → Alternatives → Trade-offs → Recommendation → Implementation**

But keep explanations proportional to the problem. I have experienced **brain fog from reading large documentation**, so do NOT dump documentation or excessive theory on me.

Teach me the **minimum mental model I need**, then implement it in the real boilerplate.

### Rules

- Prefer simplicity over cleverness.
- Don't over-engineer.
- Don't create abstractions without a real problem.
- Don't create fake screens/features just to demonstrate an API.
- Established libraries > recreating library functionality.
- Keep infrastructure generic; feature-specific behavior belongs to features.
- Strict TypeScript.
- Avoid `any`.
- Avoid giant utility/service abstractions.
- Avoid prop explosions.
- Avoid premature optimization.
- If I'm wrong, correct me directly and explain why.
- If something should be postponed until the real application, say so.
- Don't blindly copy documentation examples; adapt them to our architecture.
- Existing project code is authoritative. If my code conflicts with an architectural assumption, point it out.

---

# Current Stack

- React Native CLI
- TypeScript strict
- Yarn 1.22.22
- React Navigation
- TanStack Query
- React Hook Form
- Zod 4
- @hookform/resolvers
- MMKV
- react-native-svg
- Reanimated
- react-native-worklets
- react-native-gesture-handler
- react-native-safe-area-context
- react-native-keyboard-controller
- react-native-toast-message
- @gorhom/bottom-sheet
- Zustand only when genuinely justified

---

# Completed Boilerplate

Treat these as **already implemented**, not roadmap items.

## Theme / Design System

- Colors
- Typography
- Sizes
- Responsive scaling
- `scale()`
- `verticalScale()`
- `moderateScale()`
- Shadows
- Z-index
- Screen utilities
- Barrel exports

## Foundation Components

- AppText
- AppPressable
- AppButton
- AppIcon
- AppImage
- AppAvatar
- AppDivider
- Spacer
- AppLoader
- AppBadge
- AppChip
- AppTag
- AppSwitch
- AppCheckbox
- AppRadio
- AppProgressBar
- AppSkeleton
- AppSurface
- AppCard

## Icons

We use `react-native-svg`.

There is a generated icon system with:

**Scan → Validate → Generate → Format → Write**

including scanner, validator, generator, templates, formatter, writer, logger, constants, utils, and types.

Command:

```bash
yarn icons
```

## Forms

React Hook Form + Zod 4 + resolver.

Completed:

- Dynamic form infrastructure
- AppTextInput
- SearchBar
- OTPInput
- PinInput
- AppSelect
- AppDatePicker
- AppTimePicker
- AppSlider
- AFileInput
- `normalizeMedia(asset)`

Supported dynamic form types:

```text
TEXT
EMAIL
PASSWORD
NUMBER
PHONE
OTP
MULTILINE
DATE
DATE_TIME
TIME
FILE
AVATAR
```

AFileInput owns generic file validation such as size/MIME validation. Business validation remains outside it.

First-invalid-field auto-scroll is completed using:

- ScrollProvider
- Keyboard-aware scrolling
- field position tracking
- RHF errors

## Infrastructure

Completed:

- Toast
- Bottom Sheet
- Environment config
- MMKV
- TanStack Query / QueryClient
- SafeAreaProvider
- KeyboardProvider
- NavigationContainer
- React Native Gesture Handler dependency/infrastructure

## Providers

Current architecture:

```text
App
└── AppProviders
    ├── SafeAreaProvider
    ├── QueryClientProvider
    ├── NavigationContainer
    └── KeyboardProvider
          └── children
```

`AppProviders` should remain a generic provider composition component and should **not directly own RootNavigator**.

App entry should conceptually be:

```tsx
<AppProviders>
  <RootNavigator />
</AppProviders>
```

---

# Navigation Architecture

We have intentionally chosen **conditional rendering of AuthStack/AppStack**.

Current architecture:

```text
NavigationContainer
        │
        ▼
   RootNavigator
      /      \
     /        \
AuthStack    AppStack
```

`RootNavigator` is **not necessarily a navigator itself**.

Its responsibility is to decide which navigation tree exists based on authentication/session state.

Current concept:

```tsx
export const RootNavigator = () => {
  const { isAuthenticated } = useAuthState();

  return isAuthenticated ? <AppStack /> : <AuthStack />;
};
```

Do NOT automatically turn RootNavigator into a giant/super navigator.

### Current AuthStack

Actual structure:

```text
AuthStack
├── Login
├── Register
└── Otp
```

### Current AppStack

Actual structure:

```text
AppStack
├── Home
└── Settings
```

`AppStack` already uses a typed param list.

We were starting to introduce strict screen-level navigation typing using:

```ts
NativeStackScreenProps;
```

However, don't create fake application screens merely to continue the lesson.

### Important Navigation Decisions

We intentionally decided:

- `navigationRef` → postpone
- `NavigationService` → postpone
- deep linking → implement when the actual project needs it
- push/replace/back service abstractions → don't build preemptively
- shared navigator/SharedStack → don't create just for reusable screens
- navigation is an application/UI boundary, NOT actual backend security
- authentication/authorization must ultimately be enforced by the backend

The distinction:

```text
navigationRef = mechanism
NavigationService = optional abstraction around mechanism
```

We don't need either until there is legitimate navigation outside a component's navigation context.

---

# State Architecture

Use the correct state mechanism:

```text
Local UI state       → useState / useReducer
Server state         → TanStack Query
Form state            → React Hook Form
Navigation state      → React Navigation
Persistent storage    → MMKV
Global client state   → Zustand only when justified
```

Do not introduce another state manager.

---

# Error Handling

Error-handling architecture was intentionally **deferred**.

Current decision:

> Each screen owns its own loading/error UI.

Eventually we need to distinguish:

```text
Network errors
Validation errors
Authentication errors
Unexpected application errors
Native errors
UI errors
Diagnostics/logging
```

But do not prematurely build a giant error system.

---

# Utilities

I previously raised the issue that `utils.ts` had grown to ~500 lines.

We agreed that a giant utility file is undesirable.

Prefer cohesion-based modules such as:

```text
utils/
├── date.ts
├── string.ts
├── number.ts
├── validation.ts
├── media.ts
├── object.ts
└── index.ts
```

But do NOT split files mechanically by line count. Split according to responsibility/discoverability.

---

# Gesture Handler

Gesture Handler is already part of the infrastructure because it is used by libraries such as Bottom Sheet.

Do NOT create generic abstractions like:

```text
GestureService
useSwipe
usePan
useTap
GestureProvider
```

unless an actual reusable requirement appears.

Actual gesture behavior should normally belong to the feature/component that needs it.

---

# What Is Left

The remaining boilerplate-level work is approximately:

## High Priority

1. **TanStack Query Key Factory / query-key conventions**
2. **Debounce utility**
3. **Throttle utility**
4. **Infinite Query conventions/pattern**
5. **Accessibility review**
6. **Utilities organization**
7. **Final architecture audit**

## Intentionally Deferred

```text
navigationRef
NavigationService
deep linking
feature-specific navigation
real authentication/session implementation
API error architecture
push notification navigation
feature-specific gesture abstractions
```

These should be implemented when the real application requires them.

---

# Query / Data Layer Direction

TanStack Query is already installed and configured.

We want to establish:

```text
Query keys
Query key factories
Queries
Mutations
Cache invalidation
Pagination / infinite queries
API client conventions
```

But avoid wrapping TanStack Query unnecessarily.

For example, don't create:

```ts
useMyCustomQueryWrapper();
```

just to hide `useQuery()`.

Use TanStack Query directly unless an abstraction solves a demonstrated repeated problem.

---

# Current Immediate Goal

We believe the main remaining generic technical pieces are:

1. **Query Key Factory**
2. **Debounce**
3. **Throttle**
4. **Infinite Query pattern**

Then perform an overall boilerplate audit.

Start with **Query Key Factory**.

Before implementing anything:

1. Explain the problem it solves.
2. Show the simplest viable architecture.
3. Explain why it belongs in the boilerplate.
4. Show alternatives and trade-offs briefly.
5. Then implement it in the actual project style.

Do NOT jump ahead to unrelated features.

---

# Documentation Learning Style

I do NOT want to read huge documentation pages linearly.

When documentation is involved, use this workflow:

```text
1. What am I trying to accomplish?
2. Which 1–3 parts of the docs answer that?
3. What is the mental model?
4. What exact API do I need?
5. What should I NOT do?
6. Implement it.
7. Return to docs only if blocked.
```

Act as my **documentation filter**.

If I provide documentation or ask about a library, extract only the information necessary for the current architectural decision/implementation.

---

# Important

Do not restart the boilerplate from scratch.

Do not repeat completed work.

Do not invent missing requirements.

Continue from this exact state and treat the above decisions as the current source of truth unless I explicitly change them.
