# Icon Generator

## Overview

The Icon Generator is a developer tool that automatically generates exports and types for custom SVG icons.

Instead of manually creating wrapper files or updating `index.ts` whenever a new SVG is added, simply place the SVG in the icons directory and run:

```bash
yarn icons
```

The generator scans all SVG files, validates them, and regenerates the exports automatically.

---

# Goals

- Eliminate repetitive icon boilerplate.
- Keep `index.ts` as a generated file.
- Enforce consistent naming conventions.
- Provide TypeScript autocomplete for icon names.
- Make adding new icons a 10-second task.

---

# Folder Structure

```text
src/
└── assets/
    └── Icons/
        └── svg/
            factory.ts
            index.ts          // Auto-generated
            heart.svg
            home.svg
            search.svg

scripts/
└── icon-generator/
    constants.ts
    formatter.ts
    generator.ts
    index.ts
    logger.ts
    scanner.ts
    templates.ts
    types.ts
    utils.ts
    validator.ts
    writer.ts
```

---

# Usage

Export an SVG from Figma (or another design tool).

Copy it into:

```text
src/assets/Icons/svg
```

Example:

```text
user-circle.svg
```

Run:

```bash
yarn icons
```

The generator updates:

```text
src/assets/Icons/svg/index.ts
```

You can immediately use:

```tsx
import { UserCircle } from '@/assets/Icons/svg';

<UserCircle />;
```

No additional code is required.

---

# Naming Convention

Only **kebab-case** filenames are allowed.

## Valid

```text
heart.svg
arrow-left.svg
user-circle.svg
credit-card.svg
```

## Invalid

```text
Heart.svg
ArrowLeft.svg
my icon.svg
userCircle.svg
```

Invalid filenames will stop the generator and display an error.

---

# Generated Output

Example:

```ts
/**
 * AUTO-GENERATED FILE.
 * DO NOT EDIT MANUALLY.
 */

import { createIcon } from './factory';

import HeartSvg from './heart.svg';
import HomeSvg from './home.svg';

export const Heart = createIcon(HeartSvg);
export const Home = createIcon(HomeSvg);

export type IconName = 'Heart' | 'Home';
```

---

# Architecture

The generator follows a single-responsibility architecture.

## scanner.ts

Scans the icons directory and returns icon metadata.

Responsible for:

- Reading SVG files
- Creating component names

Not responsible for:

- Validation
- Generation
- Writing files

---

## validator.ts

Validates:

- Filename format
- Duplicate component names

Stops execution if validation fails.

---

## generator.ts

Generates the complete source code.

It does not interact with the file system.

---

## templates.ts

Contains reusable template builders.

Responsible for:

- Header
- Imports
- Exports
- IconName type

---

## formatter.ts

Formats generated code before writing.

Currently performs minimal formatting.

Future versions may integrate Prettier.

---

## writer.ts

Writes the generated output to disk.

Only responsibility:

```ts
write(file, contents);
```

---

## logger.ts

Provides consistent console output.

Examples:

```text
ℹ️ Scanning icons...
✅ Validation passed
✅ Generated index.ts
```

---

## index.ts

Acts as the orchestrator.

Pipeline:

```text
Scan
 ↓
Validate
 ↓
Generate
 ↓
Format
 ↓
Write
```

No business logic should live here.

---

# Development Workflow

1. Export an SVG from Figma.
2. Save it inside `src/assets/Icons/svg`.
3. Run:

```bash
yarn icons
```

4. Import the generated component.

Example:

```tsx
import { Heart } from '@/assets/Icons/svg';

<Heart size={24} color="red" />;
```

---

# Current Features

- SVG scanning
- Filename validation
- Duplicate detection
- Automatic export generation
- Automatic `IconName` type generation
- Consistent architecture
- Single-responsibility modules

---

# Future Improvements

Planned enhancements include:

- Watch mode (`yarn icons --watch`)
- Automatic formatting with Prettier
- Colored CLI output
- Manifest generation
- Metadata generation
- Git pre-commit integration
- CLI flags
- Custom error classes

These features are intentionally deferred to keep the initial implementation focused and maintainable.

---

# Design Principles

The Icon Generator follows the same philosophy as the React Native boilerplate:

- Single Responsibility Principle
- Separation of Concerns
- Predictable file structure
- Type safety
- Developer experience first
- Automation over repetition

The goal is to make adding a new icon as simple as:

1. Export SVG.
2. Copy SVG.
3. Run `yarn icons`.

Nothing more.
