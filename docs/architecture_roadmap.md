# Immediate Roadmap (High Priority)

Continue building the boilerplate in this order:

Reusable Atomic Components

│

├── Foundation

│   │

│   ├── AppText

│   │   ├── Theme-aware typography

│   │   ├── Typography variants (heading, body, caption, etc.)

│   │   ├── Font family & weight

│   │   ├── Color tokens

│   │   ├── Line height & letter spacing

│   │   └── Accessibility support

│   │

│   ├── AppButton

│   │   ├── Built on AppPressable

│   │   ├── Variants (primary, secondary, outline, ghost, danger)

│   │   ├── Sizes

│   │   ├── Loading state

│   │   ├── Disabled state

│   │   ├── Left/Right icons

│   │   └── Full-width support

│   │

│   ├── AppPressable

│   │   ├── Base clickable component

│   │   ├── Ripple/opacity feedback

│   │   ├── HitSlop

│   │   ├── Disabled handling

│   │   ├── Debounce (optional)

│   │   └── Shared press behavior

│   │

│   ├── AppIcon

│   │   ├── Wraps icon library

│   │   ├── Theme colors

│   │   ├── Standard icon sizes

│   │   └── Supports custom SVG icons

│   │

│   ├── AppImage

│   │   ├── Theme-aware image wrapper

│   │   ├── Placeholder

│   │   ├── Fallback image

│   │   ├── Loading indicator

│   │   ├── Border radius

│   │   └── Resize modes

│   │

│   ├── AppAvatar

│   │   ├── Built on AppImage

│   │   ├── Circular images

│   │   ├── Initials fallback

│   │   ├── Status indicator

│   │   └── Multiple predefined sizes

│   │

│   ├── AppDivider

│   │   ├── Horizontal/Vertical divider

│   │   ├── Theme colors

│   │   └── Configurable thickness & spacing

│   │

│   ├── Spacer

│   │   ├── Vertical spacing

│   │   ├── Horizontal spacing

│   │   └── Uses spacing tokens

│   │

│   ├── AppLoader

│   │   ├── Activity indicator

│   │   ├── Inline or fullscreen

│   │   └── Theme colors

│   │

│   ├── AppBadge

│   │   ├── Notification counts

│   │   ├── Dot badge

│   │   └── Status badge

│   │

│   ├── AppChip

│   │   ├── Small selectable chip

│   │   ├── Removable chips

│   │   └── Filter chips

│   │

│   ├── AppTag

│   │   ├── Static labels

│   │   ├── Category tags

│   │   └── Color variants

│   │

│   ├── AppSwitch

│   │   ├── Theme wrapper for Switch

│   │   ├── Disabled state

│   │   └── Custom colors

│   │

│   ├── AppCheckbox

│   │   ├── Controlled checkbox

│   │   ├── Label support

│   │   └── Error state

│   │

│   ├── AppRadio

│   │   ├── Radio button

│   │   ├── Radio group support

│   │   └── Label support

│   │

│   ├── AppProgressBar

│   │   ├── Linear progress

│   │   ├── Determinate/Indeterminate

│   │   └── Animated progress

│   │

│   ├── AppSkeleton

│   │   ├── Loading placeholders

│   │   ├── Text skeleton

│   │   ├── Avatar skeleton

│   │   └── Card skeleton

│   │

│   ├── AppSurface

│   │   ├── Elevated container

│   │   ├── Theme background

│   │   ├── Shadows

│   │   └── Rounded corners

│   │

│   ├── AppCard

│   │   ├── Built on AppSurface

│   │   ├── Header

│   │   ├── Content

│   │   ├── Footer

│   │   └── Pressable support

│   │

│   └── AppBlurView

│       ├── Blur wrapper

│       ├── Adjustable intensity

│       └── Platform compatibility

│

├── Forms

│   │

│   ├── AppTextInput

│   │   ├── Label

│   │   ├── Helper text

│   │   ├── Error message

│   │   ├── Left/Right icons

│   │   ├── Password toggle

│   │   ├── Clear button

│   │   ├── Validation styling

│   │   └── Theme integration

│   │

│   ├── SearchBar

│   │   ├── Built on AppTextInput

│   │   ├── Search icon

│   │   ├── Clear button

│   │   └── Debounced search support

│   │

