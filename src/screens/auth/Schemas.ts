import z from 'zod';

export const LoginFormSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().optional().refine(Boolean, {
    message: 'Password is required',
  }),
});

export const RegisterFormSchema = z
  .object({
    profile: z
      .array(
        z.object({
          uri: z.string(),
          name: z.string().optional(),
          mimeType: z.string().optional(),
          size: z.number().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
        }),
      )
      .optional(),

    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirm_password: z.string(),
    terms: z.array(z.string()).refine(value => value.includes('terms'), {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine(data => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export const OtpFormSchema = z.object({
  otp: z.string().length(4, 'OTP must be 4 digits'),
});
