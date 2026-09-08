import { Colors } from './colors';

export const Button = {
  variants: {
    primary: {
      background: Colors.primary.c500,
      foreground: Colors.common.white,
      border: Colors.primary.c500,
    },

    secondary: {
      background: Colors.secondary.c500,
      foreground: Colors.common.white,
      border: Colors.secondary.c500,
    },

    outline: {
      background: Colors.common.transparent,
      foreground: Colors.primary.c500,
      border: Colors.primary.c500,
    },

    text: {
      background: Colors.common.transparent,
      foreground: Colors.primary.c500,
      border: Colors.common.transparent,
    },
  },

  disabled: {
    background: Colors.gray.c200,
    foreground: Colors.gray.c500,
    border: Colors.gray.c200,
  },

  spinner: {
    light: Colors.common.white,
    dark: Colors.primary.c500,
  },

  success: {
    color: Colors.success.c500,
  },

  error: {
    color: Colors.error.c500,
  },
} as const;

export type ButtonVariant = keyof typeof Button.variants;
