# React Native Boilerplate — Done & Remaining

## ✅ DONE

### Core UI

- [x] AppText
- [x] AppPressable
- [x] AppButton
- [x] Theme system
- [x] Responsive utilities: scale(), verticalScale(), moderateScale()

### Infrastructure

- [x] Toast
- [x] Bottom Sheet dependency/setup
- [x] Environment configuration
- [x] MMKV storage
- [x] React Navigation setup
- [x] React Hook Form
- [x] Zod validation
- [x] Keyboard-aware screen setup

### Dynamic Forms

- [x] Dynamic form architecture
- [x] Field type mapping
- [x] AppTextInput
- [x] File/media input
- [x] Media normalization
- [x] Image/fallback handling
- [x] Form validation and error display
- [x] First-invalid-field auto-scroll
- [x] Field layout/position tracking

### Dependencies / Infrastructure

- [x] react-native-gesture-handler setup
- [x] react-native-reanimated setup

### Bottom Sheet

- [x] Bottom Sheet integration/wrapper in AppScreen
  - Decide the intended abstraction
  - Integrate Bottom Sheet behavior where appropriate
  - Keep usage simple for screens
- [x] AppSearchBar
  - Reusable search input
  - Search icon
  - Clear action
  - Optional loading state

### Utilities

- [x] debounce()
  > Gesture Handler and Reanimated are considered infrastructure, not unfinished components. They only need final verification during the boilerplate audit.

---

## ❌ NOT DONE: THESE WILL BE IMPLEMENTED LATER IN FUTURE IF NEEDE

### Components

### Utilities

- [ ] throttle()

### Navigation

- [ ] Navigation abstraction
  - Create a clean reusable abstraction around navigation
  - Keep screen components from depending unnecessarily on navigation implementation details

---

## ⚠️ DEFERRED / FINAL AUDIT

### API & Error Handling

- [ ] API/error-handling strategy
  - Intentionally deferred
  - Decide service/API client structure
  - Decide global vs screen-level error handling
  - Decide unauthorized/token-expiry handling
  - Current approach: screens handle their own loading/error UI

### Gesture Handler / Reanimated

- [ ] Final verification only
  - Confirm the app builds correctly
  - Confirm Reanimated configuration works
  - Confirm Gesture Handler root/setup is correct
  - Do not create a dedicated abstraction unless a real repeated use case appears

---

# Final Remaining Checklist

3. [ ] throttle()
4. [ ] Navigation abstraction
5. [ ] Final Gesture Handler/Reanimated verification
6. [ ] API/error-handling strategy

> **Goal:** Keep the boilerplate reusable without adding components or abstractions that are not actually needed.