│   ├── OTPInput

│   │   ├── Multiple input boxes

│   │   ├── Auto focus

│   │   ├── Paste support

│   │   └── Auto next/previous

│   │

│   ├── PinInput

│   │   ├── Numeric input

│   │   ├── Secure mode

│   │   └── Auto focus

│   │

│   ├── AppSelect

│   │   ├── Dropdown selector

│   │   ├── Search support

│   │   ├── Single/Multi select

│   │   └── Bottom sheet integration

│   │

│   ├── AppDatePicker

│   │   ├── Date selection

│   │   ├── Min/Max dates

│   │   └── Theme support

│   │

│   ├── AppTimePicker

│   │   ├── Time selection

│   │   ├── 12/24-hour mode

│   │   └── Theme support

│   │

│   └── AppSlider

│       ├── Value selection

│       ├── Min/Max labels

│       ├── Step support

│       └── Theme colors

│

├── Layout

│   │

│   ├── Screen

│   │   ├── SafeAreaView wrapper

│   │   ├── StatusBar handling

│   │   ├── Background color

│   │   ├── Optional ScrollView

│   │   ├── Keyboard avoiding

│   │   ├── Default horizontal padding

│   │   └── Loading/Error overlays

│   │

│   ├── AppScrollView

│   │   ├── Theme-aware ScrollView

│   │   ├── Keyboard handling

│   │   ├── Pull-to-refresh support

│   │   └── Default content padding

│   │

│   ├── AppKeyboardView

│   │   ├── KeyboardAvoidingView wrapper

│   │   ├── Platform handling

│   │   └── Configurable behavior

│   │

│   ├── AppRow

│   │   ├── flexDirection: row

│   │   ├── Alignment props

│   │   ├── Justify props

│   │   └── Gap support

│   │

│   ├── AppColumn

│   │   ├── flexDirection: column

│   │   ├── Alignment props

│   │   ├── Justify props

│   │   └── Gap support

│   │

│   ├── AppCenter

│   │   ├── Centers children

│   │   ├── Horizontal center

│   │   ├── Vertical center

│   │   └── Flex support

│   │

│   ├── AppStack

│   │   ├── Vertical stack

│   │   ├── Horizontal stack

│   │   ├── Gap management

│   │   └── Consistent spacing

│   │

│   ├── AppSeparator

│   │   ├── List separators

│   │   ├── Horizontal/Vertical

│   │   └── Theme colors

│   │

│   ├── AppContainer

│   │   ├── Standard page width

│   │   ├── Horizontal padding

│   │   ├── Max width (optional)

│   │   └── Responsive layout

│   │

│   └── AppListItem

│       ├── Reusable list row

│       ├── Left icon/avatar

│       ├── Title & subtitle

│       ├── Right accessory (chevron/switch/badge)

│       ├── Pressable support

│       └── Perfect for settings, menus & profile lists

│

└── Feedback

    │

    ├── AppToast

    │   ├── Success/Error/Warning/Info

    │   ├── Auto dismiss

    │   ├── Custom duration

    │   └── Action button

    │

    ├── AppSnackbar

    │   ├── Bottom notification

    │   ├── Action button

    │   ├── Swipe dismiss

    │   └── Theme support

    │

    ├── AppModal

    │   ├── Reusable modal wrapper

    │   ├── Header/Footer slots

    │   ├── Backdrop handling

    │   ├── Animations

    │   └── Close gestures

    │

    └── AppBottomSheet

        ├── Built on BottomSheet library

        ├── Snap points

        ├── Drag to dismiss

        ├── Backdrop

        ├── Scrollable content

        └── Theme integration



# React Native Production Boilerplate Architecture

A scalable, production-grade React Native 0.86+ + TypeScript boilerplate focused on:

- Clean Architecture
- Design System First Approach
- Single Source of Truth
- Strong Type Safety
- Developer Experience (DX)
- Long-term maintainability

---

# 🧱 Project Structure

src/
├── assets/
├── components/
│   ├── foundation/
│   ├── feedback/
│   ├── forms/
│   ├── layout/
│   └── navigation/
├── features/
│   ├── auth/
│   ├── profile/
│   └── home/
├── hooks/
├── theme/
├── services/
├── api/
├── store/
├── utils/
├── constants/
├── types/
├── navigation/
└── errors/

