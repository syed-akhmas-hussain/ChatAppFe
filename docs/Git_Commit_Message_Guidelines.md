# Git Commit Message Guidelines

A good commit message should clearly communicate:

> **What changed, and why?**

The code diff explains **how** the change was implemented. The commit message should explain the purpose of the change.

---

## 1. Basic Commit Message Structure

For most changes, use:

```text
type: short description
```

Example:

```text
feat: add reusable toast feedback system
```

For larger changes, you can add a body:

```text
feat: add reusable toast feedback system

Add global toast handling for success, error, and info messages.
Expose a small application-level API so screens don't depend
directly on the toast library.
```

---

## 2. Conventional Commit Types

Use these prefixes consistently:

| Prefix      | Use when                                             |
| ----------- | ---------------------------------------------------- |
| `feat:`     | Adding new functionality                             |
| `fix:`      | Fixing a bug                                         |
| `refactor:` | Changing code without changing behavior              |
| `docs:`     | Documentation-only changes                           |
| `style:`    | Formatting or styling-only changes                   |
| `test:`     | Adding or changing tests                             |
| `chore:`    | Tooling, configuration, dependencies, or maintenance |

### Examples

```text
feat: add reusable toast feedback system
```

```text
fix: correct toast positioning on Android
```

```text
refactor: simplify toast service API
```

```text
docs: document navigation architecture
```

```text
test: add validation tests for login form
```

```text
chore: update React Native dependencies
```

---

## 3. What Makes a Good Commit Message?

A good commit message should be:

- Short
- Specific
- Written in the present/implied action form
- Focused on the purpose of the change
- Understandable without opening the code

### Good

```text
feat: add reusable toast feedback system
```

### Bad

```text
updated code
```

```text
changes
```

```text
toast work
```

```text
fixed stuff
```

The difference is that the good version tells another developer exactly what the change represents.

---

## 4. Don't Describe Every Changed File

Avoid commit messages like:

```text
Added toast.ts
Added ToastProvider.tsx
Changed App.tsx
Changed colors.ts
Installed react-native-toast-message
Updated package.json
```

The Git diff already tells you which files changed.

Instead, describe the purpose:

```text
feat: add reusable toast feedback system
```

The commit message answers:

> **Why does this commit exist?**

The diff answers:

> **How was it implemented?**

---

## 5. Keep Commits Focused

Prefer several meaningful commits over one giant commit.

### Avoid

```text
feat: finish entire boilerplate
```

with dozens of unrelated changes.

### Prefer

```text
feat: add toast feedback system
```

Then:

```text
feat: add bottom sheet infrastructure
```

Then:

```text
feat: add environment configuration
```

Then:

```text
feat: add storage utilities
```

Then:

```text
feat: add API client
```

Then:

```text
feat: add reusable form inputs
```

This makes the Git history easier to understand and makes debugging easier because each commit represents a relatively focused conceptual change.

---

## 6. Example Git History for the RN Boilerplate

A clean history might look like:

```text
feat: add theme system
feat: add foundation UI components
feat: add icon system
feat: add toast feedback system
feat: add bottom sheet infrastructure
feat: add environment configuration
feat: add storage utilities
feat: add API client
feat: add reusable form inputs
```

Each commit represents a clear piece of the boilerplate.

---

## 7. When to Add a Commit Body

For a small, obvious change, a one-line message is enough:

```text
feat: add toast feedback system
```

Use a body when the change needs additional context.

Example:

```text
feat: add reusable toast feedback system

Add global toast handling for success, error, and info messages.
Expose a small application-level API so screens don't depend
directly on the underlying toast library.
```

The body is useful when someone reading the history later needs to understand the reasoning behind the change.

---

## 8. Commit Message Mental Model

Think of a commit like this:

```text
Commit
│
├── WHAT?
│   "Add reusable toast feedback system"
│
└── WHY?
    "Provide consistent transient feedback across screens"
```

The implementation details belong primarily in the code and diff.

---

## 9. Commit Checklist

Before committing, ask:

- [ ] Does the commit have one clear purpose?
- [ ] Did I choose the correct type?
- [ ] Does the message describe what changed?
- [ ] Is the wording specific?
- [ ] Is the message short enough?
- [ ] Would another developer understand it without opening the code?
- [ ] Am I explaining the purpose instead of listing files?
- [ ] If the change is complex, did I add a useful commit body?
- [ ] Did I avoid mixing unrelated changes into the same commit?

---

## 10. Quick Reference

### New functionality

```text
feat: add ...
```

### Bug fix

```text
fix: prevent ...
```

### Internal code improvement

```text
refactor: simplify ...
```

### Documentation

```text
docs: document ...
```

### Tests

```text
test: add ...
```

### Tooling/dependencies/configuration

```text
chore: update ...
```

### Styling/formatting only

```text
style: format ...
```

---

## Recommended Default

For your React Native boilerplate, use this as the default pattern:

```text
type: concise description of the change
```

When the change is substantial:

```text
type: concise description of the change

Explain the important context, reasoning, or behavior
that is not obvious from the diff.
```

### Example

```text
feat: add reusable toast feedback system

Provide a consistent mechanism for displaying success,
error, and info feedback across the application.
```

---

## Principle to Remember

> **A commit should tell the story of the project.**

When you look at the Git history months later, you should be able to understand how the project evolved without opening every commit.
