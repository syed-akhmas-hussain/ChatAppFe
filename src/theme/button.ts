import { Colors } from './colors';

export const Button = {
  variants: {
    primary: {
      background: Colors.primary,
      foreground: Colors.background,
      border: Colors.primary,
    },

    secondary: {
      background: Colors.secondary,
      foreground: Colors.background,
      border: Colors.secondary,
    },

    outline: {
      background: Colors.transparent,
      foreground: Colors.primary,
      border: Colors.border.default,
    },

    text: {
      background: Colors.transparent,
      foreground: Colors.primary,
      border: Colors.transparent,
    },
  },

  disabled: {
    background: Colors.gray,
    foreground: Colors.gray,
    border: Colors.gray,
  },

  spinner: {
    light: Colors.background,
    dark: Colors.primary,
  },

  success: {
    color: Colors.status.success,
  },

  error: {
    color: Colors.status.error,
  },
} as const;

export type ButtonVariant = keyof typeof Button.variants;