---

# 🎨 Theme System

## Includes
- Colors
- Typography
- Sizes
- Responsive scaling
- Shadow system
- Z-index system
- Theme exports

## Philosophy
- Token-based design
- No hardcoded UI values
- Fully reusable across components

---

# 🧩 Component System

## Foundation Components
- AppText
- AppPressable
- AppButton
- AppIcon
- AppImage
- AppAvatar
- Spacer
- Divider
- Loader
- Surface
- Card
- BlurView

---

## Feedback Components
- Badge
- Chip
- Tag
- ProgressBar
- Skeleton

---

## Forms System
- AppTextInput
- SearchBar
- OTPInput
- PinInput
- AppCheckbox
- AppRadio
- AppSwitch
- AppSlider
- AppSelect
- AppDatePicker
- AppTimePicker

---

## Layout Components
- Spacer
- Divider
- Surface
- Card
- BlurView

---

# 📦 State Management

## Zustand (Client State)
Use for:
- Auth state
- Theme state
- App settings
- Onboarding state
- Feature flags

Not for server state.

---

## TanStack Query (Server State)

Use for:
- API caching
- Server synchronization
- Background refetching
- Mutations

Flow:

API Client → Services → Query Hooks → Screens

---

# 🌐 API Layer

api/
  client.ts
  interceptors.ts
  index.ts

services/
  user.service.ts
  auth.service.ts

Rules:
- Screens never call API directly
- Services handle API logic
- Centralized client only

---

# 🧪 Validation (Zod)

Used for:
- Forms
- API responses
- Environment variables
- Config validation

---

# 💾 Storage (MMKV Wrapper)

storage/
  index.ts
  storage.ts
  storageKeys.ts

Rules:
- Never expose MMKV directly
- Always use wrapper
- Keep replaceable

---

# 🔐 Error Handling

errors/
  AppError.ts
  ApiError.ts
  NetworkError.ts
  ValidationError.ts

---

# 🧾 Logging

logger.info()
logger.warn()
logger.error()

- Wrapper over console
- Future-ready for Sentry/Crashlytics

---

# 📊 Analytics

analytics.track()
analytics.screen()
analytics.identify()

- Keep abstraction stable
- Start minimal

---

# 🔔 UI Utilities

## Toast
toast.success()
toast.error()
toast.info()

## Modal
showModal()
hideModal()

## Permissions
- camera
- gallery
- location
- notifications

---

# ⚙️ Navigation

navigation/
  root.tsx
  types.ts
  linking.ts
  helpers.ts

Rules:
- Keep typed
- Avoid over-abstraction

---

# 🧠 Hooks

- useDebounce
- usePrevious
- useTheme
- useBoolean
- useDisclosure
- useKeyboard
- useBackHandler
- useNetwork

---

# 🧰 Utilities

- debounce
- throttle
- clamp
- sleep
- deepMerge
- formatDate
- formatCurrency
- formatNumber
- isDefined
- noop

---

# 🖼️ Icon System

SVG → createIcon() → Generated exports → IconName types

Features:
- Typed icons
- Auto-generation
- Responsive sizing
- Theme support

---

# 🧰 Icon CLI

Pipeline:
Scan → Validate → Generate → Format → Write

Command:
yarn icons

---

# 📚 Recommended Libraries

## Core
- react-native
- typescript
- react-navigation
- @tanstack/react-query
- zustand
- zod
- axios
- react-hook-form
- react-native-mmkv

---

## UI / UX
- react-native-svg
- react-native-svg-transformer
- react-native-reanimated
- react-native-gesture-handler
- react-native-safe-area-context
- react-native-screens
- @gorhom/bottom-sheet

---

## Optional
- dayjs
- react-native-config
- react-native-fast-image
- react-native-permissions
- react-native-netinfo
- react-native-device-info
- react-native-bootsplash
- react-native-keyboard-controller
- react-native-toast-message

---

# 🧭 Architectural Principles

## Prefer
- Composition over inheritance
- Automation over manual work
- Strong typing
- Small reusable APIs
- Separation of concerns

## Avoid
- Premature abstraction
- Direct library coupling in UI
- Business logic inside components

---

# 🚀 Goal

A production-grade, scalable React Native architecture that can support multiple apps without redesigning core systems.